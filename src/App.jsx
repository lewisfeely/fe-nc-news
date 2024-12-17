import { useState } from "react";
import "./App.css";
import Header from "./componments/header.jsx";
import Articles from "./componments/articles.jsx";
import Comments from "./componments/Comments.jsx";
import ArticleInfo from "./componments/ArticleInfo.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  const [article_id, setArticle_id] = useState("");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Articles setArticle_id={setArticle_id} />} />
        <Route
          path="/api/articles/:article_id/comments"
          element={<Comments article_id={article_id} />}
        />
        <Route
          path="/api/articles/:article_id"
          element={<ArticleInfo article_id={article_id} />}
        />
      </Routes>
    </>
  );
}

export default App;
