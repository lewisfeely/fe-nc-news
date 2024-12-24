import { useEffect, useState } from "react";
import { getCooking } from "../api";
import { Link } from "react-router-dom";
import CreateCard from "./ArticleCard";

function ShowCooking({ article_id, setArticle_id }) {
  const [cooking, setcooking] = useState({});
  const [loading, setLoading] = useState(true);
  getCooking()
    .then(({ rows }) => {
      setcooking(rows);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div className="filters">
      <div className="nav-bar">
        <Link to="/football" className="link nav">
          football articles
        </Link>
        <Link to="/coding" className="link nav">
          coding articles
        </Link>
        <Link to="/" className="link nav">
          show all articles
        </Link>
      </div>
      <h3>cooking themed articles</h3>
      <div className="list">
        {cooking.map((article) => {
          return <CreateCard article={article} setArticle_id={setArticle_id} />;
        })}
      </div>
    </div>
  );
}
export default ShowCooking;
