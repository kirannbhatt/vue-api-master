const path = {
  getNavSettingsDistributor: (distributorId, moduleId) => `/NavSetting?distributorId=${distributorId}&moduleId=${moduleId}`,
  getNavSettingsUser: (userId, moduleId) => `/NavSetting?userId=${userId}&moduleId=${moduleId}`,
  getSettingGlobal: () => '/SettingGlobal',
  getReportModule: (moduleId, marketId, distributorId, lifetimeRank, accountTypeId) => `/ReportEngine?moduleid=${moduleId}&marketid=${marketId}&legacynumber=${distributorId}&lifetimerank=${lifetimeRank}&accounttypeid=${accountTypeId}`,
  getInitialSetup: () => '/command/get-initial-setup'
}
export default ($axios, $config) => ({
  getNavSettings: async (userOrDistributorId, moduleId, getCorporateNavSettings) => {
    if (getCorporateNavSettings)
      return (await $axios.get(path.getNavSettingsUser(userOrDistributorId, moduleId))).data
    else
      return (await $axios.get(path.getNavSettingsDistributor(userOrDistributorId, moduleId))).data
  },
  getSettingGlobal: async () => {
    return (await $axios.get(path.getSettingGlobal())).data
  },
  getInitialSetup: async () => {
    if ($config) {
      const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.getInitialSetup()}`
      console.log('Url local api',urlLocalApi)
      return (await $axios.get(urlLocalApi)).data
    }
  },
  getReportModule: async (moduleId, marketId, distributorId, lifetimeRank, accountTypeId) => {
    return (await $axios.get(path.getReportModule(moduleId, marketId, distributorId, lifetimeRank, accountTypeId))).data
  },
  test: (algo) => {
    return Promise.resolve('mensaje:' + algo)
  }
})
