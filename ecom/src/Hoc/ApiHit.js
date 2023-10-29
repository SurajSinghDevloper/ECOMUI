import axios from "axios";

const ApiHit = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default ApiHit;