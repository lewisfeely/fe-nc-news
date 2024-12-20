import { useEffect, useState } from "react";
import { getFootball } from "../api";
import { Link } from "react-router-dom";

function ShowFootball({ article, setArticle_id }) {
  const [football, setFootball] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getFootball()
      .then(({ rows }) => {
        setFootball(rows);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function changeRef() {
    setArticle_id(article.article_id);
  }
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div className="filters">
      <div className="nav-bar">
        <Link to="/cooking" className="link nav">
          cooking articles
        </Link>
        <Link to="/coding" className="link nav">
          coding articles
        </Link>
        <Link to="/" className="link nav">
          show all articles
        </Link>
      </div>
      <h3>Football themed articles</h3>
      <div className="list">
        {console.log(football)}
        {football.map((article) => {
          return (
            <div key={article.title} className="list-item">
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ShowFootball;
