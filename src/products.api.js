const path = {
  getProductsForEcommerce: '/Product/Search/',
  getButtonProducts: (marketId, languageId, accountType) =>
    `/Product/AutoshipAndAdditionalProduct/?marketid=${marketId}&languageid=${languageId}&accounttype=${accountType}`,
  validateProductStock: (productId, quantity, moduleId) =>
    `/Product/Validate/Stock/?productid=${productId}&quantity=${quantity}&moduleid=${moduleId}`,
  getProducts: ({
    marketId,
    moduleName,
    languageId,
    packageFilter,
    accountType,
    categoryId,
    warehouseId,
    orderSource
  }) =>
    `/Product/${marketId}/${moduleName}/${languageId}/${packageFilter}/${accountType}/${categoryId}/${warehouseId}/${orderSource}`
}

export default ($axios) => ({
  getProductsForEcommerce: async ({
    marketId,
    languageId,
    accountType,
    PackageFilter
  }) => {
    return (
      await $axios.get(path.getProductsForEcommerce, {
        params: {
          marketId,
          languageId,
          accountType,
          PackageFilter
        }
      })
    ).data
  },
  getButtonProducts: async ({ marketId, languageId, accountType }) => {
    return (
      await $axios.get(
        path.getButtonProducts(marketId, languageId, accountType)
      )
    ).data
  },
  validateProductStock: async ({ productId, quantity, moduleId }) => {
    return (
      await $axios.get(path.validateProductStock(productId, quantity, moduleId))
    ).data
  },
  getProducts: async (params) => {
    return (await $axios.get(path.getProducts(params))).data
  }
})
