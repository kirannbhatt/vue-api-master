const path = {
  // https://developersasea.xssclients.com/#tag/Cart/paths/~1api~1v2.0~1Cart/get 
  // https://xapiasea.xssclients.com/api/v2.0/Cart?CartId=1&DistributorId=1500131292
  getCartById: () => '/Cart',
  // https://developersasea.xssclients.com/#tag/Cart/paths/~1api~1v2.0~1Cart~1SocialNetworks/get
  // https://xapiasea.xssclients.com/api/v2.0/Cart/SocialNetworks
  getCartSocialNetworks: () => '/Cart/SocialNetworks',
  // https://xapiasea.xssclients.com/api/v2.0/Cart/ShareByEmail
  // https://developersasea.xssclients.com/#tag/Cart/paths/~1api~1v2.0~1Cart~1ShareByEmail/post
  postCartShareByEmail: () => '/Cart/ShareByEmail',
  // https://xapiasea.xssclients.com/api/v2.0/Cart/Insert
  // https://developersasea.xssclients.com/#tag/Cart/paths/~1api~1v2.0~1Cart~1Insert/post
  postCartInsert: () => '/Cart/Insert',
  // https://xapiasea.xssclients.com/api/v2.0/Cart/Update
  // https://developersasea.xssclients.com/#tag/Cart/paths/~1api~1v2.0~1Cart~1Update/put
  putCartUpdate: () => '/Cart/Update',
  // https://xapiasea.xssclients.com/api/v2.0/Cart/2/1500131292
  // https://developersasea.xssclients.com/#tag/Cart/paths/~1api~1v2.0~1Cart~1%7BcartSharingId%7D~1%7BdistributorId%7D/delete
  deleteCart: ({cartSharingId, distributorId}) => `/Cart/${cartSharingId}/${distributorId}`
  
}

const paramsSerializer = (params) => '?' + Object.entries(Object.assign({}, params)).map(([key, value]) => `${key}=${value}`).join('&')
    
export default ($axios) => ({
  
  getCartSocialNetworks: async (params) => {
    return (await $axios.get(path.getCartSocialNetworks())).data
  },
  postCartShareByEmail: async (payload) => {
    const body = payload
    return (await $axios.post(path.postCartShareByEmail(), body)).data
  },
  postCartInsert: async (payload) => {
    const body = payload
    return (await $axios.post(path.postCartInsert(), body)).data
  },
  putCartUpdate: async (payload) => {
    const body = payload
    return (await $axios.put(path.putCartUpdate(), body)).data
  },
  deleteCart: async (payload) => {
    const params = { 
      cartSharingId :payload.cartSharingId,
      distributorId : payload.distributorId
    }
    return (await $axios.delete(path.deleteCart(params))).data
  },
  getCartById: async (body) => {
    return (await $axios.post(path.getCartById(), body)).data
  }
})
  