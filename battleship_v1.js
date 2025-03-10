var guesses = 0;

var isSunk = false;

//game logic

while (isSunk == false){
    guess = prompt("Ready! , Aim, Fire!(Enter Number 0-6)🎯:");

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

    var stats = "You sank my battleship at" + guesses + "guesses" + "and your accuracy is" + (3/guesses);