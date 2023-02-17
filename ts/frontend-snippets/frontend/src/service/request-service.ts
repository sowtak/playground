import axios, {Method} from "axios";
import {APP_CLIENT_ID, APP_CLIENT_SECRET, BACKEND_API_URL} from "../constants/appConstants";
import qs from 'qs';

const getAxiosConfig = () => {
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ''
        }
    };
    const accessToken = JSON.parse(<string>localStorage.getItem('userInfo'))?.token;
    if (accessToken) {
        axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
    }
    return axiosConfig;
};

export const postSignupApi = (signupRequestBody: any) => {
    const axiosConfig = getAxiosConfig();
// axiosはデフォルトでJSONを送るのでJSONIFYしなくていいっぽい
    return axios
        .post(`${BACKEND_API_URL}/api/v1/auth/signup`,
            signupRequestBody, axiosConfig).then((response) => {
            console.log("Request successfully sent");
            return response.data;
        }).catch((error) => console.log(error));
};

export const postLoginApi = async (loginRequestBody: any) => {
    const axiosConfig = {
        headers: {
            'Authorization': `Basic ` + btoa(APP_CLIENT_ID + ':' + APP_CLIENT_SECRET),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

//ログイン時は application/x-www-form-urlencoded の形式
    const loginRequestBodyEncoded = qs.stringify(loginRequestBody);
    return await axios
        .post(`${BACKEND_API_URL}/api/v1/auth/oauth/token`, loginRequestBodyEncoded, axiosConfig)
        .then((response: any) => {
            return response.data;
        }).catch((error) => console.log(error));
};

export const getUserInfoApi = async () => {
    const axiosConfig = getAxiosConfig();
    const responseData = await axios.get(`${BACKEND_API_URL}/api/v1/auth/userInfo`, axiosConfig)
        .then((response) => {
            return response.data;
        });
    return responseData;
}

class RequestService {

    get = (url: string, isAuthRequired: boolean = false, contentType: string = "application/json") => {
        return createRequest("GET", url, null, isAuthRequired, contentType);
    };

    post = (url: string, body: any, isAuthRequired: boolean = false, contentType: string = "application/json") => {
        return createRequest("POST", url, body, isAuthRequired, contentType);
    };

    put = (url: string, body: any, isAuthRequired: boolean = false, contentType: string = "application/json") => {
        return createRequest("PUT", url, body, isAuthRequired, contentType);
    };

    delete = (url: string, isAuthRequired: boolean = false, contentType: string = "application/json") => {
        return createRequest("DELETE", url, null, isAuthRequired, contentType);
    };
}

const createRequest = (method: Method, url: string, body: any, isAuthRequired: boolean, contentType: string) => {
    return axios({
        method: method,
        url: BACKEND_API_URL + url,
        data: body,
        headers: setHeader(isAuthRequired, contentType)
    });
}

const setHeader = (isAuthRequired: boolean, contentType: string) => {
    // トークンが必要ならAuthorizationヘッダにトークンを付加
    if (isAuthRequired) {
        axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
    axios.defaults.headers.common["Content-Type"] = contentType;
}
