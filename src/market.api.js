/* eslint-disable no-console */
// documentacion => 'https://xdeveloperexpress.xssclients.com/#tag/Dashboard'
const path = {
  getAllMarkets: '/Market',
  getAllStatesByMarket: (marketId) => `/Market/${marketId}/State`, // Se usa en express
  getCustomerSupport: (marketId) => `/Market/Widget/Support/${marketId}`,
  getMarketById: (marketId) => `/Market/${marketId}`
}

export default ($axios) => ({
  /* https://xdeveloperexpress.xssclients.com/#tag/Market/paths/~1api~1v2.0~1Market/get */
  getAllMarkets: async () => {
    return (await $axios.get(path.getAllMarkets)).data
  },
  getAllStatesByMarket: async (marketId) => {
    return (await $axios.get(path.getAllStatesByMarket(marketId))).data
  },
  getEnrollmentWidget: async (
    marketId,
    StartDate,
    EndDate,
    LanguageId,
    AccountType,
    DistributorStatus
  ) => {
    return (
      await $axios.get(
        path.getEnrollmentWidget(
          marketId,
          StartDate,
          EndDate,
          LanguageId,
          AccountType,
          DistributorStatus
        )
      )
    ).data
  },
  getMarketById: async (marketId) => {
    return (await $axios.get(path.getMarketById(marketId))).data
  },
  //Doc Service: https://xdeveloperexpress.xssclients.com/#tag/Market/paths/~1api~1v2.0~1Market~1Widget~1Support~1{marketId}/get
  // Norman 2022-05-23
  getCustomerSupport: async (marketId) => {
    return (await $axios.get(path.getCustomerSupport(marketId))).data
  }
})
