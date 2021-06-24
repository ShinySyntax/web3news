import API from "./api";

const TagService = {
  getAll: () => {
    return API.get("/tags")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("error", err));
  },
};

export default TagService;
