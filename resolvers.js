exports.resolvers = {
  Query: {
    searchProfilesByName: async (root, args, { Profile }) => {
      const allsearchProfilesByName = await Profile.find({
        fullName: new RegExp(args.fullName, 'g')
      })
      return allsearchProfilesByName
    },
    getAllProfiles: async (root, args, { Profile }) => {
      const allProfiles = await Profile.find()
      return allProfiles
    },
    getSelectedTeam: async (root, args, { Profile }) => {
      const allPlayer = await Profile.find({
        stadium: args.stadium,
        selectedTime: args.selectedTime,
        matched: true,
        clearState: false
      })
      return allPlayer
    }
  },
  Mutation: {
    clearSelectedTeam: async (root, { stadium, selectedTime }, { Profile }) => {
      let PlayerMatchedList = await Profile.find({
        stadium: stadium,
        selectedTime: selectedTime,
        matched: true,
        clearState: false
      })

      await PlayerMatchedList.map(params => {
        Profile.updateOne(
          { _id: params._id },
          { $set: { clearState: true } }
        ).exec()
      })
    },
    addProfile: async (
      root,
      { fullName, stadium, selectedTime, level, style, favoriteTeam, age },
      { Profile }
    ) => {
      const checkFull = await Profile.find({
        stadium: stadium,
        selectedTime: selectedTime,
        matched: true,
        clearState: false
      })
      console.log(checkFull.length)
      if (checkFull.length >= 14) {
        console.log('incase')
        return null
      } else {
        console.log('outcase')
        let newProfile = await new Profile({
          fullName,
          stadium,
          selectedTime,
          level,
          style,
          favoriteTeam,
          age,
          matched: true,
          clearState: false,
          recordDate: new Date()
        }).save()

        let changedProfile = await Profile.find({
          stadium: stadium,
          selectedTime: selectedTime,
          matched: true,
          clearState: false
        })

        changedProfile.push(newProfile)

        return changedProfile
      }

      // if (checkFull.length < 14 || checkFull.length == 14) {
      //   console.log('avaliable ' + checkFull.length)
      //   let newProfile = await new Profile({
      //     fullName,
      //     stadium,
      //     selectedTime,
      //     level,
      //     style,
      //     favoriteTeam,
      //     age,
      //     matched: true,
      //     clearState: false,
      //     recordDate: new Date()
      //   }).save()

      //   let changedProfile = await Profile.updateMany(
      //     {
      //       stadium: stadium,
      //       selectedTime: selectedTime,
      //       matched: false,
      //       clearState: false
      //     },
      //     { $set: { matched: true } },
      //     { multi: true }
      //   ).exec()

      //   changedProfile.push(newProfile)
      //   console.log(changedProfile)
      // }
    }
  }
}
