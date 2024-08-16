// let a = null

// console.log(typeof a)
// let valueInNumber = Number(a)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

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
let person={firstName : "John", lastName : "Doe", age : 50, eyeColor : "blue"}
// console.log(person.age)
person.nationality = "Pakistani"
// console.log(person.nationality)
function persondisplay(){
console.log(person.firstName + " " + person.lastName + " " + "He is" +  " " + person.age + " Years old " + "And his nationality is " + person.nationality)
}
persondisplay()
let mystring = JSON.stringify(person)
console.log(mystring)

function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
  }
let otherperson = new Person("Abdullah","Khanzada",20,"brown")
let myotherstring = JSON.stringify(otherperson)
console.log()