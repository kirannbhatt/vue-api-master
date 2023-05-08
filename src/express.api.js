const path = {
  // getPersonalInfo: (distributorId) => `/Distributor/${distributorId}`,
  getIp: '/getIp',
  logout: () => '/Logout',
  getCardsByDistributor: () => '/Distributor/Cards',
  getReplicatedSites: () => '/Distributor/ReplicatedSites',
  // getReplicatedSites: (distributorId) => `/Distributor/${distributorId}/ReplicatedSites`, JWT version
  getReferralCodes: '/ReferAFriend',
  getAllLanguages: '/Language',
  logIn: '/Distributor/LogIn',
  distributorByPass: '/Distributor/Bypass',
  getAllMarkets: '/Market',
  getAllStatesByMarket: (marketId) => `/Market/${marketId}/State`,
  getMarketById: (marketId) => `/Market/${marketId}`,
  saveOrder: '/Order/Save',
  calculate: '/Order/Calculate',
  calculateShipping: '/Shipping/Calculate',
  getPaymentMethods: () => '/Order/PaymentMethods/',
  verifySsn: ssn => `/Distributor/Verify/Ssn?ssn=${ssn}`,
  validationEmail: email => `/Distributor/ValidationEmail/${email}`,
  validationPhoneNumber: (phone, isAlternative, marketId) => `/Distributor/ValidationPhone/${phone}/${isAlternative}/${marketId}`,
  usernameValidate: username => `/Distributor/ValidationUsername/${username}`,
  getProductsForEcommerce :() => '/Product/Search/',
  searchDistributorsByParameters: () => '/Distributor/Search',
  // getAllProductCategories: (languageId) => `/ProductCategory/${languageId}`, use params
  getProductCategoriesFilters :() => '/ProductCategory/Search',
  getDateAutoship: '/Autoship/RunDateInformation',
  validateProductStock: () => '/Product/Validate/Stock/',
  validateAddress: '/Address/Validate',
  getCartById: () => '/Cart',
  getAutoshipFrequencies :'/Autoship/Frequencies',
  saveAutoship: '/Autoship/Save',
  getFlagById: ({flagId, languageId}) => `/Distributor/GetFlag/${flagId}/${languageId}`,
  validateCode: (code) => '/Promotion/Validate/' + code
}

const paramsSerializer = (params) => '?' + Object.entries(Object.assign({}, params)).map(([key, value]) => `${key}=${value}`).join('&')

export default ($axios, $config) => ({
  getIp: async () => {
    return (await $axios.get(`${$config.BASE_URL}${$config.API_PREFIX}${path.getIp}`)).data
  },
  logout: () => $axios.get(path.logout()),
  getReferralCodes: async () => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.getReferralCodes}` 
    return (await $axios.get(urlLocalApi)).data
  },
  getAllLanguages: async () => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.getAllLanguages}`
    return (await $axios.get(urlLocalApi)).data
  },
  login: async (user) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.logIn}`
    return (
      await $axios.post(urlLocalApi, {
        userName: user.userName,
        password: user.password
      })
    ).data
  },
  distributorbyPass: async (user) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.distributorByPass}`
    return (await $axios.post(urlLocalApi, {
      username: user.distributor,
      password: user.password
    })).data
  },
  getDateAutoship: async () => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.getDateAutoship}`
    return (await $axios.get(urlLocalApi)).data
  },

  // markets
  getAllMarkets: async () => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.getAllMarkets}`
    return (await $axios.get(urlLocalApi)).data
  },
  getAllStatesByMarket: async (marketId) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.getAllStatesByMarket(marketId)}`
    return (await $axios.get(urlLocalApi)).data
  },
  getMarketById: async (marketId) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.getMarketById(marketId)}`
    return (await $axios.get(urlLocalApi)).data
  },
  calculate: async (data) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.calculate}`
    return (await $axios.post(urlLocalApi, data)).data
  },
  saveOrder: async (data) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.saveOrder}`
    return (await $axios.post(urlLocalApi, data)).data
  },
  getPaymentMethods: async (params) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.getPaymentMethods()}`
    return (await $axios.get(urlLocalApi + paramsSerializer(params))).data},
  
  verifySsn: async (ssn) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.verifySsn(ssn)}`
    return (await $axios.get(urlLocalApi)).data
  },
  validationPhoneNumber: async (phone, isAlternative, marketId) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.validationPhoneNumber(phone, isAlternative, marketId)}`
    return (await $axios.get(urlLocalApi)).data
  },
  validationEmail: async (email) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.validationEmail(email)}`
    return (await $axios.get(urlLocalApi)).data
  },
  searchUsersByParameters: async (UserId, FirstName, LastName) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.searchUsersByParameters(UserId, FirstName, LastName)}`
    return (await $axios.get(urlLocalApi)).data
  },
  searchDistributorsByParameters: async ( params ) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.searchDistributorsByParameters()}`
    return ( await $axios.get( urlLocalApi + paramsSerializer(params))).data
  },
  calculateShipping: async (shipping) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.calculateShipping}`
    return (await $axios.post(urlLocalApi, {
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
  usernameValidate: async (username) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.usernameValidate(username)}`
    return (await $axios.get(urlLocalApi)).data
  },

  getProductsForEcommerce: async (params) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.getProductsForEcommerce ()}`
    return ( await $axios.get(urlLocalApi + paramsSerializer(params)) ).data
  },
  getAllProductCategories: async (languageId) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.getAllProductCategories(languageId)}`
    return (await $axios.get(urlLocalApi)).data
  },
  getProductCategoriesFilters: async (params) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path
      .getProductCategoriesFilters()}`
    return (await $axios.get(urlLocalApi + paramsSerializer(params))).data
  },
  validateProductStock: async (params) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.validateProductStock()}`
    return ( await $axios.get(urlLocalApi + paramsSerializer(params))).data
  },
  validateAddress: async (address) => {
    // path.validateAddress
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.validateAddress}`
    return (await $axios.post(urlLocalApi, {
      Address: address.address,
      AddressType: address.type,
      Module: address.module
    })).data
  },
  getCartById: async (body) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.getCartById()}`
    return (await $axios.post(urlLocalApi, body)).data
  },
  /* https://developersasea.xssclients.com/#tag/Autoship/paths/~1api~1v2.0~1Autoship~1Frequencies/get */
  getAutoshipFrequencies: async () => {
    return (await $axios.get(`${$config.BASE_URL}${$config.API_PREFIX}${path.getAutoshipFrequencies}`)).data
  },
  saveAutoship: async (body) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.saveAutoship}`
    return (await $axios.post(urlLocalApi, body)).data
  },
  getFlagById: async (data) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.getFlagById(data)}`
    return (await $axios.get(urlLocalApi)).data
  },
  validateCode: async (code, data) => {
    const urlLocalApi = `${$config.BASE_URL}${$config.API_PREFIX}${path.validateCode(code)}`
    return (await $axios.post(urlLocalApi, data)).data
  }
})
