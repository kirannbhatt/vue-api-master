const path = {
  logIn: '/User/LogIn',
  userByPass: '/User/Bypass',
  distributorByPass: '/Distributor/Bypass',
  usernameValidate: username => `/Distributor/ValidationUsername/${username}`,
  verifySsn: ssn => `/Distributor/Verify/Ssn?ssn=${ssn}`,
  validationEmail: email => `/Distributor/ValidationEmail/${email}`,
  validationPhoneNumber: (phone, isAlternative, marketId) => `/Distributor/ValidationPhone/${phone}/${isAlternative}/${marketId}`,
  searchUsersByParameters: (UserId, FirstName, LastName) => `/User/Search${UserId ? ('?UserId=' + UserId) : ''}${FirstName ? ('?FirstName=' + FirstName) : ''}${LastName ? ('&LastName=' + LastName) : ''}`
}

export default $axios => ({

  loginUser: async (user) => {
    return (await $axios.post(path.logIn, {
      email: user.userName,
      password: user.password
    })).data
  },

  UserbyPass: async (user) => {
    return (await $axios.post(path.userByPass, {
      email: user.userName,
      password: user.password
    })).data
  },

  DistributorbyPass: async (user) => {
    return (await $axios.post(path.distributorByPass, {
      username: user.distributor,
      password: user.password
    })).data
  },
  usernameValidate: async (username) => {
    return (await $axios.get(path.usernameValidate(username))).data
  },
  verifySsn: async (ssn) => {
    return (await $axios.get(path.verifySsn(ssn))).data
  },
  validationPhoneNumber: async (phone, isAlternative, marketId) => {
    return (await $axios.get(path.validationPhoneNumber(phone, isAlternative, marketId))).data
  },
  validationEmail: async (email) => {
    return (await $axios.get(path.validationEmail(email))).data
  },
  searchUsersByParameters: async (UserId, FirstName, LastName) => {
    return (await $axios.get(path.searchUsersByParameters(UserId, FirstName, LastName))).data
  }
})
