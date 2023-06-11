function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Joseph Davidson";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let text = "Be it ever so humble, there is no place like home."
    document.getElementById("length").innerHTML = text.length;

    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let escape = "We are some of the best \"Ballers\" from around the globe.";
    document.getElementById("escape").innerHTML = escape;

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    var first = "Joseph M. Davidson"
    let part = first.slice(0,7)
    document.getElementById("first").innerHTML = part;

    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let str = "Joseph M. Davidson"
    document.getElementById("middle").innerHTML = str.substring(7,10);

    // Use the JavaScript subst Method to display your last name to the last paragraph
    var substr = "Joseph M. Davidson";
    document.getElementById("last").innerHTML = str.substr(-9);


    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College"
    document.getElementById("major").innerHTML = major.replace("Physical Therapy","Web design and development");

    // convert the following variable to upper case then print to the upper paragraph
    let upper = "It\'s a great day to be alive!"
    document.getElementById("upper").innerHTML = upper.toUpperCase();
    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let trimText1 = trimText.trim();
    document.getElementById("trim").innerHTML = "trimText = " + trimText1.trim + "<br>trimText1 = " + trimText1.trim;
    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    document.getElementById("index").innerHTML = months.slice(33, 36)

    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let fullName = "Joseph Davidson"
    document.getElementById("greeting").innerHTML = fullName;


    // Use Variable substitutions to create a greeting that incorporates your first and last name and
    // print to the greeting paragraph
    document.getElementById("greeting").innerHTML = "Hi Joseph"
}