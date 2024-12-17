import axios from "axios";

const api = axios.create({
  baseURL: "https://solo-project-1-wavs.onrender.com",
});

function GetArticles() {
  return api.get("/api/articles").then(({ data }) => {
    console.log(data);
    return data;
  });
}

export { GetArticles, api };
