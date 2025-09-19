import axios from "axios";
import { w as writable } from "./index.js";
const storage = (key, initValue) => {
  const store = writable(initValue);
  return store;
};
const baseURL = process.env.NODE_ENV === "production" ? process.env.API_URL : "https://natadarrab-api-7-4298623a0ae3.herokuapp.com/";
console.log({ baseURL });
const axiosAPI = axios.create({
  baseURL
  // baseURL: 'https://natadarrab-api-7-4298623a0ae3.herokuapp.com/'
});
const apiRequest = (method, url, request, headers = {}) => {
  let user;
  storage().subscribe((value) => user = value);
  if (user) {
    headers = {
      // 'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
      "X-User-Email": user.email,
      "X-User-Token": user.generated_token
    };
    console.log("headers", headers);
  }
  console.log(request);
  return axiosAPI({
    method,
    url,
    data: request,
    headers
  }).then((res) => {
    return Promise.resolve(res.data);
  }).catch((err) => {
    return Promise.reject(err);
  });
};
const get = (url, request) => apiRequest("get", url, request);
const deleteRequest = (url, request) => apiRequest("delete", url, request);
const post = (url, request) => apiRequest("post", url, request);
const put = (url, request) => apiRequest("put", url, request);
const patch = (url, request) => apiRequest("patch", url, request);
const API = {
  get,
  delete: deleteRequest,
  post,
  put,
  patch
};
export {
  API as A,
  storage as s
};
