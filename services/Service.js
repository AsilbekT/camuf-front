import API from "./API";
export default {
  getBanners() {
    return API().get("/banners/");
  },
  getCourses() {
    return API().get("/courses/");
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
    return API().get(`/news/?page_size=6 `)
  },

  // techers apis
  getAllTeachers() {
    return API().get('/staff/?role=professor')
  }
};
