const path = {
  getListOfTermsAndConditions: languageId => `/Resource/TermsAndConditions/${languageId}`,
  // https://xdeveloperexpress.xssclients.com/#tag/Resource/paths/~1api~1v2.0~1Resource/get
  getResource: (languageId, moduleId) => `/Resource?LanguageId=${languageId}&ModuleId=${moduleId}`,
  // https://xdeveloperexpress.xssclients.com/#tag/Resource/paths/~1api~1v2.0~1Resource~1ResourcesTypes/get
  // https://xapiexpress.xssclients.com/api/v2.0/Resource/ResourcesTypes
  getListResourcesTypes: '/Resource/ResourcesTypes',
  // https://xdeveloperexpress.xssclients.com/#tag/Resource/paths/~1api~1v2.0~1Resource~1ResourcesCategories/get
  // https://xapiexpress.xssclients.com/api/v2.0/Resource/ResourcesCategories}
  getResourcesCategories: '/Resource/ResourcesCategories'

}
  
export default $axios => ({
  getListOfTermsAndConditions: async languageId => {
    return (await $axios.get(path.getListOfTermsAndConditions(languageId))).data
  },
  getResource: async (languageId, moduleId) => {
    return (await $axios.get(path.getResource(languageId, moduleId))).data
  },
  getListResourcesTypes: async () => {
    return (await $axios.get(path.getListResourcesTypes)).data
  },
  getResourcesCategories: async () => {
    return (await $axios.get(path.getResourcesCategories)).data
  }
})
