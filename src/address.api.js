const path = {
  validate: '/Address/validate',
  getConfigurationByCountry: (countryId) => `/Address/Configuration/${countryId}`
}

export default $axios => ({
  validate: async (address) => {
    return (await $axios.post(path.validate, {
      Address: address.address,
      AddressType: address.type,
      Module: address.module
    })).data
  },
  getConfigurationByCountry: async (countryId) => {
    return (await $axios.get(path.getConfigurationByCountry(countryId))).data
  }
})