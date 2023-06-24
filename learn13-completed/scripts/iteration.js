/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const games = ["Luigi", " Mario", " Bowser", " Peach", " Toad."];
let text = "";
for (const x of games) {
    text += x + "<br>";
}
document.getElementById("list").innerHTML = "Super Mario Characters; " + games;


/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set("One", "Roar", "Flowers");


document.getElementById("set1").innerHTML = songs.size;

// add two more songs to the set then display in the set2 paragraph
songs.add("Jailhouse Rock");
songs.add("Wheels On The Bus");

document.getElementById("set2").innerHTML = songs.size;



/*
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const names = new Map([
    ["Joe", "joed@gmail.com"],
    ["James", "banana@gmail.com"],
    ["Cliff", "Orange@gmail.com"],
    ["Jacki", "jacki@gmail.com"],
    ["Luke", "luke@gmail.com"]
]);

let text1 = "";
names.forEach(function (value, key) {
    text1 += key + ' = ' + value + "<br>"
})

document.getElementById("map1").innerHTML = text1;


// add two new names and emails and display in map2 use the forEach() method
const name1 = new Map([
    ["Jeff", "jeff@gmail.com"],
    ["Karen", "karen@gmail.com"],
]);

let text2 = "";
name1.forEach(function (value, key) {
    text2 += key + ' = ' + value + "<br>"
})
document.getElementById("map2").innerHTML = text2;
// get and display the email of one person, display in map3
const name2 = new Map([
    ["Joe", "joed@gmail.com"],
]);
let text3 = "";
name2.forEach(function (value, key) {
    text3 += key + ' = ' + value + "<br>"
})
document.getElementById("map3").innerHTML = text3;