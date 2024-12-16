import { useEffect } from "react";
import { Link } from "react-router-dom";

function CreateCard({ article }) {
  useEffect(() => {}, []);
  const link = "/api/articles/" + article.article_id + "/comments";
  console.log(link);
  return (
    <li key={article.title} className="list-item">
      <h4 className="title">{article.title}</h4>
      <p>topic: {article.topic}</p>
      <img
        className="images"
        src={article.article_img_url}
        alt="article cover image"
      />

      <Link to="/api/articles/:article/comments">to articles comments</Link>
      <h4 className="author-name">{article.author}</h4>
    </li>
  );
}
export { CreateCard };
