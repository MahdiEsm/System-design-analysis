import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTc2OTYyM2I5Y2RiZmU2YmU0ZWU2ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzYxMTE1NjEsImV4cCI6MTY3NjM3MDc2MX0.ZBmEpY8RTUGw_ejnkTJPS-ZjTdOAwjuhs03wcGGzdIo"


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});