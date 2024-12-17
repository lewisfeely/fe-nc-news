import { useEffect } from "react";
import { Link } from "react-router-dom";

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
          <p>topic: {article.topic}</p>
          <img
            className="images"
            src={article.article_img_url}
            alt="article cover image"
          />

          <Link to="/api/articles/:article/comments" onClick={changeRef}>
            to articles comments
          </Link>
          <h4 className="author-name">{article.author}</h4>
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
