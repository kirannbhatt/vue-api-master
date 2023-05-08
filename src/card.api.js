const path = {
  getPaymentProviders: (distributorId) => `Card/Providers/${distributorId}`,
  createPaymentCard: () => '/Card',
  updatePaymentCard: () => '/Card',
  deletePaymentCard: () => '/Card'
}

export default ($axios) => ({
  getPaymentProviders: async (distribuitorId) => {
    return (await $axios.get(path.getPaymentProviders(distribuitorId))).data
  },
  /* https://xdeveloperexpress.xssclients.com/#tag/Card/paths/~1api~1v2.0~1Card/post */
  createPaymentCard: async (
    distributorId,
    name,
    number,
    cvv,
    expirationMonth,
    expirationYear,
    merchantProvider,
    merchantDetailId,
    moduleS = null
  ) => {
    const body = {
      distributorId,
      name,
      number,
      cvv,
      expirationMonth,
      expirationYear,
      merchantDetailId,
      merchantProvider
    }
    moduleS && (body['module'] = moduleS)

    return (await $axios.post(path.createPaymentCard(), body )).data
  },
  /* https://xdeveloperexpress.xssclients.com/#tag/Card/paths/~1api~1v2.0~1Card/put */
  updatePaymentCard: async (
    distributorId,
    carId,
    name,
    number,
    cvv,
    expirationMonth,
    expirationYear
  ) => {
    const body = {
      distributorId,
      carId,
      name,
      number,
      cvv,
      expirationMonth,
      expirationYear
    }

    return (await $axios.put(path.updatePaymentCard(), body )).data
  },
  /* https://xdeveloperexpress.xssclients.com/#tag/Card/paths/~1api~1v2.0~1Card/delete */
  deletePaymentCard: async (distributorId, cardId, userId = null) => {
    const body = {
      distributorId,
      cardId
    }
    userId && (body['userId'] = userId)
    return (await $axios.delete(path.deletePaymentCard(), {data: {
      ...body
    }})).data
  }
})
