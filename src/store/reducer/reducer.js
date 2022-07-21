import { defaultState } from "../state/default.state.js";
import actionsConstant from '../constants/actions'
const { loginActions, dashboard } = actionsConstant;
const reducer = (state = defaultState, action) => {
    const newState = { ...state };

    // eslint-disable-next-line default-case
    switch (action.type) {
        case loginActions.loggedIn:
            newState.user = action.loginPayload;
            break;
        case dashboard.loadOrgData:
            newState.organizations = action.orgPayload;
            break;
        case dashboard.loadMembersData:
            newState.members = action.membersPayload;
            newState.organizationName = action.organizationName;
            break;
        case dashboard.loadReposData:
            newState.repos = action.reposPayload;
            newState.membersList = action.membersList;
            break;
        case dashboard.setRepoName:
            newState.repoName = action.repoName;
            break;
    }
    return newState;
}

export default reducer;