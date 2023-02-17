import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_RESET,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
} from "../constants/userConstants";

import {
    getUserInfoApi,
    postSignupApi,
    postLoginApi
} from "../service/request-service";

import {getErrorMessage} from "../service/CommonUtil";

export const register = (username: string, email: string, password: string) => async (dispatch: any) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        });

        const signUpRequest = {
            grant_type: 'password',
            username: username,
            email: email,
            password: password
        };

        await postSignupApi(signUpRequest);

        const loginRequest = {
            grant_type: 'password',
            username: username,
            password: password
        };

        const loginResponse = await postLoginApi(loginRequest).catch((error) => console.log(error));


        const userInfo = {
            token: loginResponse.access_token
        };

        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        const userInfoResponse = await getUserInfoApi();
        userInfoResponse.token = loginResponse.access_token;

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: userInfoResponse
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: userInfoResponse
        });

        localStorage.setItem('userInfo', JSON.stringify(userInfoResponse));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: getErrorMessage(error)
        });
    }
};

export const login = (usernameOrEmail: string, password: string) => async (dispatch: any) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        });

        const loginRequest = {
            grant_type: 'password',
            username: usernameOrEmail,
            password: password
        };

        const loginResponse = await postLoginApi(loginRequest);

        const userInfo = {
            token: loginResponse.access_token,
        };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        const userInfoRepsponse = await getUserInfoApi();
        userInfoRepsponse.token = loginResponse.access_token;
        userInfoRepsponse.refresh_token = loginResponse.refresh_token;

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: userInfoRepsponse
        });

        localStorage.setItem('userInfo', JSON.stringify(userInfoRepsponse));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: getErrorMessage(error)
        });
    }
};