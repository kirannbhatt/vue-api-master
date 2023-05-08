/* eslint-disable no-console */
// documentacion => 'https://xdeveloperexpress.xssclients.com/#tag/Dashboard'
const path = {
  getLowInventoryProducts: (stock) => `/Warehouse/Widget/LowInventory?stock=${stock}`,
  // Doc => https://xdeveloperexpress.xssclients.com/#tag/Warehouse/paths/~1api~1v2.0~1Warehouse~1%7BmarketId%7D/get
  getAllWarehouses: (marketId) => `/Warehouse/${marketId}`
}

export default $axios => ({

  getLowInventoryProducts: async (stock) => {
    return (await $axios.get(path.getLowInventoryProducts(stock))).data
  },
  getAllWarehouses: async (marketId) => {
    if(marketId)
      return (await $axios.get(path.getAllWarehouses(marketId))).data
    return (await $axios.get('/Warehouse/')).data
  }
})
