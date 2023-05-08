const path = {
  logIn: '/Distributor/LogIn',
  recoveryPasswordStepOne: '/Distributor/RecoveryPassword', // step 1
  updatePasswordByRecovery: '/Distributor/UpdatePasswordByRecovery', // step 2
  getPersonalInfo: (distributorId) => `/Distributor/${distributorId}`, // se usa en express
  // getPersonalInfo: () => `/Distributor`,// se usa en express
  getPreferenceLanguages: '/Distributor/PreferenceLanguage',
  getPreferencePlacements: '/Distributor/PreferencePlacement',
  getPreferenceTimezone: '/Distributor/PreferenceTimezone',
  getReplicatedSites: (distributorId) =>
    `/Distributor/${distributorId}/ReplicatedSites`,
  getAccountTypes: '/Distributor/AccountTypes',
  searchDistributorsByParameters: ({
    distributorId,
    firstName,
    lastName,
    zipCode
  }) =>
    `/Distributor/Search${
      distributorId ? '?distributorid=' + distributorId : ''
    }${firstName ? '?firstname=' + firstName : ''}${
      lastName ? '&lastname=' + lastName : ''
    }${zipCode ? '?zipCode=' + zipCode : ''}`,
  getDistributorDashboardWidget: '/Distributor/Widget/Dashboard',
  getEnrollmentWidget: (
    marketId,
    startDate,
    endDate,
    languageId,
    accountType,
    distributorStatus
  ) =>
    `/Distributor/Widget/Enrollments?MarketId=${marketId}&StartDate=${startDate}&EndDate=${endDate}&LanguageId=${languageId}&AccountType=${accountType}&DistributorStatus=${distributorStatus}`,
  getMonthlyEnrolledDetail: (marketId) =>
    `/Distributor/Widget/Detail/MonthlyEnrolled/${marketId}`,
  getTotalAffiliateByRanks: '/Distributor/Widget/TotalAffiliateByRanks',
  getMonthlyEnrolledSummary: (marketId) =>
    `/Distributor/Widget/MonthlyEnrolled?marketId=${marketId}`,
  getLatestAffiliates: (marketId, startDate, endDate) =>
    `/Distributor/Widget/LatestAffiliates?marketId=${marketId}&startDate=${startDate}&endDate=${endDate}`,
  getTotalActiveAffiliates: '/Distributor/Widget/ActiveAffiliate',
  getTotalActiveAffiliatesOrderByPeriod:
    '/Distributor/Widget/ActiveAffiliate/Details',
  getTopEnroller: (marketId, commPeriodId, startDate, endDate) =>
    `/Distributor/Widget/TopEnroller?marketId=${marketId}&commPeriodId=${commPeriodId}&startDate=${startDate}&endDate=${endDate}`,
  getDistributorRankAdvancement: (marketId, commPeriodId) =>
    `/Distributor/Widget/RankAdvancement?marketId=${marketId}&commPeriodId=${commPeriodId}`,
  getDistributorStatus: '/Distributor/Status',
  getCardsByDistributor: (distributorId) => `/Distributor/${distributorId}/Cards`,
  createPaymentCard: () => '/Card',
  deleteDistributorCard: () => '/Card',
  getPaymentProviders: (distributorId) => `/Card/Providers/${distributorId}`,
  changePassword: () => '/Distributor/ChangePassword',
  updatePreferredLanguage: () => '/Distributor/PreferredLanguage',
  updateTimeZonePreference: () => '/Distributor/PreferredTimeZone',
  updateSocialNetworks: () => '/ReplicateSites/SocialNetworks',
  updateReplicatedSiteMarketing: () => '/ReplicateSites/Marketing',
  getExistsUsername: (username) => `/Distributor/VerifyUsersame/${username}`,
  updateUsername: () => '/ReplicateSites/Username',
  getEnrollerInfo: (distributorId) => `/Distributor/${distributorId}/EnrollerInfo`,
  getDistributorAddresses: (distributorId) =>
    `/Address/Distributor/${distributorId}`,
  createDistributorAddress: () => '/Address/Distributor',
  updateDistributorAddress: () => '/Address/Distributor',
  deleteDistributorAddress: () => '/Address/Distributor',
  updateBillingAndShippingAddresses: (distributorId) =>
    `/Address/Distributor/${distributorId}/Preference`,
  getTopOfTree: (distributorId) =>
    `/Distributor/Widget/Information/${distributorId}`,
  // logout: () => '/Logout' Utilizado en express
  getSponsorDetailWidget: distributorId => `/Distributor/Widget/${distributorId}/SponsorDetail`, 
  getPerformanceWidget: distributorId => `/Distributor/Widget/Performance/${distributorId}`,
  getPerformanceBinary: distributorId => `/Distributor/Widget/PerformanceBinary/${distributorId}`,
  getDistributorEnrollmentsWidget: distributorId => `/Distributor/Widget/DistributorEnrollment/${distributorId}`,
  getDistributorTeamEnrollments: distributorId => `/Distributor/Widget/TeamEnrollment/${distributorId}`,
  getCustomerEnrollmentsWidget: distributorId => `/Distributor/Widget/CustomerEnrollment/${distributorId}`,
  getFirstTimeSponsorsWidget: (startDate, endDate ) => `/Distributor/Widget/FirstTimeSponsor?startDate=${startDate}&endDate=${endDate}`,
  getSocialMediaWidget: distributorId => `/Distributor/Widget/SocialMedia/${distributorId}`,
  verifyPhoneNumber: (phone, marketId) => `/Distributor/VerifyPhoneNumber?phone=${phone}&marketid=${marketId}`,
  verifyEmail: (email) => `/Distributor/VerifyEmail?email=${email}`,
  getIsValidForHoldingTank: (distributorId) => `/Distributor/IsValidForHoldingTank/${distributorId}`,
  getFlagById: ({flagId, languageId}) => `/Distributor/GetFlag/${flagId}/${languageId}`,

  // https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1PersonalInfo/put
  updatePersonalInformation: () => '/Distributor/PersonalInfo',
  // https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1ChangeEmail/put
  updateEmail: () => '/Distributor/ChangeEmail',
  // https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1PreferredPlacement/put
  updatePreferredPlacement: () => '/Distributor/PreferredPlacement' 

}
export default $axios => ({
  getFlagById: async (data) => {
    return (await $axios.get(path.getFlagById(data))).data
  },

  getIsValidForHoldingTank: async (distributorId) => {
    return (await $axios.get(path.getIsValidForHoldingTank(distributorId))).data
  },
  getPersonalInfo: async (distributorId) => {
    return (await $axios.get(path.getPersonalInfo(distributorId))).data
  },
  login: async (user) => {
    return (
      await $axios.post(path.logIn, {
        userName: user.userName,
        password: user.password
      })
    ).data
  },
  recoveryPassword: async (username, email, ipaddress) => {
    return (
      await $axios.post(path.RecoveryPasswordStepOne, {
        userName: username,
        email,
        ipAddress: ipaddress
      })
    ).data
  },
  updatePasswordByRecovery: async (
    codeVerification,
    distributorId,
    password
  ) => {
    return (
      await $axios.post(path.UpdatePasswordByRecovery, {
        codeVerification,
        distributorId,
        password
        // token: token
      })
    ).data
  },
  getDistributorDashboardWidget: async () => {
    return (await $axios.get(path.getDistributorDashboardWidget)).data
  },
  getEnrollmentWidget: async (
    marketId,
    startDate,
    endDate,
    languageId,
    accountType,
    distributorStatus
  ) => {
    const url = path.getEnrollmentWidget(
      marketId,
      startDate,
      endDate,
      languageId,
      accountType,
      distributorStatus
    )
    return (await $axios.get(url)).data
  },
  getMonthlyEnrolledDetail: async (marketId) => {
    return (await $axios.get(path.getMonthlyEnrolledDetail(marketId))).data
  },
  getTotalAffiliateByRanks: async (marketId) => {
    return (
      await $axios.get(path.getTotalAffiliateByRanks, { params: { marketId } })
    ).data
  },
  getTotalActiveAffiliates: async (
    marketId,
    commPeriodId,
    startDate,
    endDate
  ) => {
    return (
      await $axios.get(path.getTotalActiveAffiliates, {
        params: {
          marketId,
          commPeriodId,
          startDate,
          endDate
        }
      })
    ).data
  },
  getTotalActiveAffiliatesOrderByPeriod: async (marketId) => {
    return (
      await $axios.get(path.getTotalActiveAffiliatesOrderByPeriod, {
        params: {
          marketId
        }
      })
    ).data
  },
  getMonthlyEnrolledSummary: async (marketId) => {
    return (await $axios.get(path.getMonthlyEnrolledSummary(marketId))).data
  },
  getLatestAffiliates: async (marketId, startDate, endDate) => {
    return (
      await $axios.get(path.getLatestAffiliates(marketId, startDate, endDate))
    ).data
  },
  getTopEnroller: async (marketId, commPeriodId, startDate, endDate) => {
    return (
      await $axios.get(
        path.getTopEnroller(marketId, commPeriodId, startDate, endDate)
      )
    ).data
  },
  getDistributorRankAdvancement: async (marketId, commPeriodId) => {
    return (
      await $axios.get(
        path.getDistributorRankAdvancement(marketId, commPeriodId)
      )
    ).data
  },
  getAccountTypes: async () => {
    return (await $axios.get(path.getAccountTypes)).data
  },

  searchDistributorsByParameters: async (
    distributorId,
    firstName,
    lastName,
    zipCode
  ) => {
    return (
      await $axios.get(
        path.searchDistributorsByParameters(
          distributorId,
          firstName,
          lastName,
          zipCode
        )
      )
    ).data
  },
  getDistributorStatus: async () => {
    return (await $axios.get(path.getDistributorStatus)).data
  },
  /* https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1%7BdistributorId%7D~1Cards/get */
  getCardsByDistributor: async (distributorId) => {
    return (await $axios.get(path.getCardsByDistributor(distributorId))).data
  },
  createPaymentCard: async (
    distributorId,
    name,
    number,
    cvv,
    expirationMonth,
    expirationYear,
    merchantProvider,
    merchantDetailId,
    module
  ) => {
    return (
      await $axios.post(path.createPaymentCard(), {
        distributorId,
        name,
        number,
        cvv,
        expirationMonth,
        expirationYear,
        merchantProvider,
        merchantDetailId,
        module
      })
    ).data
  },
  deleteDistributorCard: async (distributorId, cardId) => {
    return (
      await $axios.delete(path.deleteDistributorCard(), {
        distributorId,
        cardId
      })
    ).data
  },
  getPaymentProviders: async (distributorId) => {
    return (await $axios.get(path.getPaymentProviders(distributorId))).data
  },
  changePassword: async (
    distributorId,
    currentPassword,
    newPassword,
    confirmNewPassword,
    confirmChangeViaMail
  ) => {
    return (
      await $axios.put(path.changePassword(), {
        distributorId,
        currentPassword,
        newPassword,
        confirmNewPassword,
        confirmChangeViaMail
      })
    ).data
  },
  getReplicatedSites: async (distributorId) => {
    return (await $axios.get(path.getReplicatedSites(distributorId))).data
  },
  // https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1PreferenceLanguage/get
  getPreferenceLanguages: async () => {
    return (await $axios.get(path.getPreferenceLanguages)).data
  },
  // https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1PreferencePlacement/get
  getPreferencePlacements: async () => {
    return (await $axios.get(path.getPreferencePlacements)).data
  },
  // https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1PreferenceTimezone/get
  getPreferenceTimezone: async () => {
    return (await $axios.get(path.getPreferenceTimezone)).data
  },
  updatePreferredLanguage: async (distributorId, languageId) => {
    return (
      await $axios.put(path.updatePreferredLanguage(), {
        distributorId,
        languageId
      })
    ).data
  },
  updateTimeZonePreference: async (distributorId, timeZoneId) => {
    return (
      await $axios.put(path.updateTimeZonePreference(), {
        distributorId,
        timeZoneId
      })
    ).data
  },
  updateSocialNetworks: async (payload) => {
    return (await $axios.put(path.updateSocialNetworks(), payload)).data
  },
  updateReplicatedSiteMarketing: async (payload) => {
    return (await $axios.put(path.updateReplicatedSiteMarketing(), payload))
      .data
  },
  getExistsUsername: async (username) => {
    return (await $axios.get(path.getExistsUsername(username))).data
  },
  updateUsername: async (distributorId, username) => {
    return (
      await $axios.put(path.updateUsername(), {
        distributorId,
        username
      })
    ).data
  },
  getEnrollerInfo: async (distributorId) => {
    return (await $axios.get(path.getEnrollerInfo(distributorId))).data
  },
  getDistributorAddresses: async (distributorId) => {
    return (await $axios.get(path.getDistributorAddresses(distributorId))).data
  },
  /* https://xdeveloperexpress.xssclients.com/#tag/Address/paths/~1api~1v2.0~1Address~1Distributor/post */
  createDistributorAddress: async (
    payload
  ) => {
    const {address, address1, address2, distributorId, userId, city, countryId, regionId, regionName, zip} = payload
    return (
      await $axios.post(path.createDistributorAddress(), {
        address,
        address1,
        address2,
        distributorId,
        userId,
        city,
        countryId,
        regionId,
        regionName,
        zip
      })
    ).data
  },
  /* https://xdeveloperexpress.xssclients.com/#tag/Address/paths/~1api~1v2.0~1Address~1Distributor/put */
  updateDistributorAddress: async (payload) => {
    const {addressId, address, address1, address2, address3, distributorId, userId, city, countryId, regionId, regionName , zip, status} = payload
    return (
      await $axios.put(path.updateDistributorAddress(), {
        addressId,
        address,
        address1,
        address2,
        address3,
        distributorId,
        userId,
        city,
        countryId,
        regionId,
        regionName,
        zip,
        status
      })
    ).data
  },
  /* https://xdeveloperexpress.xssclients.com/#tag/Address/paths/~1api~1v2.0~1Address~1Distributor/delete */
  deleteDistributorAddress: async (distributorId, addressId) => {
    return (
      await $axios.delete(
        path.deleteDistributorAddress(),
        { data: { distributorId, addressId}}
      )
    ).data
  },
  updateBillingAndShippingAddresses: async (
    distributorId,
    billingAddressId,
    shippingAddressId
  ) => {
    return (
      await $axios.put(path.updateBillingAndShippingAddresses(distributorId), {
        billingAddressId,
        shippingAddressId
      })
    ).data
  },
  updateEmail: async (distributorId, newEmail, confirmNewEmail) => {
    return (
      await $axios.put(path.updateEmail(), {
        distributorId,
        newEmail,
        confirmNewEmail
      })
    ).data
  },
  updatePersonalInformation: async (
    distributorId,
    businessName,
    birthDate
  ) => {
    return (
      await $axios.put(path.updatePersonalInformation(), {
        distributorId,
        businessName,
        birthDate
      })
    ).data
  },
  getTopOfTree: async (distributorId) => {
    return (await $axios.get(path.getTopOfTree(distributorId))).data
  },

  //Doc Service: https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1Widget~1{distributorId}~1SponsorDetail/get
  // Norman 2022-05-23
  getSponsorDetailWidget: async (distributorId) => {
    return (await $axios.get(path.getSponsorDetailWidget(distributorId))).data
  },

  //Doc Service: https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1Widget~1Performance~1{distributorId}/get
  // Norman 2022-05-23
  getPerformanceWidget: async (distributorId) => {
    return (await $axios.get(path.getPerformanceWidget(distributorId))).data
  },

  //Doc Service: https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1Widget~1PerformanceBinary~1{distributorId}/get
  // Norman 2022-05-23
  getPerformanceBinary: async (distributorId) => {
    return (await $axios.get(path.getPerformanceBinary(distributorId))).data
  },

  //Doc Service: https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1Widget~1DistributorEnrollment~1{distributorId}/get
  // Norman 2022-05-23
  getDistributorEnrollmentsWidget: async (distributorId) => {
    return (
      await $axios.get(path.getDistributorEnrollmentsWidget(distributorId))
    ).data
  },

  //Doc Service: https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1Widget~1TeamEnrollment~1{distributorId}/get
  // Norman 2022-05-23
  getDistributorTeamEnrollments: async (distributorId) => {
    return (await $axios.get(path.getDistributorTeamEnrollments(distributorId)))
      .data
  },

  //Doc Service:  https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1Widget~1CustomerEnrollment~1{distributorId}/get
  // Norman 2022-05-23
  getCustomerEnrollmentsWidget: async (distributorId) => {
    return (await $axios.get(path.getCustomerEnrollmentsWidget(distributorId)))
      .data
  },

  //Doc Service:  https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1Widget~1FirstTimeSponsor/get
  // Norman 2022-05-23
  getFirstTimeSponsorsWidget: async (startDate, endDate) => {
    return (await $axios.get(path.getFirstTimeSponsorsWidget(startDate, endDate))).data
  },    
  //Doc Service:  https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1Widget~1SocialMedia~1{distributorId}/get
  // Norman 2022-05-23
  getSocialMediaWidget: async (distributorId) => {
    return (await $axios.get(path.getSocialMediaWidget(distributorId))).data
  },    
  verifyPhoneNumber: async (phone, marketId) => {
    return (await $axios.get(path.verifyPhoneNumber(phone, marketId))).data
  },
  verifyEmail: async (email) => {
    return (await $axios.get(path.verifyEmail(email))).data
  },
  // https://xdeveloperexpress.xssclients.com/#tag/Distributor/paths/~1api~1v2.0~1Distributor~1PreferredPlacement/put
  updatePreferredPlacement: async (
    distributorId,
    preferredPlacementId
  ) => {
    return (
      await $axios.put(path.updatePreferredPlacement(), {
        distributorId,
        preferredPlacementId
      })
    ).data
  }
})
