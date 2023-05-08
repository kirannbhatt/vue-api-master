const path = {
  getAllRoles: () => '/Role'
   
}
  
export default $axios => ({
  
  getAllRoles: async () => {
    return (await $axios.get(path.getAllRoles())).data
  } 
   
})
  