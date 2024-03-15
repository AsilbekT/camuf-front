import axios from "axios";
export default (url = "https://gateway.camuf.uz") => {
  return axios.create({
    baseURL: url,
  });
};
