function startGuide() {
  // Prompt user for their name
  const userName = prompt("Welcome to the Simple Eggcellent Egg Cooking Guide!\nPlease enter your Name here:");
  alert(`Welcome, ${userName}! Depending on how you want your eggs cooked, I will provide you with step-by-step instructions.`);

  // Prompt user for egg cooking preference (boiled or pan cooked)
  const eggPreference = prompt("Now, how do you like your eggs? Please type 'bc' for boiled or 'pc' for pan cooked (without quotations):");

  switch (eggPreference) { //Practicing Switch Statements
    case "bc":
      // Prompt user for boiled egg preference (hard, medium, or soft)
      const boiledEggPreference = prompt(`Great ${userName}! How do you like them boiled? Please type 'h' for hard, 'm' for medium, or 's' for soft (without quotations):`);

      switch (boiledEggPreference) {
        case "h":
          alert("Directions for hard boiled: (Step 1) Place eggs in a saucepan, cover with water. (Step 2) Boil for 9-12 minutes. (Step 3) Transfer to ice water, peel when cool.");//Quick google search
          break;
        case "m":
          // Prompt user for medium boiled preference (regular medium or soft medium)
          const mediumBoiledPreference = prompt("Great! How medium do you like them boiled? Please type 'rm' for regular medium or 'sm' for soft medium (without quotations):");

          switch (mediumBoiledPreference) {
            case "rm":
              alert("Directions directions for regular medium boiled eggs : (Step 1) Place eggs in a saucepan, cover with water. (Step 2) Boil for 7-9 minutes. (Step 3) Transfer to ice water, peel when cool.");//Quick google search
              break;
            case "sm":
              alert("Directions for soft medium boiled eggs: (Step 1) Place eggs in a saucepan, cover with water. (Step 2) Boil for 5-8 minutes for a slightly firm but still soft yolk. (Step 3) Transfer to ice water, peel when cool.");//My 2nd fav way of eating!
              break;
            default:
              alert("Invalid entry. Please re-run the guide.");
          }
          askToRestart();
          break;
        case "s":
          alert("Directions soft boiled eggs: (Step 1) Place eggs in a saucepan, cover with water. (Step 2) Boil for 4-7 minutes for a runny yolk. (Step 3) Serve immediately in an egg cup.");//Quick google search
          askToRestart();
          break;
        default:
          alert("Invalid entry. Please re-run the guide or refresh webpage.");
          askToRestart();
      }
      break;
    case "pc":
      // Prompt user for pan-cooked egg preference (scrambled, sunny-side-up, over-easy, or fried)
      const panCookedPreference = prompt(`Great ${userName}! How do you like them pan-cooked? Please type 'scrambled', 'sunnysideup', 'overeasy', or 'fried' (all lowercase with no spaces, without quotations):`);

      switch (panCookedPreference) { //Practicing Switch Statements
        case "scrambled":
          alert("Directions scrambled eggs : (Step 1) Crack the desired number of eggs into a bowl and, if desired, season them with a pinch of salt and pepper. Whisk the eggs until the yolks and whites are well combined. (Step 2) Heat a non-stick skillet over medium-low heat and, if you prefer, add a small amount of butter or oil to the skillet for extra flavor and to prevent sticking. (Step 3) Pour the whisked eggs into the skillet. Let them cook undisturbed for a few seconds until the edges start to set. (Step 4) Gently stir and fold the eggs using a spatula, pushing them from the edges toward the center. Continue to cook, stirring occasionally, until the eggs reach your desired level of doneness (usually about a minute or so). (Step 5) Remove the skillet from heat immediately to avoid overcooking. Serve your fluffy scrambled eggs.");//Quick google search
          break;
        case "sunnysideup":
          alert("Directions sunny side up overeasy: (Step 1) Heat a non-stick skillet over low to medium-low heat. You want to maintain gentle heat to cook the eggs evenly without browning. (Step 2) If you prefer, add a small amount of butter or oil to the skillet for added flavor. (Step 3) Crack the eggs into the skillet one at a time, making sure not to break the yolks. Season the eggs with a pinch of salt and pepper if you like. (Step 4) Allow the eggs to cook uncovered until the whites are set but the yolks remain beautifully runny. This usually takes about 2-3 minutes. (Step 5) Carefully use a spatula to lift and transfer the sunny-side-up eggs to a plate, keeping the yolks intact.");//my fav way of eatting!
          break;
        case "overeasy":
          alert("Directions for over easy eggs: (Step 1) Heat a non-stick skillet over low to medium-low heat and add a small amount of butter or oil if desired. (Step 2) Crack the eggs into the skillet, being careful not to break the yolks. Season with a pinch of salt and pepper if you prefer. (Step 3) Allow the eggs to cook uncovered until the whites are set but the yolks remain runny, which usually takes about 2 minutes. (Step 4) Gently slide a spatula under each egg and flip it over. Be cautious not to break the yolks. (Step 5) Cook the flipped eggs for an additional 20-30 seconds to set the whites on the other side. (Step 6) Transfer the over-easy eggs to a plate and enjoy.");//Quick google search
          break;
        case "fried":
          alert("Directions for fried eggs: (Step 1) Heat a non-stick skillet over low to medium-low heat and add a small amount of butter or oil if desired. (Step 2) Crack the eggs into the skillet, taking care not to break the yolks. Season the eggs with a pinch of salt and pepper if you like. (Step 3) Allow the eggs to cook uncovered until both the whites and yolks are fully set, typically taking about 3-4 minutes. (Step 4) Carefully use a spatula to lift and transfer the fried eggs to a plate. Serve your delicious fried eggs as desired.");//Quick google search
          break;
        default:
          alert("Invalid entry. Please re-run the guide.");
          askToRestart();
      }
      askToRestart();
      break;
    default:
      alert("Invalid entry. Please re-run the guide.");
      askToRestart();
  }
}

function askToRestart() {
  const response = prompt("Do you want to restart the guide? (yes/no):").toLowerCase();

  if (response === 'yes') {
    askToRateGuide();
    startGuide(); // Restart the guide if the user wants to
  } else {
    alert("No Problem! I hope you learned something today! Please refresh the page to run again.");
    askToRateGuide();
  }
}

function askToRateGuide() {
  const response = prompt("Do you want to rate this guide from 1 to 5? (1 = Worst, 5 = Best, 0 = Not Rated):");
  const rating = parseInt(response);

  if (isNaN(rating) || rating < 0 || rating > 5) { //isNaN is not a number
    alert("Invalid rating. Please enter a number between 1 and 5.");
    askToRateGuide(); // Ask again for a valid rating
  } else {
    if (rating === 0) {
      alert("I hope you learned something! Goodbye.");
    } else {
      guideRating = rating; // Update guide rating
      alert(`Thank you for rating the guide with ${rating} stars!`);
    }
  }
}

// Start the guide initially
startGuide();//Understand DOM can connect this to a button and display the text on screen. 



//https://javascript.info/switch
//ex1
// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     ...//condition goes here
//     [break]

//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]

//   default:
//     ...
//     [break]
// }

//ex2
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too big' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }


// //ex1
// // prompts user and stores value in the variable
// let valueOfPrompt = prompt()
// // logs value stored
// console.log(valueOfPrompt)

// //ex2
// let age = prompt('How old are you?')
// // ES6 String Interpolation
// alert(`You are ${age} years old.`)
// // ES5 Version
// alert('You are ' + age + ' years old.')