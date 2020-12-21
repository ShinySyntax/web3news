import API from './api';

const AuthService = {

    login: (data) => {
        return API.post("/login", data)
            .then((res) => {
                API.defaults.headers['Authorization'] = `Bearer ${res.token}`;
                return res.data;
            })
            .catch((err) => console.log("error", err));
    },

    register: (data) => {
        return API.post("/register", data)
            .then((res) => { 
                API.defaults.headers['Authorization'] = `Bearer ${res.token}`;
                return res.data;
             })
            .catch((err) => console.log("error", err));
    },
    logout: (data) => {
        return API.post("/logout", data)
            .then((res) => { console.log("res", res.data); })
            .catch((err) => console.log("error", err));
    },




}

export default AuthService;