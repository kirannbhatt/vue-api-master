const path = {
  getMonthlyAutoshipSummary: '/Autoship/Widget/MonthlySummary',
  getAutoshipPaymentsActiveandFailed: (marketId, commPeriodId, startDate, endDate) => `/Autoship/Widget/Payments?marketId=${marketId}&commPeriodId=${commPeriodId}&startDate=${startDate}&endDate=${endDate}`,
  getAutoshipPaymentsActiveandFailedDetail: (statusPayFor, marketId, commPeriodId, startDate, endDate) => `/Autoship/Widget/Payments/${statusPayFor}?marketId=${marketId}&commPeriodId=${commPeriodId}&startDate=${startDate}&endDate=${endDate}`,
  saveAutoship: '/Autoship/Save',
  getDateAutoship: '/Autoship/RunDateInformation',
  getAutoshipFrequencies :'/Autoship/Frequencies'
}

export default $axios => ({
  getMonthlyAutoshipSummary: async (marketId) => {
    let url = path.getMonthlyAutoshipSummary
    if (marketId)
      url += `?marketId=${marketId}`

    return (await $axios.get(url)).data
  },
  getAutoshipPaymentsActiveandFailed: async (marketId, commPeriodId, startDate, endDate) => {
    let url = path.getAutoshipPaymentsActiveandFailed(marketId, commPeriodId, startDate, endDate)
    return (await $axios.get(url)).data
  },    
  getAutoshipPaymentsActiveandFailedDetail: async (statusPayFor, marketId, commPeriodId, startDate, endDate) => {
    let url = path.getAutoshipPaymentsActiveandFailedDetail(statusPayFor,marketId, commPeriodId, startDate, endDate)
    return (await $axios.get(url)).data
  },
  saveAutoship: async (data) => {
    return (await $axios.post(path.saveAutoship, data)).data
  },
  getDateAutoship: async () => {
    return (await $axios.get(path.getDateAutoship)).data
  },
  /* https://xdeveloperexpress.xssclients.com/#tag/Autoship/paths/~1api~1v2.0~1Autoship~1Frequencies/get */
  getAutoshipFrequencies: async () => {
    return (await $axios.get(path.getAutoshipFrequencies)).data
  }
})
