let a = null

console.log(typeof a)
let valueInNumber = Number(a)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// Conversions (Other types to number)
// "abc" -> NaN
// "33" -> 33
// "33abc" -> NaN
// Null -> 0
// undefined -> NaN
// true -> 1 False -> 0 

// Conversions (Other types to boolean)
// "abc" -> false       
// 33 -> true
// 0 -> false
// "33abc" -> false
// Null -> false
// undefined -> false
