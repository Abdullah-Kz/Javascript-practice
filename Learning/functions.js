function myName(){
    for(let i = 1; i <= 100; i++){
        console.log(`My name is Abdullah ${i}`)
    }

}
// myName()


function calculateCartPrice(val1, val2, ...num1){ // ... here takes all the values and stores them in the array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


//below is the example of passing an object to the function as a argument upto line 31
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Abdullah",
//     price: 399
// })

//below is the example of passing an array to the function as a argument upto line 41

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));