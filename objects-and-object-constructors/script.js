// const myObject = {
//     property: 'Value',
//     otherProperty: 77,
//     "obnoxious property": function() {
//         // do stuff!
//     }
// };


// // dot notation
// myObject.property; // 'Value!'

// // bracket notation
// myObject["obnoxious property"]; // [Function]


// const variable = 'property';

// myObject.variable; // undefined (it's looking for a property named variable)

// myObject[variable]; // == myObject['property'], returns 'Value!'


// // example one
// const playerOneName = "tim";
// const playerTwoName = "jenn";
// const playerOneMarker = "X";
// const playerTwoMarker = "O";

// // example two
// const playerOne = {
//   name: "tim",
//   marker: "X"
// };

// const playerTwo = {
//   name: "jenn",
//   marker: "O"
// };

// function printName(player) {
//     console.log(player.name);
// }

// console.log(playerOneName);
// console.log(playerTwoName);

// function gameOver(winningPlayer){
//     console.log("Congratulations!");
//     console.log(winningPlayer.name + " is the winner!");
//   }
  


// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function() {
//         console.log(this.name)
//     };
// }

// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');
// player1.sayName(); // logs 'steve'
// player2.sayName(); // logs 'also steve'


// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;

//     this.info = function() {
//         return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
//     }
// }

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// console.log(theHobbit.info());

// console.log(Object.getPrototypeOf(theHobbit))

// // Player.prototype.__proto__
// Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// // Output may slightly differ based on the browser
// player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }


  
function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}`);
};

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`);
}

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();


