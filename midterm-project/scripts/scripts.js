//sport objects
//sports images from Unsplash
const sport1 = {
    heading: "Baseball",
    image: "images/baseball.jpg",
    caption: "My favorite sport to play was and has always been baseball.",
    altTag: "sports"
};

const sport2 = {
    heading: "Football",
    image: "images/football.jpg",
    caption: "I played a lot of football growing up.",
    altTag: "sports"
};

const sport3 = {
    heading: "Basketball",
    image: "images/basketball.jpg",
    caption: "Basketball in the 90's was my favorite era.",
    altTag: "sports"
};

const sport4 = {
    heading: "Futbol",
    image: "images/futbol.jpg",
    caption: "The average professional mid-fielder runs over 20 miles a game.",
    altTag: "sports"
};
// Vacation objects
//images from my own camera
/*const vacation1 = {
    heading: "Florida",
    image: "images/florida1.jpeg",
    caption: "",
    altTag: ""
};

const vacation2 = {
    heading: "Florida",
    image: "images/florida2.jpeg",
    caption: "",
    altTag: ""
};

const vacation3 = {
    heading: "Florida",
    image: "images/florida3.jpeg",
    caption: "",
    altTag: ""
};

const vacation4 = {
    heading: "Florida",
    image: "images/florida4.jpeg",
    caption: "",
    altTag: ""
};*/
//image loading
function chooseSport(sport) {
    if (sport == 1) {
        loadMe(sport1, 1);
    } else if (sport == 2) {
        loadMe(sport2, 2);
    } else if (sport == 3) {
        loadMe(sport3, 3);
    } else if (sport == 4) {
        loadMe(sport4, 4);
    }
}
//image loading
/*function chooseVacation(vacation) {
    if (vacation == 1) {
        loadMe(vacation1, 1);
    } else if (vacation == 2) {
        loadMe(vacation2, 2);
    } else if (vacation == 3) {
        loadMe(vacation3, 3);
    } else if (vacation == 4) {
        loadMe(vacation4, 4);
    }
}*/
//placing elements to the correct places
function loadMe(sport, sportNum) {
    document.getElementById("heading" + sportNum).innerHTML = sport.heading;
    document.getElementById("img" + sportNum).src = sport.image;
    document.getElementById("img" + sportNum).style.display = "block";
    document.getElementById("p" + sportNum).innerHTML = sport.caption;
    document.getElementById("img" + sportNum).setAttribute('alt', sport.altTag);
}
/*
// Vacation objects
//images from my own camera
const vacation1 = {
    heading: "Florida",
    image: "images/florida1.jpeg",
    caption: "",
    altTag: ""
};

const vacation2 = {
    heading: "Florida",
    image: "images/florida2.jpeg",
    caption: "",
    altTag: ""
};

const vacation3 = {
    heading: "Florida",
    image: "images/florida3.jpeg",
    caption: "",
    altTag: ""
};

const vacation4 = {
    heading: "Florida",
    image: "images/florida4.jpeg",
    caption: "",
    altTag: ""
};
//image loading
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

function loadMe(vacation, vacationNum) {
    document.getElementById("heading" + vacationNum).innerHTML = vacation.heading;
    document.getElementById("img" + vacationNum).src = vacation.image;
    document.getElementById("img" + vacationNum).style.display = "inline";
    document.getElementById("p" + vacationNum).innerHTML = vacation.caption;
    document.getElementById("img" + vacationNum).setAttribute('alt', vacation.altTag);
}
*/