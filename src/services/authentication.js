import httpClient from "../helpers/HttpClient";
export default {
  login(data) {
    return httpClient.get("/auth/token", data);
  }
  // register(data) {
  //     return httpClient.post('/auth/register', data).then(res=>res.data);
  // },
};
