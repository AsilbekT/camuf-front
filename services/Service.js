import API from "./API";
export default {
  getBanners() {
    return API().get("/banners/");
  },
  // students apis
  getStudentsVideos() {
    return API().get("/studenttestimonials/");
  },

  // news apis
  getAllNews() {
    return API().get("/news/");
  },
  getCategoryNews(category_id) {
    return API().get(`/newscategories/${category_id}/news/`);
  },
  getOneNews(category_id, news_slug) {
    return API().get(`/newscategories/${category_id}/news/${news_slug}/`);
  },
  getLastNews() {
    return API().get(`/news/?page_size=6`);
  },
  getNewsCategories() {
    return API().get('/newscategories/');
  },
  
  // staffs apis
  getAllTeachers() {
    return API().get("/staff/?role=professor");
  },

  getPresident() {
    return API().get("/staff/?role=president");
  },

  // unversity infos apis
  getUnversityInfo() {
    return API().get("/universityinformation/");
  },

  // courses apis
  getAllCourses(size) {
    return API().get("/courses/?size=" + size);
  },
  getCourses(size, id) {
    return API().get(`/coursecategories/${id}/courses/?size=${size}`);
  },
  // artcile apis
  getAllArticles(size) {
    return API().get("/articles/?size=" + size);
  },

  getOneTeachers(id) {
    return API().get(`/staff/${id}/`);
  },
};
