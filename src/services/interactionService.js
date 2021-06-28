import API from "./api";

const InteractionService = {
  upvote: (data) => {
    return API.post("/interaction/upvote", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },

  downvote: (data) => {
    return API.post("/interaction/downvote", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },

  getInteractionsForPost: (data) => {
    const { postID, userID } = data;

    return new Promise((resolve, reject) => {
      API.get(`/interaction/${postID}/${userID}`, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          throw err;
        });
    });
  },
};

export default InteractionService;
