const path = {
  getAllModules: '/Module'
}

export default $axios => ({

  getAllModules: async () => {
    return (await $axios.get(path.getAllModules)).data
  }
  
})
