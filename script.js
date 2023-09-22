// Function to ask question and receive users response
const askQuestion = (question) => {
    return prompt(question);
  };

// Function for Main 
const playGame = () => {
    console.log("Welcome to the Matrix!")
    console.log("You've been living in a dream world. You can choose to 'take the red pill' or 'take the blue pill'.");

const pillChoice = askQuestion("Which pill do you choose? (red/blue)").toLowerCase()

if (pillChoice === "red") {
    console.log("You took the red pill and have entered the Matrix!");
const matrixChoice = askQuestion("In the Matrix, you can either 'hack' or 'fight the agents'. Which do you choose?").toLowerCase();
    
if (matrixChoice === "hack") {
    console.log("You successfully hacked the Matrix and saved Zion. You are the One!");
    } else if (matrixChoice === "fight agents") {
        console.log("You fight the Agents but you eventually escape.")
        } else {
            console.log("Invalid choice. Please choose 'hack' or 'fight agents'.");
          }
        } else if (pillChoice === "blue") {
          console.log("You took the blue pill and wake up in your bed. Believe whatever you want to believe");
        } else {
          console.log("Invalid choice. Please choose 'red' or 'blue'.");
        }
      
        const playAgain = askQuestion("Do you want to play again? (yes/no)").toLowerCase();
        if (playAgain === "yes") {
          playGame();
        } else {
          console.log("Thanks for playing!");
        }
      }
      
