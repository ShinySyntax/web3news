import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';

import ArticleService from "../../services/articleService";
import Article from "./Article";

const ArticleList = ({ ...props }) => {
  const auth = useSelector((state) => state.authReducer);
  const [articles, setArticles] = useState([]);
  AOS.init();                                     // Initalize animations

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
  }, []);                                         // Empty array runs on inital render ONLY.

  const renderedResults = articles.map((item) => {
    return <Article key={item.id} {...item} />;
  });

  return <div>{renderedResults}</div>;
};

export default ArticleList;