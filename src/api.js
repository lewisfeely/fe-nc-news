import axios from "axios";

const api = axios.create({
  baseURL: "https://solo-project-1-wavs.onrender.com",
});

function GetArticles() {
  return api.get("/api/articles").then(({ data }) => {
    return data;
  });
}
function getArticleById(article_id) {
  return api.get(`/api/articles/${article_id}`).then(({ data }) => {
    return data;
  });
}
function changeVotes(article_id, request) {
  return api.patch(`/api/articles/${article_id}`, request).then(({ data }) => {
    return data;
  });
}
function leaveComment(article_id, newComment) {
  console.log(article_id, newComment);
  return api
    .post(`/api/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      console.log(data);
      return data;
    });
}

function getUsers() {
  return api.get("/api/users").then(({ data }) => {
    console.log(data);
    return data;
  });
}
function getComments(article_id) {
  return api.get(`/api/articles/${article_id}/comments`).then(({ data }) => {
    console.log(data);
    return data;
  });
}

function deleteCommentById(comment_id) {
  return api
    .delete(`/api/comments/${comment_id}`)
    .then(() => {
      return "comment deleted";
    })
    .catch((err) => {
      console.log(err);
    });
}
function getFootball() {
  return api.get("/api/articles?topics=football").then(({ data }) => {
    console.log(data);
    return data;
  });
}
function getCoding() {
  return api.get("/api/articles?topics=coding").then(({ data }) => {
    console.log(data);
    return data;
  });
}
function getCooking() {
  return api.get("/api/articles?topics=cooking").then(({ data }) => {
    return data;
  });
}

function filterArticles(sort_by, order_by) {
  return api
    .get(`/api/articles?sort_by=${sort_by}&order_by=${order_by}`)
    .then(({ data }) => {
      return data;
    });
}
function getCommentsByArticle(article_id) {
  console.log(article_id);
  return api
    .get(`/api/articles/${article_id}/comments`)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export {
  GetArticles,
  api,
  getArticleById,
  changeVotes,
  leaveComment,
  getUsers,
  getComments,
  deleteCommentById,
  getFootball,
  getCooking,
  getCoding,
  filterArticles,
  getCommentsByArticle,
};
