const path = {
  getProductCategoriesFilters: '/ProductCategory/Search',
  getAllProductCategories: (languageId) => `/ProductCategory/${languageId}`
}

export default ($axios) => ({
  getProductCategoriesFilters: async ({
    accounttype,
    marketid,
    languageid,
    PackageFilter
  }) => {
    return (await $axios.get(path.getProductCategoriesFilters, {
      params: {
        accounttype,
        marketid,
        languageid,
        PackageFilter
      }
    })).data
  },
  getAllProductCategories: async (languageId) => {
    return (await $axios.get(path.getAllProductCategories(languageId))).data
  }
})
