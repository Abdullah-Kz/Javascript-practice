const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) add an element at the end of the array
// myArr.push(7) add an element at the end of the array
// myArr.pop() removes an element from the end of the array

// myArr.unshift(9) adds an element at start of the array
// myArr.shift() removes an element from the start of the array

// console.log(myArr.includes(9)); checks if 9 is in the array and returns true or false
// console.log(myArr.indexOf(2)); returns the value at the index of 2

// const newArr = myArr.join() converts the array into a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3) copies the elements from index 1 to 3 without including index of 3 in the new array without changing the orignal array

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)  removes the elements from the starting range to the ending range and puts them into the new arra removing them from the orignal array
// console.log("C ", myArr);
// console.log(myn2);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++array part 2+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // adds an array to another array as an subarray

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) this is an eay to add two arrays together without changing the orignal arrays 
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]  this is another way to add two or more arrays together without changing the orignal arrays

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) this merges all the sub arrays in the existhing array without changing the orignal array as one array
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh")) chacks if the value is an array
// console.log(Array.from("Hitesh")) makes an array of the given value
// console.log(Array.from({name: "hitesh"})) Interesting check it out  

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3)); combines the given values into an array

