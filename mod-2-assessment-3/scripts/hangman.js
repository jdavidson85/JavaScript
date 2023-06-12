// declare and initialize array
let game = ["PICKLE", "BURGER", "SALAD", "CANDY", "TACO", "SUSHI", "APPLES", "CHEDDAR", "MILK", "WINE"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = 'images/01.png';

    imgArray[1] = new Image();
    imgArray[1].src = 'images/02.png';

    imgArray[2] = new Image();
    imgArray[2].src = 'images/03.png';

    imgArray[3] = new Image();
    imgArray[3].src = 'images/04.png';

    imgArray[4] = new Image();
    imgArray[4].src = 'images/05.png';

    imgArray[5] = new Image();
    imgArray[5].src = 'images/06.png';

    imgArray[6] = new Image();
    imgArray[6].src = 'images/07.png';

function setup() {
    //alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}

function nextImage() {
    var img = document.getElementById("hangman");

    for(var i = 0;i<imgArray.length;i++)
    {
        if(imgArray[i] == img)
        {
            if(i == imgArray.length)
            {
                var j = 0;
                document.getElementById("hangman").src = imgArray[j].src;
                break;
            }
            else
            var j = i + 1;
            document.getElementById("hangman").src = imgArray[j].src;
            break;
        }
    }   
}


// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function (event) {

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null

    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        let found = false;
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        }
        output = output + display[c] + ' ';
    }

    if (found === false) {
        
        attemptsLeft --;
    }
    

    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
    
    document.getElementById("word").innerHTML = output;
    /*output = '';*/
    
});


//script connected fine some reason the button and the script are not registering.