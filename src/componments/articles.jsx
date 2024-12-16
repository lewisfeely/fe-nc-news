import { Link } from "react-router-dom";
import { GetArticles } from "../api.js";
import { useEffect, useState } from "react";
import { CreateCard } from "./ArticleCard.jsx";

function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    GetArticles().then((response) => {
      setArticles(response);
    });
  }, []);
  return (
    <>
      <Link to="/">back to home</Link>
      <ul className="list">
        {articles.map((article) => {
          return <CreateCard article={article} />;
        })}
      </ul>
    </>
  );
}

export default Articles;
