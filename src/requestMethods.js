import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTc2OTYyM2I5Y2RiZmU2YmU0ZWU2ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzYxMjk1OTYsImV4cCI6MTY3NjM4ODc5Nn0.3u5NH7Pzx51miG3EXtjUdsu630MBAPz_vDEgLAdjG8k"
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});