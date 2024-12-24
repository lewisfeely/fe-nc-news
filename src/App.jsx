import { useState } from "react";
import "./App.css";
import Header from "./componments/Header.jsx";
import Articles from "./componments/articles.jsx";
import ArticleInfo from "./componments/ArticleInfo.jsx";
import CreateComment from "./componments/CreateComment.jsx";
import SignIn from "./componments/SignIn.jsx";
import ShowFootball from "./componments/Football.jsx";
import ShowCooking from "./componments/ShowCooking.jsx";
import ShowCoding from "./componments/ShowCoding.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  const [article_id, setArticle_id] = useState("");
  const [userLogged, setUserLogged] = useState("");

  return (
    <>
      <Header userLogged={userLogged} />
      <br />
      <Routes>
        <Route path="/" element={<Articles setArticle_id={setArticle_id} />} />
        <Route
          path="/api/articles/:article_id"
          element={
            <ArticleInfo article_id={article_id} userLogged={userLogged} />
          }
        />
        <Route
          path="/leaveComment"
          element={<CreateComment article_id={article_id} />}
        />
        <Route
          path="/signIn"
          element={<SignIn setUserLogged={setUserLogged} />}
        />

        <Route
          path="/football"
          element={
            <ShowFootball
              article_id={article_id}
              setArticle_id={setArticle_id}
            />
          }
        />
        <Route
          path="/coding"
          element={
            <ShowCoding article_id={article_id} setArticle_id={setArticle_id} />
          }
        />
        <Route
          path="/cooking"
          element={
            <ShowCooking
              article_id={article_id}
              setArticle_id={setArticle_id}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
