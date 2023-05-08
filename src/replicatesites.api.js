const path = {
  getListReplicatedSitesVideos: () => '/ReplicateSites/Videos',
  updateReplicatedSiteProfile: (distributorId)  => `ReplicateSites/ProfilePicture/${distributorId}`,
  updateUsername: () => '/ReplicateSites/Username',
  updateSocialNetworks: () => '/ReplicateSites/SocialNetworks',
  updateReplicatedSiteMarketing: () => '/ReplicateSites/Marketing'
}
  
export default $axios => ({
  
  // https://xdeveloperexpress.xssclients.com/#tag/ReplicateSites/paths/~1api~1v2.0~1ReplicateSites~1Videos/get
  // norman 2022-09-15
  getListReplicatedSitesVideos: async () => {
    return (await $axios.get(path.getListReplicatedSitesVideos())).data
  },
  // https://xdeveloperexpress.xssclients.com/#tag/ReplicateSites/paths/~1api~1v2.0~1ReplicateSites~1ProfilePicture~1%7BdistributorId%7D/put
  // norman 2022-09-15
  updateReplicatedSiteProfile: async (distributorId, File, UserId) => {
    const data = new FormData()
    data.append('File', File)
    data.append('UserId', distributorId)
    const config = {
      method: 'put',
      url: $axios.defaults.baseURL + '/' + path.updateReplicatedSiteProfile(distributorId),
      headers: {
        Authorization: $axios.defaults.headers.common.Authorization
      },
      data: data
    }
    return (await $axios(config)).data
  }, 

  //  EXISTEN EN DISTRIBUTOR, NO LO SACO PQ NO SE SI SE USAN
  /////////////////////////////////////////////////////////////////
  
  // https://xdeveloperexpress.xssclients.com/#tag/ReplicateSites/paths/~1api~1v2.0~1ReplicateSites~1Username/put
  updateUsername: async (distributorId, username) => {
    const body = {distributorId, username}
    return (
      await $axios.put(path.updateUsername(), body)).data
  },

  // https://xdeveloperexpress.xssclients.com/#tag/ReplicateSites/paths/~1api~1v2.0~1ReplicateSites~1SocialNetworks/put
  updateSocialNetworks: async (payload) => {
    return (await $axios.put(path.updateSocialNetworks(), payload)).data
  },

  // https://xdeveloperexpress.xssclients.com/#tag/ReplicateSites/paths/~1api~1v2.0~1ReplicateSites~1Marketing/put
  updateReplicatedSiteMarketing: async (payload) => {
    return (await $axios.put(path.updateReplicatedSiteMarketing(), payload)).data
  }

})
