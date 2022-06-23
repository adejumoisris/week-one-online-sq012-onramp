function filterArray(arr) {
    return arr.filter((elem) =>{return typeof elem === 'number'})

 
}

module.exports = filterArray
console.log(filterArray([1,3,200,44,4,5,"me","8"]));