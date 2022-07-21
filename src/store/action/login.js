import APIHandler from "../../service/API_Handler";

export const logIn = ()=> {
    return {type: "logIn",
    payload: false}
};
export const logOut = ()=> {return {
    type: "logOut",
    payload: false
}
};
export const loggedIn = (payload) => {
    return {type: "loggedIn",
    loginPayload: payload}
}
export const isLoggedIn = () => {
    return async dispatch => {
        const successAPI = new APIHandler({
            url:"http://localhost:5000/auth/login/success",
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
              }
        });
        if (await successAPI.exec()) {
            dispatch(loggedIn(successAPI.responseObject.user));
        }
    }
}