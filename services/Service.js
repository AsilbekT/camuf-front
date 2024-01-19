import API from "./API";
export default {
  getAllNews() {
    return API().get('/news/')
  },
  getBanners() {
    return API().get('/banners/')
  },
  getCourses() {
    return API().get('/courses/')
  },
  getStudentsVideos() {
    return API().get('/studenttestimonials/')
  }
};
