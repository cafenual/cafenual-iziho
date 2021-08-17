import axios from "axios";

const client = axios.create({
  withCredentials: true,
});
client.defaults.baseURL = "http://localhost:5000/api";

export default client;
  