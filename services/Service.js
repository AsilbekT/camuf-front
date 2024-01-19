import API from "./API";
export default {
  getAllNews() {
    return API().get('/news/')
  },
  getCategoryNews(category_id) {
    return API().get(`/newscategories/${category_id}/news/`)
  },
  getOneNews(category_id, news_slug) {
    return API().get(`/newscategories/${category_id}/news/${news_slug}/`)
  }
};
