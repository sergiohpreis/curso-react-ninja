'use strict'

const every = (arr, func) => {
    let validator = true

    for(let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i)) {
            validator = false
            break
        }
    }

    return validator
}

export default every