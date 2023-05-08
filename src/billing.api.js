const path = {
  getPaymentMethods: (marketId, moduleId, orderDate, ipAddress) => `/Order/PaymentMethods/?marketid=${marketId}&moduleId=${moduleId}&orderDate=${orderDate}&ipAddress=${ipAddress}`

}

export default $axios => ({
  getPaymentMethods: async ({ marketId, moduleId, orderDate, ipAddress }) => {
    return (await $axios.get(path.getPaymentMethods(marketId, moduleId, orderDate, ipAddress))).data
  }
})
