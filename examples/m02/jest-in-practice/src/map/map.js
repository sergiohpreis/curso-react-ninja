'use strict'

const map = (arr = [], func = item => item) => {
    let newArr = []
    let i;

    for (i = 0; i < arr.length; i ++) {
        newArr.push(func(arr[i], i, arr))
    }

    return newArr
}

export default map