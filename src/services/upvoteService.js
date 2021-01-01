import API from "./api";

const UpvoteService = {
  upvote: (data) => {
    return API.post("/interactions/upvote", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("error", err));
  },

  downvote: (data) => {
    return API.post("/interactions/downvote", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("error", err));
  },

  getInteractionsForArticle: (data) => {
    const { articleID, userID } = data;

    return new Promise((resolve, reject) => {
      API.get(`/interactions/${articleID}/${userID}`, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default UpvoteService;
