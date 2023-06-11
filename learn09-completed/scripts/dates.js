/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const d = new Date();
document.getElementById("basic").innerHTML = d;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const da = new Date("2023-06-11")
document.getElementById("today").innerHTML = da;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const day = new Date("September 24, 1985");
document.getElementById("birthday").innerHTML = day.toDateString();


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
document.getElementById("iso").innerHTML = day.toISOString();


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const year = Date("2023");
const days = new Date("2023-06-10T12:00:00Z");
const shorts = new Date("03/25/2015")
document.getElementById("date1").innerHTML = year;
document.getElementById("date2").innerHTML = days;
document.getElementById("date3").innerHTML = shorts;


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const date = new Date("2023");
const dates = new Date("6");
const dates1 = new Date("4:30");
const dates2 = new Date("5:30");


document.getElementById("get1").innerHTML = date.getFullYear;
document.getElementById("get2").innerHTML = dates.getMonth;
document.getElementById("get3").innerHTML = dates1.getTime;
document.getElementById("get4").innerHTML = dates2.getTimezoneOffset;
// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const dat1 = new Date();
dat1.setFullYear("2023");
const dat2 = new Date();
dat2.setMilliseconds("60")
const dat3 = new Date();
dat3.setMonth("6");
const dat4 = new Date(120);
dat4.setMinutes

document.getElementById("set1").innerHTML = dat1.setFullYear;
document.getElementById("set2").innerHTML = dat2.setMilliseconds;
document.getElementById("set3").innerHTML = dat3.setMonth;
document.getElementById("set4").innerHTML = dat4.setUTCMinutes;