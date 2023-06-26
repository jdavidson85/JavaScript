var vacation1 = {
    heading: "Florida Intercostal",
    image: "images/florida1.jpeg",
    caption: "Looking out towards where they launch astronauts.",
    altTag: "vacation"
};

var vacation2 = {
    heading: "Florida",
    image: "images/florida2.jpeg",
    caption: "Getting ready to fish the night away.",
    altTag: "vacation"
};

var vacation3 = {
    heading: "Florida",
    image: "images/florida3.jpeg",
    caption: "Calm coastal potion in Cocoa Beach",
    altTag: ""
};

var vacation4 = {
    heading: "Florida",
    image: "images/florida4.jpeg",
    caption: "Wavy waters from the Atlantic Ocean",
    altTag: ""
};

function chooseVacation(vacation) {
    if (vacation == 1) {
        loadMe(vacation1, 1);
    } else if (vacation == 2) {
        loadMe(vacation2, 2);
    } else if (vacation == 3) {
        loadMe(vacation3, 3);
    } else if (vacation == 4) {
        loadMe(vacation4, 4);
    }
}

function loadMe2(vacation, vacationNum) {
    document.getElementById("heading" + vacationNum).innerHTML = vacation.heading;
    document.getElementById("img" + vacationNum).src = vacation.image;
    document.getElementById("img" + vacationNum).style.display = "";
    document.getElementById("p" + vacationNum).innerHTML = vacation.caption;
    document.getElementById("img" + vacationNum).setAttribute('alt', vacation.altTag);
}