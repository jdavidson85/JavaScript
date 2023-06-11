const dog1 = {
    heading: "Florida Shore",
    image: "images/pic1.jpeg",
    caption: "2018",
    altTag: "Florida"
}

const dog2 = {
     heading: "Oregon",
     image: "images/pic2.jpeg",
     caption: "2017",
     altTag: "Oregon"
};

const dog3 = {
     heading: "Oregon Creeks",
     image: "images/pic3.jpeg",
     caption: "2017",
     altTag: "Creek"
};

const dog4 = {
     heading: "Calm Florida Coastline",
     image: "images/pic4.jpeg",
     caption: "2018",
     altTag: "Calm-Coast"
};

const dog5 = {
     heading: "Best Beach Day",
     image: "images/pic5.jpeg",
     caption: "2017",
     altTag: "Beach"
};

function object(dog) {
     if (dog == 1) {
         loadMe(dog1, 1); 
     } else if (dog == 2) {
         loadMe(dog2, 2);
     } else if (dog == 3) {
         loadMe(dog3, 3);
     } else if (dog == 4) {
         loadMe(dog4, 4);
     } else if (dog == 5) {
         loadMe(dog5, 5);
     }
}
function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}

function display() {
    alert("Great Life Ahead!")
}