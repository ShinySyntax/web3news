import { useEffect, useState } from "react";

import ArticleService from "../../services/articleService";
import Article from "./Article";

const ArticleList = ({...props}) => {
  const [articles, setArticles] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        let articleList = await ArticleService.listAll();
        setArticles(articleList);
      }

      fetchData();
    }, []);             // Empty array runs on inital render ONLY.

  const renderedResults = articles.map((item) => {
    return <Article key={ item.id } {...item} />;
  });
  
  return (
    <div>{renderedResults}</div>
  )
};

export default ArticleList;