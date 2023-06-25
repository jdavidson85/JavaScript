sayHi();

class Games {
    constructor(rating, genre, year, price) {
        this.rating = rating;
        this.genre = genre;
        this.year = year;
        this.price = price;
    }

    gameStats() {
        return `this game is rated ${this.rating}, this games genre is ${this.genre}, the year it was released was ${this.year}, and the price of the game is ${this.price}. `
    }

    static TotalRatings(game1, game2) {
        const rating1 = game1.rating;
        const rating2 = game2.rating;

        return rating1 + rating2;
    }
}

const game1 = new Games('M', 'RPG', '2021', '59.99')
const game2 = new Games('T', 'MMO', '2022', '39.99')



console.log(game1);
console.log(game1.gameStats());
console.log(game2);
console.log(game2.gameStats());
console.log(Games.TotalRatings(game1, game2));


function sayHi() {
    return console.log('This function can be called anywhere');
}

sayHi();


document.getElementById("p1").innerHTML = "M, RPG, 2021, 59.99";
document.getElementById("p2").innerHTML = "T, MMO, 2022, 39.99";