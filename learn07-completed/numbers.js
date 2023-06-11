function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Joseph Davidson"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let x = "10";
    let y = 20;
    let z = x + y;

    document.getElementById("add").innerHTML = "x + y = " + z;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let j = 123;
    
    document.getElementById("to-string").innerHTML = j.toString();
    (123).toString();
    (100 + 23).toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let t = 9.656;

    document.getElementById("exponent").innerHTML = t.toExponential(2);
    t.toExponential(4);
    t.toExponential(6);

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let q = 9.656;
    
    document.getElementById("fixed").innerHTML = q.toFixed(0);
    q.toFixed(2);
    q.toFixed(4);
    q.toFixed(6);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let w = 9.656;
      
    document.getElementById("precision").innerHTML = w.toPrecision();
    w.toPrecision(2);
    w.toPrecision(4);
    w.toPrecision(6);

    // Demonstrate the use of parseFloat() and print to the float paragraph
    document.getElementById("float").innerHTML = 
    parseFloat("15") + "<br>" +
    parseFloat("45.86") + "<br>" +
    parseFloat("12 9") + "<br>" +  
    parseFloat("23 years") + "<br>" +
    parseFloat("years 145");

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML = 
    parseInt("-15") + "<br>" +
    parseInt("34") + "<br>" +
    parseInt("16.73") + "<br>" +  
    parseInt("37 years") + "<br>" +  
    parseInt("years 34");


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    var one = 1;
    var two = 2;

    document.getElementById("equals").innerHTML = "one == " + one+ "<br>" + "two === " + two;
    
    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    // && and
    // || or
    // ands are always evaluated down first before or's, add parentheses to make sure the ands don't eat up the or's.
    document.getElementById("logic").innerHTML = "Ands(&&) are always evaluated down first before or's(||), add parentheses to make sure the ands don't eat up the or's.";
    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragraph
    var answer = window.prompt("Type YES, or NO. Then Click OK.")

    if (answer == "YES"); {
        console.log("Yes is the best")
    } if (answer == "NO"); {
        console.log("No is the worst")
    }

    switch (answer) {
        case "YES":
            console.log("Yes you say");
            break;
        case "NO":
            console.log("NO is bad");
            break;
    }
    
    document.getElementById("switch").innerHTML = answer;
    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    var sport = "baseball";
    
    sport === "football"
        ? console.log("Baseball it is")
        : console.log("Football it is")
    
    var fun = sport === "baseball" ? "football" : "pitcher"
    document.getElementById("ternary").innerHTML = fun;
}