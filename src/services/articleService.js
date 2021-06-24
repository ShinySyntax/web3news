import API from "./api";

const ArticleService = {
  post: (data) => {
    return API.post("/article/new", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },

  listAll: () => {
    return API.get("/article/listAll")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },

  get: (data) => {
    const { id } = data;

    return API.post(`/article/${id}`, data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default ArticleService;
