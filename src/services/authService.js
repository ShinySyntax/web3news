import API from "./api";

const AuthService = {
  login: (data) => {
    return API.post("/auth/login", data)
      .then(({ data }) => {
        API.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        return data;
      })
      .catch((err) => {
        throw err?.response?.data?.message;
      });
  },

  register: (data) => {
    return API.post("/auth/register", data)
      .then((res) => {
        API.defaults.headers["Authorization"] = `Bearer ${res.token}`;
        return res.data;
      })
      .catch((err) => {
        throw err?.response?.data?.message;
      });
  },

  logout: () => {
    try {
      API.defaults.headers["Authorization"] = "";
    } catch (err) {
      console.err("Unable to clear auth header..");
    }
  },
};

export default AuthService;
