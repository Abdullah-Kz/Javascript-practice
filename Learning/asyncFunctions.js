// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     console.log('...calling done');
//     // Expected output: "resolved"
//   }
  
//   asyncCall();
  

// let p = new Promise((resolve, reject) => {
//     let isTrue = true;
//     if (isTrue) {
//       resolve(`Success the value was ${isTrue}`);
//     } else {
//       reject('Error');
//     }
//   });
  
//   p
//   .then(message => console.log(`Promise resolved: ${message}`))
//   .catch(message => console.log(`Promise rejected: ${message}`));




// const isPhoneStore = true;
// const isPhoneAvailable = true;

// function processMessage() {
//   return new Promise((resolve, reject) => {
//     if (!isPhoneStore) {
//       reject({
//         name: 'Wrong store',
//         message: 'Sorry, this is a food store!',
//       });
//     } else if (!isPhoneAvailable) {
//       reject({
//         name: 'Out of stock',
//         message: 'Sorry, the X phone is out of stock!',
//       });
//     } else {
//       resolve({
//         name: 'OK',
//         message: 'The X phone is available! How many you want to buy?',
//       });
//     }
//   });
// }

// processMessage()
//   .then(response => console.log(`${response.name}: ${response.message}`))
//   .catch(error => console.log(`${error.name}: ${error.message}`));



fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
 