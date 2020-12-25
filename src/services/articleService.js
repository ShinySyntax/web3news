import API from "./api";

const ArticleService = {

  post: (data) => {
    return API.post("/article", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("error", err));
  },

  listAll: () => {
    return API.get("/article/listAll")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("error", err));
  },

  get: (data) => {
    const { id } = data;

    return API.post(`/article/${id}`, data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("error", err));
  }
  
};

export default ArticleService;
