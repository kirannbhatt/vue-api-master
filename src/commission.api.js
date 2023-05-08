const path = {
  getTotalCommissionsPaid: (marketId, commPeriodId) =>
    `/Commission/Widget/TotalCommissionsPaid?marketId=${marketId}&commPeriodId=${commPeriodId}`,
  getTop50Earner: (marketId, commPeriodId) =>
    `/Commission/Widget/TopEarners?marketId=${marketId}&commPeriodId=${commPeriodId}`,
  getCommissionPeriods: (frequencyId, languageId) => 
    `/Commission/Periods/${frequencyId}${languageId ? `?languageId=${languageId}` : ''}`,
  getCommissionPeriodsFrequency: () => '/Commission/Frequency',
  getWalletBalance: distributorId => `/Commission/Widget/EWalletBalance/${distributorId}`
}

export default ($axios) => ({
  getTotalCommissionsPaid: async (marketId, commPeriodId) => {
    return (
      await $axios.get(path.getTotalCommissionsPaid(marketId, commPeriodId))
    ).data
  },
  getTop50Earner: async (marketId, commPeriodId) => {
    return (await $axios.get(path.getTop50Earner(marketId, commPeriodId))).data
  },
  getCommissionPeriods: async (frequencyId, languageId = null) => {
    return (
      await $axios.get(path.getCommissionPeriods(frequencyId, languageId))
    ).data
  },
  getCommissionPeriodsFrequency: async () => {
    return ( 
      await $axios.get(path.getCommissionPeriodsFrequency())
    ).data
  },
  getWalletBalance: async (distributorId) => {
    return (await $axios.get(path.getWalletBalance(distributorId))).data
  }  
})
