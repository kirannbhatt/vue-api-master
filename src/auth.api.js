const path = {
  getToken: () => '/Auth/GetToken',
  refreshToken: () => '/Auth/RefreshToken',
  revokeToken: () => '/Auth/RevokeToken'
}

export default ($axios) => ({
  getToken: async (userName, password, browser = null) => {
    const body = {
      userName,
      password
    }
    browser && (body['browser'] = browser)
    return (await $axios.post(path.getToken(), body)).data
  },
  refreshToken: async (token, refreshToken) => {
    return (await $axios.post(path.refreshToken(), {
      token,
      refreshToken
    })).data
  },
  revokeToken: async (refreshToken, username) => {
    return (await $axios.delete(path.refreshToken(), {
      refreshToken,
      username
    })).data
  }
})
