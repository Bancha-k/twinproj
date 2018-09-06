
exports.resolvers = {
  Query: {
    getAllProfiles: async (root, args, { Profile }) => {
      const allProfiles = await Profile.find()
      return allProfiles
    }
  },
  Mutation: {
    addProfile: async (
      root,
      { fullName,
        stadium,
        selectedTime,
        level,
        style,
        age,
        favoriteTeam },
      { Profile }
    ) => {
      const newProfile = await new Profile({
        fullName,
        stadium,
        selectedTime,
        level,
        style,
        age,
        favoriteTeam,
        matched: false,
        clearState: false,
        recordDate: new Date()
      }).save()
      return newProfile
    }
  }
}