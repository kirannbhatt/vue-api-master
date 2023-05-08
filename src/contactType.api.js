const path = {
  getContactTypesByFilter: ({ marketId, accountType, moduleName, entity }) =>
    `/ContactType/Search?marketId=${marketId}&accountType=${accountType}&module=${moduleName}&entity=${entity}`
}

export default ($axios) => ({
  getContactTypesByFilter: async (params) => {
    return (await $axios.get(path.getContactTypesByFilter(params))).data
  }
})
