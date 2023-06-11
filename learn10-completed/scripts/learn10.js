function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById("round").innerHTML = Math.round(4.6);
    document.getElementById("ceil").innerHTML = Math.ceil(5.6);
    document.getElementById("floor").innerHTML = Math.floor(-3.6);
    document.getElementById("trunc").innerHTML = Math.trunc(7.6);
    document.getElementById("sign").innerHTML = Math.sign(9.6);
    document.getElementById("pow").innerHTML = Math.pow(9 , 3);
    document.getElementById("min").innerHTML = Math.min(912, 22, 67, -12);
    document.getElementById("random").innerHTML = Math.random();
    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = Math.floor(Math.random() * 60);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    let x = 5;
    document.getElementById("comparisons").innerHTML = "equal-to :" + "(x==8)" + (x == 8);
    let y = 5;
    document.getElementById("comparisons2").innerHTML = "equal-value-and-type :" + "(y===5)" + (y === 5);

    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}