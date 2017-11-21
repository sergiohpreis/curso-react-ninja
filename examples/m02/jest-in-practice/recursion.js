const sum = arr => {
    const [head, ...tail] = arr

    if (!arr.length)
        return arr.length

    return head + sum(tail)
}

console.log(sum([1, 2, 3, 4, 5]))