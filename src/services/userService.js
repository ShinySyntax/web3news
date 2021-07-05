import API from "./api";

const UserService = {
  getAll: () => {
    return API.get("/user/getAll")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default UserService;
