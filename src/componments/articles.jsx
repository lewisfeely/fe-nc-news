import { Link } from "react-router-dom";
import { GetArticles, filterArticles } from "../api.js";
import { useEffect, useState } from "react";
import CreateCard from "./ArticleCard.jsx";

function Articles({ setArticle_id }) {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("title");
  const [orderBy, setOrderBy] = useState("ASC");
  const [loading, setLoading] = useState(false);
  let refresh = 1;

  useEffect(() => {
    console.log(articles);
    GetArticles().then((response) => {
      setArticles(response);
    });
  }, [refresh]);

  function reSort(e) {
    e.preventDefault();
    if (
      e.target.value === "title" ||
      e.target.value === "comment_count" ||
      e.target.value === "votes"
    ) {
      setSortBy(e.target.value);
    } else {
      setOrderBy(e.target.value);
    }
    setLoading(true);
    filterArticles(sortBy, orderBy).then((response) => {
      setArticles(response.rows);
      setLoading(false);
      refresh++;
    });
  }
  if (loading) {
    return (
      <>
        <p>loading...</p>
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="home-page">
        <div className="nav-bar">
          <Link to="/football" className="link nav">
            football articles
          </Link>
          <Link to="/cooking" className="link nav">
            cooking articles
          </Link>
          <Link to="/coding" className="link nav">
            coding articles
          </Link>
        </div>
        <br />
        <select
          name="filter_by"
          id="filter-articles"
          onChange={reSort}
          className="select-box"
        >
          <option value="">select an option</option>
          <option value="title">title</option>
          <option value="comment_count">comment count</option>
          <option value="votes">votes</option>
        </select>
        <select
          name="filter_by"
          id="filter-articles"
          onChange={reSort}
          className="select-box"
        >
          <option value="">select an option</option>
          <option value="DESC">decending order</option>
          <option value="ASC">acending order</option>
        </select>
        <div key={articles.article_id} className="list">
          {articles.map((article) => {
            return (
              <CreateCard article={article} setArticle_id={setArticle_id} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Articles;
