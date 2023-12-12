import axios from "./index";

export function contactUs(body) {
  return axios.post("/contact-us", body);
}

export function signUpEntrepreneur(body) {
  return axios.post("/users/sign-up", body);
}

export function sendNewsLetterEmail(body) {
  return axios.post("/news-letter/", body);
}

export function requestDemo(body) {
  return axios.post("/request-demo/", body);
}

export function getTad(body) {
  return axios.post("/get-tad/", body);
}

export function userSubscribe(body) {
  return axios.post("/subscribe/", body);
}