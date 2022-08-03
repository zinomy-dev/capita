import APIHandler from "../../service/API_Handler";
import Ethereum from "../../controller/Ethereum";
import { API_URL } from "../../constant";
import CONSTANTS from '../constants/actions.js';
import { encode as base64_encode } from 'base-64';
const dashboard = CONSTANTS.dashboard;
export const fetchOrgData = () => {
    return async dispatch => {
        const successAPI = new APIHandler({
            url: `${API_URL}/auth/github/orgs`,
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            }
        });
        if (await successAPI.exec()) {
            dispatch(loadOrgData(successAPI.responseObject));
        }
    }
}

export const loadContract = (payload) => {
    return {
        type: "loadContract",
        contractPayload: payload
    }
}

export const fetchContract = (email) => {
    // email = base64_encode(email);
    return async dispatch => {
        const successAPI = new APIHandler({
            url: `${API_URL}/auth/contract/${email}`,
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            }
        });
        if (await successAPI.exec()) {
            if (Object.keys(successAPI.responseObject).length === 0) {
                dispatch(fetchOrgData())
                return 0;
            } else {
                dispatch(loadContract(successAPI.responseObject));
            }

        }
    }
}

export const loadOrgData = (payload) => {
    return {
        type: "load_org_data",
        orgPayload: payload
    }
}

export const fetchMembers = (organizationName) => {
    return async dispatch => {
        const successAPI = new APIHandler({
            url: `${API_URL}/auth/github/orgs/${organizationName}/members`,
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            }
        });
        if (await successAPI.exec()) {
            dispatch(loadMembersData({
                data: successAPI.responseObject,
                organizationName: organizationName
            }));
        }
    }
}

export const loadMembersData = (payload) => {
    return {
        type: "loadMembersData",
        membersPayload: payload.data,
        organizationName: payload.organizationName,
    }
}

export const fetchRepos = (organizationName, Members) => {
    return async dispatch => {
        const successAPI = new APIHandler({
            url: `${API_URL}/auth/github/users/${organizationName}/repos`,
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            }
        });
        if (await successAPI.exec()) {
            dispatch(loadReposData({
                data: successAPI.responseObject,
                membersList: Members
            }));
        }
    }
}

export const loadReposData = (payload) => {
    return {
        type: "loadReposData",
        reposPayload: payload.data,
        membersList: payload.membersList
    }
}
export const setRepoName = (repoName, uri) => {
    return {
        type: "setRepoName",
        repoName: repoName,
        uri: uri
    }
}

export const connectToWallet = () => {
    return async dispatch => {
        if (typeof window.ethereum === 'undefined') {
            dispatch({
                type: dashboard.ethereumNotAvail,
                status: true
            });
        } else {
            const selectedAddress = await Ethereum.connect();
            dispatch(loadEthereumAddress({
                data: selectedAddress
            }))
        }

    }
}
export const loadEthereumAddress = (payload) => {
    return {
        type: dashboard.ethereumAddress,
        ethereumAddress: payload.data
    }
}

export const contractCreated = (payload) => {
    console.log(payload)
    return {
        type: dashboard.contractCreated,
        recentContract: payload.data
    }
}

export const createContract = (payload) => {
    return async dispatch => {
        if (typeof window.ethereum === 'undefined') {
            dispatch({
                type: dashboard.ethereumNotAvail,
                status: true
            });
        } else {

            const contract = await Ethereum.createContract(payload);
            dispatch(contractCreated({
                data: contract
            }));


        }

    }
}