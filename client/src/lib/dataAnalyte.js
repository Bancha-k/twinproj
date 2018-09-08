/*
 * @Author: ComdevX 
 * @Email: comdevx@gmail.com 
 * @Date: 2018-09-03 23:56:35 
 * @Last Modified by: ComdevX
 * @Last Modified time: 2018-09-08 17:43:03
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
  let arr = []
  for (let i = 1; i < data.length; i++) {
    arr.push({
      fullName: data[i].fullName,
      value: _.intersection(data[0].data, data[i].data).length,
      data: data[i].data
    })
  }
  arr = arr.sort((a, b) => {
    return b.value - a.value
  })
  result.push({
    fullName: data[0].fullName,
    data: data[0].data,
    team: 'A'
  })
  let team = false
  for (let i = 0; i < 13; i++) {
    result.push({
      fullName: arr[i].fullName,
      data: arr[i].data,
      team: team ? 'A' : 'B'
    })
    team = team ? false : true
  }
  return result
}