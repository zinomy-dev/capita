import {contractCreated} from "../action/dashboard";

const actionsConstant = {

    loginActions: {
        loggedIn: 'loggedIn',
        logOut: 'logOut',
        logIn: 'logIn'
    },
    dashboard: {
        loadOrgData: 'load_org_data',
        loadMembersData: 'loadMembersData',
        loadReposData: 'loadReposData',
        setRepoName: 'setRepoName',
        ethereumNotAvail: 'ethereumNotAvail',
        ethereumAddress: 'ethereumAddress',
        contractCreated: 'contractCreated',
        loadContract : 'loadContract',
        walletConnected : 'walletConnected'
    }
};

export default actionsConstant;