// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Abdullah",
    lastName : "Khanzada",
     [mySym]: "mykey1",
    age: 18,
    location: "Hyderabad",
    email: "abdullah@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],

}
// JsUser.fullName = `${JsUser.name} ${JsUser.lastName}`;

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser.fullName)
// console.log(typeof JsUser[mySym])
// console.log(typeof([mySym]))

// JsUser.email = "abdullah@chatgpt.com"
// Object.freeze(JsUser) freezes the object so that no other changes can be made furthermore to say it shortly it will become read only and cannot be changed
// JsUser.email = "abdullah@microsoft.com"
// console.log(JsUser);

// console.log(Object.keys(JsUser));//returns all the keys
// console.log(Object.values(JsUser));// returns all the values 
// console.log(Object.entries(JsUser));

// console.log(JsUser.hasOwnProperty('isLoggedIn'));// checks if the object has the property or not

// JsUser.greeting = function(){ // a function to create to say greetings
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){ // a function to create to say greetings but a name is referenced banck to the function from the object
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++object advance+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj1 = {1:'a', 2:'b', 3:'c'}
const obj2 = {4:'d', 5:'e', 6:'f'}
const obj5 = {7:'g', 8:'h', 9:'i'}
// const obj3 = Object.assign(obj1, obj2, obj5)// merges the all the objects content in one object but it also changes the original objects
// console.log(obj1)// merges the all the objects content in one object without changing the original objects
const obj4 = {...obj1, ...obj2,...obj5}
// console.log(obj)



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++object destructuring+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const course = {
    coursename: "object study",
    price: "1000",
    courseInstructor: "Abdullah"
}

// course.courseInstructor // typical way to call the property of the object

const {courseInstructor: instructor} = course //destructuring way of calling the property of the object and assigning it to a variable
const {coursename: name} = course
// console.log(courseInstructor);
console.log(instructor);
console.log(name);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// this is an json object which apis gives to us it can also be an array or can be in a nested form 
// below is an example

// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Madame",
//           "first": "Arianna",
//           "last": "Dubois"
//         },
//         "location": {
//           "street": {
//             "number": 2586,
//             "name": "Avenue de la République"
//           },
//           "city": "Wolhusen",
//           "state": "Solothurn",
//           "country": "Switzerland",
//           "postcode": 5569,
//           "coordinates": {
//             "latitude": "-61.3885",
//             "longitude": "23.8835"
//           },
//           "timezone": {
//             "offset": "+5:00",
//             "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
//           }
//         },
//         "email": "arianna.dubois@example.com",
//         "login": {
//           "uuid": "13db40fa-1731-41d5-a568-b7357880ba22",
//           "username": "orangepeacock547",
//           "password": "getoff",
//           "salt": "DoeeZulw",
//           "md5": "80844a8aa3a7c8df8aff332e6a07b017",
//           "sha1": "d77eb0f05d24bf0665321830f59e339e59211869",
//           "sha256": "89f0aff2d21fdaa4c899f60bbc949beb41a0c891e765160bb092fc764ec03f78"
//         },
//         "dob": {
//           "date": "1957-08-16T06:27:04.624Z",
//           "age": 66
//         },
//         "registered": {
//           "date": "2008-08-17T00:35:09.816Z",
//           "age": 15
//         },
//         "phone": "075 661 11 12",
//         "cell": "075 907 63 25",
//         "id": {
//           "name": "AVS",
//           "value": "756.4368.1557.67"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/women/46.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/women/46.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/women/46.jpg"
//         },
//         "nat": "CH"
//       }
//     ]
//     "info": {
//       "seed": "bedf6c023c1c38d6",
//       "results": 1,
//       "page": 1,
//       "version": "1.4",
//     }
//   }
