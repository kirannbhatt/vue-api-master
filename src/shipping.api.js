const path = {
  calculate: '/Shipping/Calculate',
  getShippingMethodsByMarket: marketId => '/Shipping/${marketId}',
  getShippingMethodsForEcommerce: '/Shipping/Ecommerce'
}

export default $axios => ({
  calculate: async (shipping) => {
    return (await $axios.post(path.calculate, {
      AccountType: shipping.accountType, //  'Distributor',
      MarketId: shipping.marketId, // 7,
      IsAutoship: shipping.isAutoship, // false,
      ZipCode: shipping.zipCode, // '0010',
      IsWillCall: shipping.isWillCall, // false,
      GroupModule: shipping.groupModule, // 'Regular',
      ModuleId: shipping.moduleId, // 'xEnrollments',
      IsFreeShipping: shipping.isFreeShipping, // false,
      ShippingDetail: shipping.shippingDetail
    })).data
  },
  getShippingMethodsByMarket: async (marketId) => {
    return (await $axios.get(path.getShippingMethodsByMarket(marketId))).data
  },
  /* https://xdeveloperexpress.xssclients.com/#tag/Shipping/paths/~1api~1v2.0~1Shipping~1Ecommerce/post */
  getShippingMethodsForEcommerce: async (shippingData) => {
    return (await $axios.post(path.getShippingMethodsForEcommerce, {...shippingData})).data
  }
})
