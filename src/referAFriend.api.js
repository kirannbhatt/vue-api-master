const path = {
  getReferralCodeByUsername: username => `ReferAFriend/username/${username}`
}

export default $axios => ({
  getReferralCodeByUsername: async username => {
    return (await $axios.get(path.getReferralCodeByUsername(username))).data
  }
})
  