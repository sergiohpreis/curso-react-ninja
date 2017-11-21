export default (array, callback) => {
    let newArr = []
    console.log(typeof callback)
    array.forEach((item, index) => {
        newArr.push(callback(item, index, array))
    })

    return newArr
}