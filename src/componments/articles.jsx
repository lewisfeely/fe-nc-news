import { Link } from "react-router-dom";
import { GetArticles } from "../api.js";
import { useEffect, useState } from "react";
import { CreateCard } from "./ArticleCard.jsx";

function Articles({ setArticle_id }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    GetArticles().then((response) => {
      setArticles(response);
    });
  }, []);
  return (
    <>
      <Link to="/">back to home</Link>
      <ul key={articles.article_id} className="list">
        {articles.map((article) => {
          return <CreateCard article={article} setArticle_id={setArticle_id} />;
        })}
      </ul>
    </>
  );
}

export default Articles;
