import axios from "axios";
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
    return API().get("/newscategories/");
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
  getCourseCategorys() {
    return API().get("/coursecategories/");
  },
  getAllCourses(size) {
    return API().get("/courses/?size=" + size);
  },
  getCourses(size, id) {
    return API().get(`/coursecategories/${id}/courses/?size=${size}`);
  },
  getAboutCourse(id) {
    return API().get(`/courses/${id}/`);
  },
  getCourseCategories() {
    return API().get("/coursecategories/");
  },

  getAllArticles() {
    return API().get("/articles/?size=4");
  },
  getCategoryArticle(id) {
    return API().get(`/articlecategories/${id}/articles/`);
  },
  getArticleDetail(id, slug) {
    return API().get(`/articlecategories/${id}/articles/${slug}/`);
  },

  getArticleCategories() {
    return API().get("/articlecategories/");
  },

  getOneTeachers(id) {
    return API().get(`/staff/${id}/`);
  },

  articleFilter(id, s, start, end, rev) {
    return API().get(
      `/articlecategories/${id}/articles/?title=${s}&min_date=${start}&max_date=${end}&is_peer_reviewed=${rev}`
    );
  },
};
