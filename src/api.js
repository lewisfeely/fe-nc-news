import axios from "axios";

const api = axios.create({
  baseURL: "https://peddit.onrender.com",
});

function GetArticles() {
  return api.get("/api/articles").then(({ data }) => {
    return data;
  });
}

export { GetArticles, api };
