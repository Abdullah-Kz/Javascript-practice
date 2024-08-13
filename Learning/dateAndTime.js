let myDate = new Date();
console.log(myDate.toDateString());//prints day /month/date/year
console.log(myDate.toLocaleDateString());//print full date date/month/year
console.log(myDate.toLocaleString());//prints date/month/year and time
console.log(myDate.toLocaleTimeString());//prints day / month name / date/year /full time in 24 hours zone and time zone
console.log(myDate.toString());//will be same if we print console.log(myDate)
console.log(myDate.toUTCString());//same as above but without time zone


//you can also declare arbitrary dates 
let myDate2 = new Date(2021, 0 , 21 , 11,5,5);//will be jan 21 2021 11:05:05
console.log(myDate2.toLocaleString())//will print my date that I provided