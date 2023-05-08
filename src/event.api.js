/* eslint-disable no-console */
const path = {

  getEventsCalendar: (distributorId, startDate, endDate) => `/Event/Widget/Calendar/${distributorId}${startDate ? `?startDate=${startDate}` : ''}${endDate ? `&endDate=${endDate}` : ''}`
}
  
export default $axios => ({
  
  //Doc Service: https://xdeveloperexpress.xssclients.com/#tag/Event/paths/~1api~1v2.0~1Event~1Widget~1Calendar~1{distributorId}/get
  // Norman 2022-05-23
  getEventsCalendar: async (distributorId, startDate, endDate) => {
    return (await $axios.get(path.getEventsCalendar(distributorId, startDate, endDate))).data
  }
    
})
  