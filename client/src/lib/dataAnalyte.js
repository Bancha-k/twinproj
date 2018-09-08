/*
 * @Author: ComdevX 
 * @Email: comdevx@gmail.com 
 * @Date: 2018-09-03 23:56:35 
 * @Last Modified by: ComdevX
 * @Last Modified time: 2018-09-08 15:00:04
 */

import _ from 'lodash'

export default data => {
  const newData = []
  data.forEach(val => {
    const data = [val.level, val.style, val.age, val.favoriteTeam]
    const editData = {
      fullName: val.fullName,
      data: data
    }

    newData.push(editData)
  })

  const result = setTeam(newData)
  return result
}

const setTeam = data => {
  let result = []
  data.forEach((pers, index) => {
    let arr = []
    data.forEach((pers2, index1) => {
      if (index !== index1) {
        arr.push({
          fullName: pers2.fullName,
          value: _.intersection(pers.data, pers2.data).length,
          data: pers2.data
        })
      }
    })
    arr = arr.sort((a, b) => {
      return b.value - a.value
    })
    let arr2 = []
    const dup = checkDuplicate(result, pers.fullName)
    if (dup) {
      arr2.push({
        fullName: pers.fullName,
        data: pers.data,
        team: 'A'
      })
      result.push({
        fullName: pers.fullName,
        data: pers.data,
        team: 'A'
      })
    }
    let num = 2 - 1
    let team = false
    let no = 1
    for (let i = 0; i < num; i++) {
      if (arr[i]) {
        const dup = checkDuplicate(result, arr[i].fullName)
        if (dup && arr2.length > 0) {
          arr2.push({
            fullName: arr[i].fullName,
            data: arr[i].data,
            team: team ? 'A' : 'B'
          })
          result.push({
            fullName: arr[i].fullName,
            data: arr[i].data,
            team: team ? 'A' : 'B'
          })
          team = team ? false : true
          arr2.length === 2 && no++
        } else {
          num++
        }
      }
    }
  })
  return result
}

const checkDuplicate = (data, value) => {
  for (let i = 0; i < data.length; i++) {
    const obj = data[i].fullName
    if (value === obj) {
      return false
    }
  }
  return true
}