import axios from "axios";
import API from "./API";
export default {
  getBanners(lang) {
    return API().get("/banners/", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  // students apis
  getStudentsVideos(lang) {
    return API().get("/studenttestimonials/", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },

  // news apis
  getAllNews(lang) {
    return API().get("/news/", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getCategoryNews(category_id, lang) {
    return API().get(`/newscategories/${category_id}/news/`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getOneNews(category_id, news_slug, lang) {
    return API().get(`/newscategories/${category_id}/news/${news_slug}/`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getLastNews(lang) {
    return API().get(`/news/?page_size=6`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getNewsCategories(lang) {
    return API().get("/newscategories/", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },

  // staffs apis
  getAllTeachers(lang) {
    return API().get("/staff/?role=professor", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },

  getPresident(lang) {
    return API().get("/staff/?role=president", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },

  // unversity infos apis
  getUnversityInfo(lang) {
    return API().get("/universityinformation/", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },

  // courses apis
  getCourseCategorys(lang) {
    return API().get("/coursecategories/", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getAllCourses(size, lang) {
    return API().get("/courses/?size=" + size, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getCourses(size, id, lang) {
    return API().get(`/coursecategories/${id}/courses/?size=${size}`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getAboutCourse(id, lang) {
    return API().get(`/courses/${id}/`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getCourseCategories(lang) {
    return API().get("/coursecategories/", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },

  getAllArticles(lang) {
    return API().get("/articles/?size=4", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getCategoryArticle(id, lang, size) {
    return API().get(`/articlecategories/${id}/articles/?page_size=${size}`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  loadMoreArticles(nextUrl, locale) {
    try {
      const response = axios.get(nextUrl, { params: { locale } });
      return response.data;
    } catch (error) {
      console.error("Error fetching more articles:", error);
      throw error;
    }
  },
  getArticleDetail(id, slug, lang) {
    return API().get(`/articlecategories/${id}/articles/${slug}/`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },

  getArticleCategories(lang) {
    return API().get("/articlecategories/", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },

  getOneTeachers(id, lang) {
    return API().get(`/staff/${id}/`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },

  articleFilter(id, s, start, end, rev, lang) {
    return API().get(
      `/articlecategories/${id}/articles/?title=${s}&min_date=${start}&max_date=${end}&is_peer_reviewed=${rev}`,
      {
        headers: {
          "Accept-Language": lang,
        },
      }
    );
  },
  getAllStaffs(lang, params, size, page) {
    return API().get(`/staff/?page_size=${size}&page=${page}`, {
      headers: {
        "Accept-Language": lang,
      },
      params: params,
    });
  },
  searchStaffs(lang, params) {
    return API().get("/staff/", {
      headers: {
        "Accept-Language": lang,
      },
      params: params,
    });
  },

  getDepartaments(lang) {
    return API().get("/departments/", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },

  getAllDepartments(lang, id) {
    return API().get("/departments/" + id + "/", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  async getSections(lang) {
    return API().get("/sections/", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  async getSectionsDetails(lang, id) {
    return API().get("/sections/" + id + "/", {
      headers: {
        "Accept-Language": lang,
      },
    });
  },

  registerCourse(formdata) {
    return API().post("/appliedstudents/", formdata);
  },
};
