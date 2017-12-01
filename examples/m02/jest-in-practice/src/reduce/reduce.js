'use strict'

const reduce = (arr, func, initialValue) => {
    let arrCopy = arr
    let acc = initialValue

    if (initialValue === undefined) {
        acc = arr[0]
        arrCopy = arr.slice(1)
    }

    for (let i = 0; i < arrCopy.length; i++) {
        acc = func(acc, arrCopy[i], i)
    }

    return acc
}

export default reduce