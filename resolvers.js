exports.resolvers = {
  Query: {
    searchProfilesByName: async (root, args, { Profile }) => {
      const allsearchProfilesByName = await Profile.find({
        fullName: { $regex: `.*${args.fullName}.*` }
      })
      return allsearchProfilesByName
    },
    getAllProfiles: async (root, args, { Profile }) => {
      const allProfiles = await Profile.find()
      return allProfiles
    }
  },
  Mutation: {
    addProfile: async (
      root,
      { fullName, stadium, selectedTime, level, style, favoriteTeam, age },
      { Profile }
    ) => {
      const checkFull = await Profile.find({
        stadium: stadium,
        selectedTime: selectedTime,
        matched: false
      })
      if (checkFull.length === 14) {
        console.log('unavaliable ' + checkFull.length)
        return checkFull
      } else {
        console.log('avaliable ' + checkFull.length)
        await new Profile({
          fullName,
          stadium,
          selectedTime,
          level,
          style,
          favoriteTeam,
          age,
          matched: false,
          clearState: false,
          recordDate: new Date()
        }).save()

        const newCheckFull = await Profile.find({
          stadium: stadium,
          selectedTime: selectedTime,
          matched: false
        })
        return newCheckFull
      }
    }
  }
}
