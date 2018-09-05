/*
 * @Author: ComdevX 
 * @Email: comdevx@gmail.com 
 * @Date: 2018-09-03 23:56:35 
 * @Last Modified by: ComdevX
 * @Last Modified time: 2018-09-06 00:26:26
 */

import _ from 'lodash'

export default (data) => {
    const result = setTeam(data)
    return result
}

const setTeam = (data) => {
    let result = []
    data.forEach((pers, index) => {
        let arr = []
        data.forEach((pers2, index1) => {
            if (index !== index1) {
                arr.push({
                    name: pers2.name,
                    value: _.intersection(pers.data, pers2.data).length,
                    data: pers2.data
                })
            }
        })
        arr = arr.sort((a, b) => {
            return b.value - a.value
        })
        let arr2 = []
        const dup = checkDuplicate(result, pers.name)
        if (dup) {
            arr2.push({
                name: pers.name,
                data: pers.data,
                team: 'A'
            })
            result.push({
                name: pers.name,
                data: pers.data,
                team: 'A'
            })
        }
        let num = 1
        let team = false
        for (let i = 0; i < num; i++) {
            if (arr[i]) {
                const dup = checkDuplicate(result, arr[i].name)
                if (dup) {
                    arr2.push({
                        name: arr[i].name,
                        data: arr[i].data,
                        team: team ? 'A' : 'B'
                    })
                    result.push({
                        name: arr[i].name,
                        data: arr[i].data,
                        team: team ? 'A' : 'B'
                    })
                    team = team ? false : true
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
        const obj = data[i].name
        if (value === obj) {
            return false
        }
    }
    return true
}