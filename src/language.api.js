const path = {
  getAllLanguages: '/Language'
}
export default $axios => ({
  getAllLanguages: async () => {
    return (await $axios.get(path.getAllLanguages)).data
  }
})
