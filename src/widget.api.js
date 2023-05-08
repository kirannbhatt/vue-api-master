/* eslint-disable no-console */
// documentacion => 'https://xdeveloperexpress.xssclients.com/#tag/Dashboard'
const path = {
  getAllCategories: '/WidgetCategory',
  getAllWidgets: status => `/Widget?status=${status}`,
  getWidgetDetails: (widgetdId, status) => `/Widget/${widgetdId}?status=${status}`,
  getAllWidgetsBySubCategory: (widgetdId, status) => `/Widget/SubCategory/${widgetdId}?status=${status}`,
  // https://xdeveloperexpress.xssclients.com/#tag/Autoship/paths/~1api~1v2.0~1Autoship~1Widget~1MonthlySummary/get Banner
  getBannerByModuleLenguaje: (MarketId, Type, Module, LanguageId) => `/Banner/Search?MarketId=${MarketId}&Type=${Type}${Module ? `&Module=${Module}` : ''}&LanguageId=${LanguageId}` 
}
 
export default $axios => ({

  getAllCategories: async () => {
    return (await $axios.get(path.getAllCategories)).data
  },
  getAllWidgets: async (status='ShowAll') => {
    return (await $axios.get(path.getAllWidgets(status))).data
  },
  getWidgetDetails: async (widgetId, status='Active') => {
    return (await $axios.get(path.getWidgetDetails(widgetId, status))).data
  },
  getAllWidgetsBySubCategory: async (widgetId, status='Active') => {
    return (await $axios.get(path.getAllWidgetsBySubCategory(widgetId, status))).data
  },
  getBannerByModuleLenguaje: async (MarketId, Type, Module, LanguageId) => {
    return (await $axios.get(path.getBannerByModuleLenguaje(MarketId, Type, Module, LanguageId))).data
  } 
})
