import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import ArticleService from "../../services/articleService";
import Article from "./Article";

const ArticleList = ({ ...props }) => {
  const auth = useSelector((state) => state.authReducer);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let articleList = await ArticleService.listAll();

      toast.promise(ArticleService.listAll(), {
        loading: "Loading articles...",
        success: "Top articles from the last week loaded",
        error: "Error when fetching",
      });

      setArticles(articleList);
    };

    fetchData();
  }, []); // Empty array runs on inital render ONLY.

  if (articles && articles.length > 0) {
    const renderedResults = articles.map((item) => {
      return <Article key={item.id} {...item} />;
    });

    return (
      <div className="m-4 flex flex-col">
        <h1 className="flex justify-center">Welcome, {auth.isLoggedIn ? `${auth.user.userName}` : "Guest"}. Here is what is currently trending around the web3 world.</h1>
        {renderedResults}
      </div>
    );
  } else {
    return (
      <div className="m-4 flex flex-col">
        <h1 className="flex justify-center">Welcome, {auth.isLoggedIn ? `${auth.user.userName}` : "Guest"}. Here is what is currently trending around the web3 world.</h1>
        No current articles to render!
      </div>
    );
  }
};

export default ArticleList;
