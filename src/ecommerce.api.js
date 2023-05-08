const path = {
  getPaymentMethods: (shoppingCartId) => `/Ecommerce/PaymentMethods/${shoppingCartId}`,
  getShippingMethods: (shoppingCartId) => `/Ecommerce/ShippingMethods/${shoppingCartId}`,
  getWarehouseByShoppingCart: (shoppingCartId) => `/Ecommerce/Warehouse/${shoppingCartId}`,
  validatePromocodeByNameAndShoppingCart: (shoppingCartId, promoCodeName) => `/Ecommerce/ShoppingCart/${shoppingCartId}/ValidateCode/${promoCodeName}`
}
export default $axios => ({
  getPaymentMethods: async (shoppingCartId) => {
    return (await $axios.get(path.getPaymentMethods(shoppingCartId))).data
  },
  getShippingMethods: async (shoppingCartId) => {
    return (await $axios.get(path.getShippingMethods(shoppingCartId))).data
  },
  getWarehouseByShoppingCart: async (shoppingCartId) => {
    return (await $axios.get(path.getWarehouseByShoppingCart(shoppingCartId))).data
  },
  validatePromocodeByNameAndShoppingCart: async (shoppingCartId, promoCodeName) => {
    return (await $axios.get(path.validatePromocodeByNameAndShoppingCart(shoppingCartId, promoCodeName))).data
  } 
})
