import { useState } from "react";
import "./App.css";
import Header from "./componments/header.jsx";
import Articles from "./componments/articles.jsx";
import Comments from "./componments/Comments.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route
          path="/api/articles/:article_id/comments"
          element={<Comments />}
        />
      </Routes>
    </>
  );
}

export default App;
