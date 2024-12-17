import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateCard({ article, setArticle_id }) {
  useEffect(() => {}, []);
  function changeRef() {
    setArticle_id(article.article_id);
  }
  if (article.comment_count >= 1) {
    return (
      <>
        <li key={article.title} className="list-item">
          <h4 className="title">{article.title}</h4>
          <img
            className="images"
            src={article.article_img_url}
            alt="article cover image"
          />{" "}
          <br />
          <Link
            to="/api/articles/:article_id"
            onClick={changeRef}
            className="link"
          >
            view article
          </Link>
          <h4 className="author-name">written by: {article.author}</h4>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li key={article.title} className="list-item">
          <h4 className="title">{article.title}</h4>
          <p>topic: {article.topic}</p>
          <img
            className="images"
            src={article.article_img_url}
            alt="article cover image"
          />
          <h4 className="author-name">{article.author}</h4>
        </li>
      </>
    );
  }
}
export { CreateCard };
