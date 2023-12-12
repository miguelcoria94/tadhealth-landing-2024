import axios from "./index";



export function adminLogin(body) {
  const params = new URLSearchParams();
  params.append("username", body.username);
  params.append("password", body.password);
  return axios.post("/login/access-token", params);
}