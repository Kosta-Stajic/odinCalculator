const  add = function(array) {
    return array.reduce((total, current) => total + current,0)
} 


console.log (add([12,15,2,4]))


const subtract = function(array) {
    return array.reduce((total, current) => total - current,0)
} 

console.log (subtract([12,15,3,5,12,-55]))

const multiply = function (array) {
    let solution = 1;
    for (let i = 0; i < array.length; i++) {
        solution *= array[i]
    }
    return solution
}

console.log (multiply ([4,5,6]))

const divide = function (a,b) {
   return a/b

}
console.log (divide(6,3))
