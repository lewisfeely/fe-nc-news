import { useEffect, useState } from "react";
import { changeVotes, getArticleById, getCommentsByArticle } from "../api";
import { data, Link } from "react-router-dom";
import CommentCard from "./CommentCard";

function ArticleInfo({ article_id, userLogged }) {
  const [article, setArticle] = useState({});
  const [voted, setVoted] = useState(false);
  const [articleVotes, setArticleVotes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [voting, setVoting] = useState(false);
  const [error, setError] = useState("");
  const [commentsData, setCommentsData] = useState([]);

  function reset() {
    setArticle({});
  }
  useEffect(() => {
    console.log(article_id);
    getArticleById(article_id)
      .then((data) => {
        console.log(data.response[0]);
        setArticle(data.response[0]);
        setArticleVotes(article.votes);
      })
      .then(() => {
        console.log(article_id);
        getCommentsByArticle(article_id)
          .then(({ comments }) => {
            setCommentsData(comments.rows);
            setLoading(false);
          })
          .catch((err) => {
            console.log("inside error block");
            setError("Failed to fetch articles");
          });
      });
  }, []);

  function upVote(e) {
    setArticleVotes(articleVotes + 1);
    const request = {
      inc_votes: 1,
    };
    setVoting(true);
    changeVotes(article_id, request).then((data) => {
      console.log(data);
      setVoting(false);
    });
    setVoted(true);
  }
  function downVote(e) {
    setArticleVotes(articleVotes - 1);
    const request = {
      inc_votes: -1,
    };
    setVoting(true);
    changeVotes(article_id, request).then((data) => {
      console.log(data);
      setVoting(false);
    });
    setVoted(true);
  }
  if (loading) {
    return (
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
    );
  }
  if (voting) {
    return (
      <>
        <h4 className="author-name">author: {article.author}</h4>
        <article>
          <h3 className="title">{article.title}</h3>
          <img src={article.article_img_url} alt="" className="article-img" />
          <p>topic: {article.topic}</p>
          <p className="author-name">{article.body}</p>
          <p>processing vote...</p>
          <button onClick={upVote} className="button-18">
            voting...
          </button>
          <button onClick={downVote} className="button-18">
            voting...
          </button>
          <br />
          <div className="comment-list">
            <ol>
              {commentsData.map((comment) => {
                return (
                  <CommentCard userLogged={userLogged} comment={comment} />
                );
              })}
            </ol>
          </div>
          <Link to="/api/articles/:article_id" className="link">
            back to article
          </Link>
          <p>article comments </p>;
          <br />
          <div className="nav-bar">
            <Link to="/api/articles/:article_id/comments" className="link nav">
              view articles {article.comment_count} comments
            </Link>

            <Link to="/" onClick={reset} className="link nav">
              back to all articles
            </Link>

            <Link to="/leaveComment" className="link nav">
              write comment
            </Link>
          </div>
        </article>
      </>
    );
  }
  if (voted) {
    return (
      <>
        {console.log(article)}
        <h4 className="author-name">author: {article.author}</h4>
        <article>
          <h3 className="title">{article.title}</h3>
          <img src={article.article_img_url} alt="" className="article-img" />
          <p>topic: {article.topic}</p>
          <p className="author-name">{article.body}</p>
          <p>votes: {articleVotes}</p>
          <h3>thank you for your vote!</h3>
          <div className="comment-list">
            <ol>
              {commentsData.map((comment) => {
                return (
                  <CommentCard userLogged={userLogged} comment={comment} />
                );
              })}
            </ol>
          </div>
          <p>article comments </p>
          <br />
          <div className="nav-bar">
            <Link to="/api/articles/:article_id/comments" className="link nav">
              view articles {article.comment_count} comments
            </Link>

            <Link to="/" onClick={reset} className="link nav">
              back to all articles
            </Link>

            <Link to="/leaveComment" className="link nav">
              write comment
            </Link>
          </div>
        </article>
      </>
    );
  }
  return (
    <>
      {console.log(article)}
      <h4 className="author-name">author: {article.author}</h4>
      <article>
        <h3 className="title">{article.title}</h3>
        <img src={article.article_img_url} alt="" className="article-img" />
        <p>topic: {article.topic}</p>
        <p className="author-name">{article.body}</p>
        <p>votes: {articleVotes}</p>
        <button onClick={upVote} className="button-18">
          increment vote
        </button>
        <button onClick={downVote} className="button-18">
          decrease vote
        </button>
        <div className="comment-list">
          <ol>
            {commentsData.map((comment) => {
              return <CommentCard userLogged={userLogged} comment={comment} />;
            })}
          </ol>
        </div>
        <p>article comments </p>
        <br />
        <div className="nav-bar">
          <Link to="/api/articles/:article_id/comments" className="link nav">
            view articles {article.comment_count} comments
          </Link>

          <Link to="/" onClick={reset} className="link nav">
            back to all articles
          </Link>

          <Link to="/leaveComment" className="link nav">
            write comment
          </Link>
        </div>
      </article>
    </>
  );
}

export default ArticleInfo;
