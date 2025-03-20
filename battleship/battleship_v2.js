//Declared variables 
var randomLoc = Math.floor(Math.random()* 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

//game logic

while (isSunk == false){
    guess = prompt("Ready! , Aim, Fire!(Enter Number 0-6)🎯:");

    if (guess == null) {
        alert("Te Namian kmn hy? te ok a");
        break;
    }

    if (guess< 0 || guess > 6) {
        alert("Please enter a valid cell number! okay?😒")
    }else {
        guesses = guesses += 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits += 1;
            alert("Hit!")

            if (hits ==3) {
                isSunk = true;
                alert("You sank my battleship")
            }
        }else {
            alert("Miss da baba mo!")
        }
    }
    }
   var accuracy = (guesses > 0 ? (hits/ guesses) * 100 : 0).toFixed(2);
   var stats = "YOU TOOK" + GUESSES + "GUESSES TO SINK THE BATTLESHIP! " + "\n" + "Accuracy: " + accuracy + "%";

   alert(stats);

