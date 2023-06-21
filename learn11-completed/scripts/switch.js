function calculate() {
    var chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);
    let year = parseInt(document.getElementById("year").value);
    var astro_sign = (day, month);

    switch (year % 12, day, month) {
        case 0:
            chi = "Monkey"
            break;
        case 1:
            chi = "Rooster"
            break;
        case 2:
            chi = "Dog"
            break;
        case 3:
            chi = "Pig"
            break;
        case 4:
            chi = "Rat"
            break;
        case 5:
            chi = "Ox"
            break;
        case 6:
            chi = "Tiger"
            break;
        case 7:
            chi = "Rabbit"
            break;
        case 8:
            chi = "Dragon"
            break;
        case 9:
            chi = "Snake"
            break;
        case 10:
            chi = "Horse"
            break;
        case 11:
            chi = "Sheep"
            break;
        default:
            chi = "Sadface";


    }
    if (month == "12") {

        if (day < 22)
            astro_sign = "Sagittarius";
        else
            astro_sign = "capricorn";
    }

    else if (month == "1") {
        if (day < 20)
            astro_sign = "Capricorn";
        else
            astro_sign = "aquarius";
    }

    else if (month == "2") {
        if (day < 19)
            astro_sign = "Aquarius";
        else
            astro_sign = "pisces";
    }

    else if (month == "3") {
        if (day < 21)
            astro_sign = "Pisces";
        else
            astro_sign = "aries";
    }
    else if (month == "4") {
        if (day < 20)
            astro_sign = "Aries";
        else
            astro_sign = "taurus";
    }

    else if (month == "5") {
        if (day < 21)
            astro_sign = "Taurus";
        else
            astro_sign = "gemini";
    }

    else if (month == "6") {
        if (day < 21)
            astro_sign = "Gemini";
        else
            astro_sign = "cancer";
    }

    else if (month == "7") {
        if (day < 23)
            astro_sign = "Cancer";
        else
            astro_sign = "leo";
    }

    else if (month == "8") {
        if (day < 23)
            astro_sign = "Leo";
        else
            astro_sign = "virgo";
    }

    else if (month == "9") {
        if (day < 23)
            astro_sign = "Virgo";
        else
            astro_sign = "libra";
    }

    else if (month == "10") {
        if (day < 23)
            astro_sign = "Libra";
        else
            astro_sign = "scorpio";
    }

    else if (month == "11") {
        if (day < 22)
            astro_sign = "scorpio";
        else
            astro_sign = "sagittarius";
    }
    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
    document.getElementById("zodiac").innerHTML = "Your Zodiac sign is: " + astro_sign;

}