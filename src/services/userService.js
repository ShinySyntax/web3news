import API from "./api";

const UserService = {
  getAll: () => {
    return API.get("/user/getAll")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("error", err));
  },
};

export default UserService;
