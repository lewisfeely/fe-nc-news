import { useState } from "react";
import { deleteCommentById } from "../api";

function CommentCard({ userLogged, comment }) {
  const [deleted, setDeleted] = useState(false);

  function deleteComments(e) {
    console.log(e.target.value);
    deleteCommentById(e.target.value).then(() => {
      setDeleted(true);
    });
  }
  if (deleted) {
    return <p>comment deleted</p>;
  }

  if (userLogged === comment.author) {
    return (
      <li key={comment.comment_id}>
        <h3 className="comment-title">comment by:{comment.author}</h3>
        <p className="comment-body">{comment.body}</p>
        <button
          onClick={deleteComments}
          value={comment.comment_id}
          className="delete-button"
        >
          delete comment
        </button>
      </li>
    );
  } else {
    return (
      <li key={comment.comment_id}>
        <h3 className="comment-title">comment by:{comment.author}</h3>
        <p className="comment-body">{comment.body}</p>
      </li>
    );
  }
}
export default CommentCard;
