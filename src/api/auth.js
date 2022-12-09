import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000"
});

const setToken = (token) => {
    if (token) {
        return instance.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.common.authorization = '';
}

export const signup = async (data) => {
    const requestData = {
        name: data.firstName,
        password: data.password,
        email: data.email
    };

    const { data: result } = await instance.post("/api/auth/register", requestData);

    if (!result.token) {
        console.log("TOKEN IS UNDEFINED, SET MANUALLY FOR DEBUG")
        result.token = 'xxx';
    }
    setToken(result.token);
    return result;
}


