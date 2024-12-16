import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";

function Comments({ article_id }) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log(article_id);
    api.get(`/api/articles/${article_id}/comments`).then(({ data }) => {
      setComments(data.comments.rows);
    });
  }, []);

  return (
    <>
      <ol>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h3 className="comment-title">comment by:{comment.author}</h3>
              <p className="author-name">{comment.body}</p>
            </li>
          );
        })}
      </ol>
      <Link to="/">back to articles</Link>
      <p>article comments </p>;
    </>
  );
}

export default Comments;
