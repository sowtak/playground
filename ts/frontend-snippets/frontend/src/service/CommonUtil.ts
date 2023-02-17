import jwtDecode from "jwt-decode";

export const getErrorMessage = (error: any) => {
    return error ? error.response
        ? error.response.data
        ? error.response.data.error_description
            ? error.response.data_description : error.response.data.error.length > 0 ?
                    error.response.data.errors[0].message : error.message
            : error.message
        :error.message
        : 'エラーが発生しました'
};

export const isAdmin = () => {
    const userInfoLocalStorage = localStorage.getItem('userInfo');
    if (userInfoLocalStorage) {
        const token = JSON.parse(userInfoLocalStorage).token;
        let decodedToken: any = jwtDecode(token);
        return decodedToken?.authorities?.includes('ADMIN');
    }
    return false;
}