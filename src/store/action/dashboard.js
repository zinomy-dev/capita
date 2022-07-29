import APIHandler from "../../service/API_Handler";
import Ethereum from "../../controller/Ethereum";
import {API_URL} from "../../constant";
import CONSTANTS from '../constants/actions.js';
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
export const setRepoName = (repoName) => {
    return {
        type: "setRepoName",
        repoName: repoName
    }
}

export const connectToWallet = () => {


    return async dispatch => {
        if (typeof window.ethereum === 'undefined') {
            console.log(typeof window.ethereum === 'undefined')
            dispatch( {
                type: dashboard.ethereumNotAvail,
                status: true
            });
        }else {
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