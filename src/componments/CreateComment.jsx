import { Link } from "react-router-dom";
import { leaveComment } from "../api";
import { useEffect, useState } from "react";

function CreateComment({ article_id }) {
  const [body, setBody] = useState("");
  const [author, SetAuthor] = useState("");
  const [newComment, setNewComment] = useState({});
  const [commentArticle_id, setCommentArticle_id] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  useEffect(() => {
    setCommentArticle_id(article_id);
  }, [body]);
  function onSubmit(e) {
    e.preventDefault();
    setNewComment({
      author: author,
      body: body,
    });
    return leaveComment(commentArticle_id, newComment).then(({ result }) => {
      if (result !== undefined) {
        setMessageSent(true);
      }
      return result;
    });
  }
  function handleChangeBody(e) {
    document.getElementById("body-text").innerHTML = e.target.value;
    setBody(e.target.value);
  }
  function handleChangeName(e) {
    document.getElementById("author-name").innerHTML = e.target.value;
    SetAuthor(e.target.value);
  }
  if (messageSent) {
    return (
      <>
        <p>thank you for your comment {author}</p>
        <Link className="link" to="/api/articles/:article_id">
          back to article
        </Link>
      </>
    );
  }
  return (
    <div className="comment-inputs">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="input"
          placeholder="enter username"
          id="username"
          onChange={handleChangeName}
        />
        <br />
        <input
          type="text"
          className="input"
          placeholder="enter comment"
          id="body"
          onChange={handleChangeBody}
        />
        <br />
        <button type="submit" className="button-18">
          submit review
        </button>
      </form>
      <div className="review">
        <h2 className="review-header">your review</h2>
        <h5 id="author-name"></h5>
        <p id="body-text"></p>
      </div>
      <Link className="link" to="/api/articles/:article_id">
        back to article
      </Link>
    </div>
  );
}

export default CreateComment;
