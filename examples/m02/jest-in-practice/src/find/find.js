'use strict'

const find = (arr, func) => {
    let foundItem = undefined
    
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        
        if (func(item)) {
            foundItem = item
            break
        }
    }

    return foundItem
}

export default find