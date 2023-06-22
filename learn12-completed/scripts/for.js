// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
let text = "";

for (let i = 99; i > 1; i--) {
    text += i + " Bottles of beer on the wall," + "<br>" + i + " Bottles of beer." + "<br>" + "You take one down, pass it around, " + "<br>" + (i - 1) + " Bottles of beer on the wall." + "<br>";
}
document.getElementById("beer").innerHTML = text;
//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let txt = "";
for (let x in months) {
    txt += months[x] + "<br>";
}
document.getElementById("for-in").innerHTML = txt;



// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string.
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
let letters = "Joseph";

let txt1 = "";
for (let x of letters) {
    txt1 += x + "<br>";
}
document.getElementById("for-of").innerHTML = txt1;


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
let txt2 = "";
let i = 1;
while (i < 51) {
    txt2 += "<br>" + i;
    i++;
}

document.getElementById("while").innerHTML = txt2;