import {ethers} from "ethers";
import contractAddress from "../constant/contracts/contract-address.json";
import TokenArtifact from "../constant/contracts/Token.json";
import CapitaArtifact from "../constant/contracts/Capita.json";
import {store} from '../store/index';
import {API_URL} from "../constant";
import APIHandler from "../service/API_Handler";
class Ethereum {
    // to use when deploying to other networks.
    MUMBAI_NETWORK_ID = "80001";
    // This is an error code that indicates that the user canceled a transaction
    ERROR_CODE_TX_REJECTED_BY_USER = 4001;

    get isValidNetWork() {
        return window.ethereum.networkVersion === this.MUMBAI_NETWORK_ID
    }
    get state() {
        const state = store.getState();
        return state.wallet;
    }
    async connect() {
        const [selectedAddress] = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        window.ethereum.on('accountsChanged', this.accountChanged.bind(this));
        await this._initialize(selectedAddress);
        return selectedAddress;
    }

    /**
     * @private
     *
     * */
    async _initialize(address) {
        // We first initialize ethers by creating a provider using window.ethereum

        this._provider = new ethers.providers.Web3Provider(window.ethereum);

        this._token = new ethers.Contract(
            contractAddress.Token,
            TokenArtifact.abi,
            this._provider.getSigner(0)
        )

        this._capita = new ethers.Contract(
            contractAddress.Capita,
            CapitaArtifact.abi,
            this._provider.getSigner(0)
        );
        this.state['address'] = address;
        console.log(this.state);
        await this.fetchProjects();
        return address;
    }

    accountChanged([address]) {
        this._initialize(address)
    }

    async createContract(_payload) {
        _payload.projectId = 7;
        return await this._insertProjectData(_payload);
        const tx = await this._capita.createProject(
            _payload.repoUri,
            _payload.numOfCollab,
            _payload.address,
            _payload.totalSupply,
            _payload.nameOfToken,
            _payload.symbolOfToken
        );
        // this.setState({ txBeingSent: tx.hash });

        const receipt = await tx.wait();
        console.log(receipt);
        console.log(tx);
        if (receipt.status === 0) {
            throw new Error("Transaction failed");
        }
        const projects = await this.fetchProjects();
        _payload.projectId = projects.length - 1;
        return await this._insertProjectData(_payload);
    }

    async _insertProjectData(_payload) {
        const successAPI = new APIHandler({
            url: `${API_URL}/auth/contracts`,
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify(_payload)
        });
        return await successAPI.exec()
    }
    async fetchProjects() {

        const projects = [];
        const getProjectCount = await this._capita.numOfProjects();
        for (let i = 1; i <= getProjectCount; i++) {
            projects.push(await this._capita.projects(i));
            // this.setState({ projectList: getProject });
        }
        this.state['projects'] = projects;
        console.log(this.state);
        return projects;
    }

    async getOwners(index) {
        const owners = await this._capita.getSecOwners(index);
        // this.setState({ getSecOwners: getSecOwners });
        this.state['owners'] = owners;
        return owners;
    }

    async getTokenData() {
        const name = await this._token.name();
        const symbol = await this._token.symbol();
        this.state['tokenData'] = {name, symbol};
        return {name, symbol};

        // this.setState({ tokenData: { name, symbol } });
    }

    async getBalance(selectedAddress) {
        return await this._token.balanceOf(selectedAddress);

        //this.setState({ balance });
    }

    async getProjectCount() {
        return Number(await this._capita.numOfProjects());
        // this.setState({ getProjectCount });
    }


    async getAllocation(index) {
        const getAllocation = await this._capita.getAllocation(index);
        console.log(getAllocation.toString())
        return {getAllocation: getAllocation};
    }

    async setAllocation(input, allocation) {
        try {
            // If a transaction fails, we save that error in the component's state.
            // We only save one such error, so before sending a second transaction, we
            // clear it.
            this._dismissTransactionError();

            // We send the transaction, and save its hash in the Dapp's state. This
            // way we can indicate that we are waiting for it to be mined.
            const tx = await this._capita.setAllocation(input, allocation);
            this.setState({txBeingSent: tx.hash});

            // We use .wait() to wait for the transaction to be mined. This method
            // returns the transaction's receipt.
            const receipt = await tx.wait();

            // The receipt, contains a status flag, which is 0 to indicate an error.
            if (receipt.status === 0) {
                // We can't know the exact error that made the transaction fail when it
                // was mined, so we throw this generic one.
                throw new Error("Transaction failed");
            }

            // If we got here, the transaction was successful, so you may want to
            // update your state. Here, we update the user's balance.
            return await this.fetchProjects();
        } catch (error) {
            // We check the error code to see if this error was produced because the
            // user rejected a tx. If that's the case, we do nothing.
            if (error.code === 0) {
                return;
            }

            // Other errors are logged and stored in the Dapp's state. This is used to
            // show them to the user, and for debugging.
            console.error(error);
            // this.setState({ transactionError: error });
        } finally {
            // If we leave the try/catch, we aren't sending a tx anymore, so we clear
            // this part of the state.
            // this.setState({ txBeingSent: undefined });
        }
    }

    async disburse(index) {
        try {
            // this._dismissTransactionError();

            const tx = await this._capita.disburse(index);
            // this.setState({ txBeingSent: tx.hash });
            const receipt = await tx.wait();

            if (receipt.status === 0) {
                throw new Error("Transaction failed");
            }

            return await this.fetchProjects();

        } catch (error) {
            if (error.code === this.ERROR_CODE_TX_REJECTED_BY_USER) {
                return;
            }

            console.error(error);
            // this.setState({ transactionError: error });
        } finally {
            //
            // this.setState({ txBeingSent: undefined });
        }
    }
}

export default new Ethereum();