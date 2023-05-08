const path = {
  getReportOfBinaryTrees: (distributorId, commissionPeriodId, commissionFrequencyId, level) => `/Geneology/Report/BinaryTree/${distributorId}/${commissionPeriodId}/${commissionFrequencyId}/${level}`,
  getEnrollmentsTree: (distributorId, distributorIdDownline, level, statusList) => `/Genealogy/EnrollmentTree/${distributorId}/${distributorIdDownline}/${level}/?distributorStatusList=${statusList}`,
  searchDistributors: (distributorId, data, treeType) => `/Genealogy/SearchDistributors/${distributorId}/${data}/${treeType}`,
  getTreeByTreeType: (distributorId, distributorIdDownline, level, treeType, statusList) => `/Genealogy/${treeType}/${distributorId}/${distributorIdDownline}/${level}/?distributorStatusList=${statusList}&fields=dynamic`,
  getCommissionRanks: () => '/Commission/Ranks',
  getTreeTypes: () => '/Genealogy/TreeTypes',
  getDistributorDetail: (distributorId, treeType) => `/Genealogy/DistributorDetail/${distributorId}?fields=dynamic&treeType=${treeType}`,
  getHoldingTanksByDistributor: distributorId => `/Genealogy/HoldingTank/${distributorId}`,
  updateBinaryPosition: (treeOwnerId, binarySponsorId, binaryPosition, distributorId) => `/Genealogy/BinaryPosition/${treeOwnerId}/${binarySponsorId}/${binaryPosition}/${distributorId}`,
  getGraphicalTreeFilter: (treeId, typeId) => `/Genealogy/GraphicalTreeFilter/${treeId}/${typeId}`,
  getOutsideLeftAndRight: (distributorId) => `/Genealogy/OutsideLeftAndRight/${distributorId}`
}

export default $axios => ({
  updateBinaryPosition: async ({ treeOwnerId, binarySponsorId, binaryPosition, distributorId }) => {
    return (await $axios.put(path.updateBinaryPosition(treeOwnerId, binarySponsorId, binaryPosition, distributorId))).data
  },
  getHoldingTanksByDistributor: async (distributorId) => {
    return (await $axios.get(path.getHoldingTanksByDistributor(distributorId))).data
  },
  getReportOfBinaryTrees: async ({ distributorId, commissionPeriodId, commissionFrequencyId, level }) => {
    return (await $axios.get(path.getReportOfBinaryTrees(distributorId, commissionPeriodId, commissionFrequencyId, level))).data
  },
  getEnrollmentsTree: async ({ distributorId, distributorIdDownline, level, statusList }) => {
    return (await $axios.get(path.getEnrollmentsTree(distributorId, distributorIdDownline, level, statusList))).data
  },
  searchDistributors: async ({ distributorId, data, treeType }) => {
    return (await $axios.get(path.searchDistributors(distributorId, data, treeType))).data
  },
  getTreeByTreeType: async ({ distributorId, distributorIdDownline, level, treeType, statusList }) => {
    return (await $axios.get(path.getTreeByTreeType(distributorId, distributorIdDownline, level, treeType, statusList))).data
  },
  getCommissionRanks: async () => {
    return (await $axios.get(path.getCommissionRanks())).data
  },
  getTreeTypes: async () => {
    return (await $axios.get(path.getTreeTypes())).data
  },
  getDistributorDetail: async ({ distributorId, treeType }) => {
    return (await $axios.get(path.getDistributorDetail(distributorId,treeType))).data
  },
  getGraphicalTreeFilter: async ({ treeId, typeId }) => {
    return (await $axios.get(path.getGraphicalTreeFilter(treeId, typeId))).data
  },
  getOutsideLeftAndRight: async (distributorId) => {
    return (await $axios.get(path.getOutsideLeftAndRight(distributorId))).data
  }
})
