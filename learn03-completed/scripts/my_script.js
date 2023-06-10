// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Joe";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
    //fix the errors
    var firstName = "Joe",
        lastName = "Davidson";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var firstName = "Joe",
        lastName = "Davidson";
    const taxRate = .07; // This is a constant
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Ory"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breeds = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breeds;

}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 32
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition;
    let subtraction = 50 - 25
    document.getElementById("subtraction").innerHTML = "50 - 25 = " + subtraction;
    let multiplication = 100 * 10
    document.getElementById("multiplication").innerHTML = "100 * 10 = " + multiplication;
    let exponent = 15 ** 2
    document.getElementById("exponent").innerHTML = "15 ** 2 = " + exponent;
    let division = 40 / 20
    document.getElementById("division").innerHTML = "40 / 20 = " + division;
    let modulus = 25 % 2
    document.getElementById("modulus").innerHTML = "25 % 2 = " + modulus;
    let increment = 5 + 1
    document.getElementById("increment").innerHTML = "5++ = " + increment;
    let decrement = 5 - 1
    document.getElementById("decrement").innerHTML = "5-- = " + decrement;

}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10 = " + "x = " + x;
    x += 1
    document.getElementById("plus-equals").innerHTML = "x += 1 = " + x;
    x -= 1
    document.getElementById("minus-equals").innerHTML = "x -= 1 = " + x;
    x *= 2
    document.getElementById("times-equals").innerHTML = "x *= 2 = " + x;
    x /= 4
    document.getElementById("divide-equals").innerHTML = "x /= 4 = " + x;
    x %= 2
    document.getElementById("modulus-equals").innerHTML = "x %= 2 = " + x;

    
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const consoles = ["PS5", "Xbox Series", "Nintendo Switch", "PC"]
    document.getElementById("array").innerHTML = consoles;
    const family = {wife:"Jacki", kid1:"Luke", kid2:"Lincoln", doggie:"Harley"}
    document.getElementById("object").innerHTML = "My family is " + " my wife " + family.wife + ", my first son " + family.kid1 + ", my second son " + family.kid2 + ", and my dog " + family.doggie + ".";

}