import { useEffect, useState } from "react";
import { api } from "../api";
import { data, Link } from "react-router-dom";

function ArticleInfo({ article_id }) {
  const [article, setArticle] = useState({});
  function reset() {
    setArticle({});
  }
  useEffect(() => {
    api.get(`/api/articles/${article_id}`).then(({ data }) => {
      setArticle(data.response[0]);
    });
  }, []);
  return (
    <>
      <h4 className="author-name">author: {article.author}</h4>
      <article>
        <h3 className="title">{article.title}</h3>
        <img src={article.article_img_url} alt="" className="article-img" />
        <p>topic: {article.topic}</p>

        <p className="author-name">{article.body}</p>
        <Link to="/api/articles/:article_id/comments" className="link">
          view articles {article.comment_count} comments
        </Link>
        <br />
        <Link to="/" onClick={reset} className="link">
          back to all articles
        </Link>
      </article>
    </>
  );
}

export default ArticleInfo;
