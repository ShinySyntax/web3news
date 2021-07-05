import API from "./api";

const TagService = {
  getAll: () => {
    return API.get("/tags")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default TagService;
