import axios from "./index";

function getNuxtAuthLocalToken() {
  return localStorage.getItem("auth._token.local");
}

function authHeaders() {
  return {
    headers: {
      Authorization: getNuxtAuthLocalToken(),
    },
  };
}

export function uploadPodcast(body) {
  return axios.post("/podcast", 
    body,
    authHeaders(),
  );
}


export function getPodcasts() {
  return axios.get("/podcast"
  );
}

export function getSinglePodcast(id) {
  return axios.get(`/podcast/${id}`);
}

export function getPodcastUrl(id) {
  return axios.get(`/podcast/stream/${id}`, authHeaders());
}
export function deletePodcast(id) {
  return axios.delete(`/podcast/${id}`, authHeaders());

}


export function createArticle(body) {
  return axios.post("/articles/", body, authHeaders());
}

export function uploadArticleImage(id, body) {
  return axios.post(`/articles/thumbnail/${id}`, body, authHeaders());
}


export function getArticles() {
  return axios.get("/articles/");
}

export function getSingleArticle(id) {
  return axios.get(`/articles/${id}`);
}

export function deleteArticle(id) {
  return axios.delete(`/articles/${id}`, authHeaders());
}



