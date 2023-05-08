const path = {
  getRewardsPointsSetting: distributorId => `/RewardPoints/Setting/${distributorId}`,
  getRewardsPointsDetail:( distributorId, onlyAutoship, top )=>{
    if(!top) 
      return `/RewardPoints/Detail/${distributorId}/`
    else
      return `/RewardPoints/Detail/${distributorId}/?onlyautoshiporders=${onlyAutoship}&top=${top}`} ,
  getRewardsPointsSummary: distributorId => `/RewardPoints/Summary/${distributorId}`,
  getReferralCodeWidget: distributorId => `/ReferAFriend/Widget/${distributorId}`,
  getReferralCodes: '/ReferAFriend',
  shareViaEmail: '/ReferAFriend/ShareViaEmail'

}

export default $axios => ({
  getRewardsPointsSetting: async distributorId => {
    return (await $axios.get(path.getRewardsPointsSetting(distributorId))).data
  },
  getRewardsPointsDetail: async ( {distributorId, onlyAutoship, top} ) => {
    return (await $axios.get(path.getRewardsPointsDetail(distributorId, onlyAutoship, top))).data
  },
  getRewardsPointsSummary: async (distributorId) => {
    return (await $axios.get(path.getRewardsPointsSummary(distributorId))).data
  },
  getReferralCodes: async () => {
    return (await $axios.get(path.getReferralCodes)).data
  },
  getReferralCodeWidget: async ({ distributorId }) => {
    return (await $axios.get(path.getReferralCodeWidget(distributorId))).data
  },
  shareViaEmail: async (data) => {
    return (await $axios.post(path.shareViaEmail, data)).data
  }
})
