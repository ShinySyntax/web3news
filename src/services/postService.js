import API from "./api";

const PostService = {
  post: (data) => {
    return API.post("/post/new", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },

  listAll: () => {
    return API.get("/post/listAll")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },

  get: (data) => {
    const { id } = data;

    return API.post(`/post/${id}`, data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default PostService;
