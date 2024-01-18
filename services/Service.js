import API from "./API";
export default {
  getAllNews() {
    return API().get('/news/')
  },
};
