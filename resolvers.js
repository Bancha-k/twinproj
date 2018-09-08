exports.resolvers = {
  Query: {
    searchProfilesByName: async (root, args, {
        Profile
      }) => {
        const allsearchProfilesByName = await Profile.find({
          fullName: new RegExp(args.fullName, 'g')
        })
        return allsearchProfilesByName
      },
      getAllProfiles: async (root, args, {
          Profile
        }) => {
          const allProfiles = await Profile.find()
          return allProfiles
        },
        getSelectedTeam: async (root, args, {
          Profile
        }) => {
          const allPlayer = await Profile.find({
            stadium: args.stadium,
            selectedTime: args.selectedTime
          })
          return allPlayer
        }
  },
  Mutation: {
    addProfile: async (
      root, {
        fullName,
        stadium,
        selectedTime,
        level,
        style,
        favoriteTeam,
        age
      }, {
        Profile
      }
    ) => {
      const checkFull = await Profile.find({
        stadium: stadium,
        selectedTime: selectedTime,
        matched: false
      })
      if (checkFull.length === 14) {
        console.log('unavaliable ' + checkFull.length)
        // return checkFull
      } else {
        console.log('avaliable ' + checkFull.length)
        const result = await new Profile({
          fullName,
          stadium,
          selectedTime,
          level,
          style,
          favoriteTeam,
          age,
          matched: false,
          clearState: false,
          recordDate: new Date(),
        }).save()

        let newCheckFull = await Profile.find({
          stadium: stadium,
          selectedTime: selectedTime,
          matched: false
        })

        await newCheckFull.map(val => {
          Profile.update({
            fullName: val.fullName
          }, {
            $set: {
              matched: true
            }
          })
        })
        let arr = []
        for (let i = 0; i < newCheckFull.length - 1; i++) {
          arr.push(newCheckFull[i])
        }
        arr.unshift(result)
        return arr
      }
    }
  }
}