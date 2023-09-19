
function getPlayerChoice(question) {
    const choice = prompt(question);
    return choice;
}

// Function to start the game
function startGame() {
    alert("Welcome to the Text Adventure Game!");

    // Question #1
    const question1 = "You find yourself in a dark forest. Do you want to go to the 'left' or 'right'?";
    const choice1 = getPlayerChoice(question1);

    switch (choice1) {
        case "left":
            // Second question for the left path
            const question2Left = "You see a river. Do you want to 'swim' across or 'find a bridge'?";
            const choice2Left = getPlayerChoice(question2Left);

            if (choice2Left === "swim") {
                // Third question for swimming choice
                const question3LeftSwim = "The river is too strong. Do you 'try to swim' again or 'turn back'?";
                const choice3LeftSwim = getPlayerChoice(question3LeftSwim);

                if (choice3LeftSwim === "try to swim") {
                    alert("You successfully cross the river and find a hidden treasure! You win!");
                } else {
                    alert("You turn back and get lost in the forest. Game over.");
                }
            } else if (choice2Left === "find a bridge") {
                // Third question for bridge choice
                const question3LeftBridge = "You find a troll guarding the bridge. Do you 'fight' or 'try to negotiate'?";
                const choice3LeftBridge = getPlayerChoice(question3LeftBridge);

                if (choice3LeftBridge === "fight") {
                    alert("You defeat the troll and cross the bridge safely. You find a treasure! You win!");
                } else {
                    alert("The troll doesn't listen to you. You have to turn back. Game Over.");
                }
            } else {
                alert("Invalid choice. Game over.");
            }
            break;

        case "right":
            // Second question for the right path
            const question2Right = "You come across a cave entrance. Do you 'enter' or 'walk away'?";
            const choice2Right = getPlayerChoice(question2Right);

            if (choice2Right === "enter") {
                // Third question for entering the cave
                const question3RightEnter = "You see two tunnels inside. Do you take the 'left' or 'right' tunnel?";
                const choice3RightEnter = getPlayerChoice(question3RightEnter);

                if (choice3RightEnter === "left") {
                    alert("You discover a hidden treasure in the cave! You win!");
                } else if (choice3RightEnter === "right") {
                    alert("You encounter a giant spider and get trapped and he eats you. Game Over.");
                } else {
                    alert("Invalid choice. Game Over!");
                }
            } else if (choice2Right === "walk away") {
                alert("You decide to walk away from the cave. Game Over.");
            } else {
                alert("Invalid choice. Game Over.");
            }
            break;

        default:
            alert("Invalid choice. Game Over!!");
    }

    // asks if the user wants to replay
    const replay = confirm("Do you want to play again?");
    if (replay) {
        startGame(); 
    } else {
        alert("Thanks for playing!");
    }
}

// restart
startGame();

