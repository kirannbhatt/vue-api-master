/* eslint-disable no-console */
// documentacion => 'https://xdeveloperexpress.xssclients.com/#tag/Dashboard'
const path = {
  getSalesWidget: (marketId,rangeDateType) => `/Order/Widget/Sales/${rangeDateType}?marketId=${marketId}`,
  getRangeDateTypes: '/Order/Widget/Sales/Filter/RangeDateType',
  getMonthlySalesDetail: marketId => `/Order/Widget/Detail/MonthlySales/${marketId}`,
  getTodaysIncomeDetail: marketId => `/Order/Widget/Detail/TodaysIncome/${marketId}`,
  getMonthToDateSales: '/Order/Widget/MonthToDateSales',
  getMonthToDateSalesDetail: '/Order/Widget/MonthToDateSales/Detail',
  // getOrdersWithoutTrackingNumber: `/Order/Widget/WithoutTrackingNumber`,
  getMonthlyTotalSales: marketId => `/Order/Widget/TotalSales?marketId=${marketId}`,
  getMonthlyCVSummary: marketId => `/Order/Widget/MonthlyCV?marketId=${marketId}`,
  getOrdersWithoutTrackingNumber: (startDate, endDate) => `/Order/Widget/WithoutTrackingNumber?startDate=${startDate}&endDate=${endDate}`,
  saveOrder: '/Order/Save',
  calculate: '/Order/Calculate',
  getLastOrders: distributorId => `/Order/Widget/LastOrders/${distributorId}`
  /* comento Norman, ya exite en BillingApi
  getPaymentMethods: (queryParams) =>
    `/Order/PaymentMethods${Object.entries(queryParams).reduce(
      (acc, [key, value]) => `${!acc.length ? "?" : `${acc}&`}${key}=${value}`,
      ""
    )}`,
    */
}

export default $axios => ({

  getSalesWidget: async (marketId, rangeDateType='YearToDay') => {
    return (await $axios.get(path.getSalesWidget(marketId, rangeDateType))).data
  },
  getRangeDateTypes: async () => {
    return (await $axios.get(path.getRangeDateTypes)).data
  },
  getMonthlySalesDetail: async (marketId) => {
    return (await $axios.get(path.getMonthlySalesDetail(marketId))).data
  },
  getTodaysIncomeDetail: async (marketId) => {
    return (await $axios.get(path.getTodaysIncomeDetail(marketId))).data
  },
  getMonthToDateSales: async () => {
    return (await $axios.get(path.getMonthToDateSales)).data
  },
  getMonthToDateSalesDetail: async () => {
    return (await $axios.get(path.getMonthToDateSalesDetail)).data
  },
  getOrdersWithoutTrackingNumber: async (startDate, endDate) => {
    return (await $axios.get(path.getOrdersWithoutTrackingNumber(startDate, endDate))).data
  },
  getMonthlyTotalSales: async (marketId) => {
    return (await $axios.get(path.getMonthlyTotalSales(marketId))).data
  },
  getMonthlyCVSummary: async (marketId) => {
    return (await $axios.get(path.getMonthlyCVSummary(marketId))).data
  },
  saveOrder: async (data) => {
    return (await $axios.post(path.saveOrder, data)).data
  },
  calculate: async (data) => {
    return (await $axios.post(path.calculate, data)).data
  },
  /* comento Norman, ya exite en BillingApi
  getPaymentMethods: async (params = {}) => {
    return (await $axios.get(path.getPaymentMethods(params))).data;
  },
  */
  //Doc Service: https://xdeveloperexpress.xssclients.com/#tag/Order/paths/~1api~1v2.0~1Order~1Widget~1LastOrders~1{distributorId}/get
  // Norman 2022-05-23
  getLastOrders: async (distributorId) => {
    return (await $axios.get(path.getLastOrders(distributorId))).data
  }  
})
