const path = {
  validateCode: (code) => '/Promotion/Validate/' + code,
  validatePromoCodeByName: (name) => '/Promotion/ValidatePromoCode/' + name
}

export default $axios => ({
  validateCode: async (code, data) => {
    return (await $axios.post(path.validateCode(code), data)).data
  },
  validatePromoCodeByName: async (name) => {
    return (await $axios.get(path.validatePromoCodeByName(name))).data
  }
})
