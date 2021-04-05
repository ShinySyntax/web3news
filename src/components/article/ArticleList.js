import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

import ArticleService from "../../services/articleService";
import Article from "./Article";

const ArticleList = ({ ...props }) => {
  const auth = useSelector((state) => state.authReducer);
  const [articles, setArticles] = useState([]);

  AOS.init(); // Initalize animations

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

  if (articles.length > 0) {
    const renderedResults = articles.map((item) => {
      return <Article key={item.id} {...item} />;
    });

    return <div>{renderedResults}</div>;
  } else {
    return <div>No current articles to render!</div>;
  }
};

export default ArticleList;
