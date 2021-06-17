import API from "./api";

const AuthService = {
  login: (data) => {
    return API.post("/auth/login", data)
      .then((res) => {
        API.defaults.headers["Authorization"] = `Bearer ${res.data.token}`;
        return res.data;
      })
      .catch((err) => console.log("error", err));
  },

  register: (data) => {
    return API.post("/auth/register", data)
      .then((res) => {
        if (res.status === "200" && res.statusText === "OK") {
          API.defaults.headers["Authorization"] = `Bearer ${res.token}`;
          return res.data;
        }
      })
      .catch((err) => {
        return err.message;
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
