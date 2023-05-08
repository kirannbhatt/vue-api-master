/* eslint-disable no-console */
// documentacion => 'https://xdeveloperexpress.xssclients.com/#tag/Dashboard'
const path = {
  getAllDashboards: status => `/Dashboard?status=${status}`,
  createDashboards: '/Dashboard',
  getDashboardDetails: dashboardId => `/Dashboard/${dashboardId}`,
  getDashboardVersions: (dashboardId, status) => `/Dashboard/${dashboardId}/Versions?status=${status}`,
  updateDashboard: (dashboardId) => `/Dashboard/${dashboardId}`,
  updatateAppliedVersion: '/Dashboard/UpdateAppliedVersion',
  deleteDashboard: (dashboardId) => `/Dashboard/${dashboardId}`,
  updateBreakpoints: (dashboardId, versionName) => `/Dashboard/${dashboardId}/${versionName}/UpdateBreakpoints`,
  updateStatusVersions: (dashboardId, versionName) => `/Dashboard/${dashboardId}/UpdateStatus/${versionName}`,
  updateStatusDashboard: (dashboardId) => `/Dashboard/${dashboardId}/UpdateStatus`,
  setDefaultDashboard: (dashboardId) => `Dashboard/Default/${dashboardId}`,
  getDefaultDashboardByDistributor: (module, DistributorId) => `/Dashboard/Default/${module}?DistributorId=${DistributorId}`,
  getDefaultDashboardByUser: (module, UserId) => `/Dashboard/Default/${module}?UserId=${UserId}`,
  cloneDashboard: (dashboardId)=> `/Dashboard/Clone/${dashboardId}`,
  cloneDashboardVersion: (dashboardId, VersionId) => `/Dashboard/Clone/${dashboardId}/${VersionId}`,
  updateDashboardVersion: (dashboardId, VersionId) => `/Dashboard/${dashboardId}/${VersionId}`,
  getDashboardDetailsByVersion : (dashboardId, versionName) => `/Dashboard/${dashboardId}?VersionName=${versionName}`,
  getDashboardAudit: (dashboardId, StartDate, EndDate, UserId, VersionId) =>  `/Dashboard/Audit/${dashboardId}?StartDate=${StartDate}&EndDate=${EndDate}${UserId ? ('&UserId=' + UserId) : ''}${VersionId ? ('&VersionId=' + VersionId) : ''}`,
 
}

export default $axios => ({

  getAllDashboards: async (status = 'ShowAll') => {
    return (await $axios.get(path.getAllDashboards(status))).data
  },
  createDashboard: async (newDashboard) => {
    return (await $axios.post(path.createDashboards, { ...newDashboard })).data
  },
  deleteDashboard: async (dashboardId, userId) => {
    return (await $axios.delete(path.deleteDashboard(dashboardId), {
      data: {
        status: 'Inactive',
        userId: userId
      }
    })).data
  },
  getDashboardDetails: async (dashboardId) => {
    return (await $axios.get(path.getDashboardDetails(dashboardId))).data
  },
  getDashboardVersions: async (dashboardId, status = 'Active') => {
    return (await $axios.get(path.getDashboardVersions(dashboardId, status))).data
  },
  updateDashboard: async (dashboardId, newDashboard) => {
    return (await $axios.put(path.updateDashboard(dashboardId), { ...newDashboard })).data
  },
  updateBreakpoints: async (dashboardId, userId, breakpoints, versionName) => {
    return (await $axios.put(path.updateBreakpoints(dashboardId, versionName), {
      userId,
      breakpoints
    })).data
  },
  updatateAppliedVersion: async (dashboardId,  userId, versionName) => {
    return (await $axios.put(path.updatateAppliedVersion, {
      dashboardId,
      userId,
      versionName
    })).data
  },
  updateStatusVersions: async (dashboardId, versionName,  status, userId ) => {
    return (await $axios.put(path.updateStatusVersions(dashboardId, versionName), {
      status,
      userId
    })).data
  },
  updateStatusDashboard: async (dashboardId, status, userId) => {
    return (await $axios.put(path.updateStatusDashboard(dashboardId), { status, userId })).data
  }, 
  setDefaultDashboard: async (dashboardId, userId) => {
    return (await $axios.put(path.setDefaultDashboard(dashboardId), {  userId })).data
  }, 
  getDefaultDashboardByDistributor: async (module, DistributorId) => {
    return (await $axios.get(path.getDefaultDashboardByDistributor(module, DistributorId))).data
  },  
  getDefaultDashboardByUser: async (module, UserId) => {
    return (await $axios.get(path.getDefaultDashboardByUser(module, UserId))).data
  },
  cloneDashboard: async (dashboardId, newDashboard) => {
    return (await $axios.post(path.cloneDashboard(dashboardId), { ...newDashboard })).data
  },
  cloneDashboardVersion: async (dashboardId, VersionId, newDashboard) => {
    return (await $axios.post(path.cloneDashboardVersion(dashboardId, VersionId), {
      ...newDashboard
    })).data
  },   
  updateDashboardVersion: async (dashboardId, VersionId, dataDashboard) => {
    return (await $axios.put(path.updateDashboardVersion(dashboardId, VersionId), {
      ...dataDashboard
    })).data
  },    
  // https://xdeveloperexpress.xssclients.com/#tag/Dashboard/paths/~1api~1v2.0~1Dashboard~1%7BdashboardId%7D/get
  // Se modifico ultimo parametro 2022-08-05
  getDashboardDetailsByVersion: async (dashboardId, VersionName) => {
    return (await $axios.get(path.getDashboardDetailsByVersion(dashboardId, VersionName))).data
  },
  getDashboardAudit: async (dashboardId, StartDate, EndDate, UserId, VersionId) => {
    return (await $axios.get(path.getDashboardAudit(dashboardId, StartDate, EndDate, UserId, VersionId))).data
  }
  
})
