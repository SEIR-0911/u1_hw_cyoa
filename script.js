// Welcome message
alert("Welcome to the Mysterious Jungle Adventure!");

// Ask for the player's name
let playerName = prompt("What's your name, brave explorer?");

// Introduction
alert(`Hello, ${playerName}! You find yourself deep in a dense jungle. Your mission is to uncover its mysteries.`);

// Start of the adventure
let choice1 = prompt("You come across a fork in the path. Do you go left or right? (L/R)");

switch (choice1.toLowerCase()) {
  case "l":
    // Left path
    let choice2 = prompt("You stumble upon an ancient temple. Do you enter the temple or continue on the path? (E/C)");

    if (choice2.toLowerCase() === "e") {
      // Enter the temple
      alert("Inside the temple, you find a hidden treasure chest and become famous for your discovery!");
    } else {
      // Continue on the path
      let choice3 = prompt("You encounter a river with a rickety bridge. Do you cross it or find another way? (C/F)");

      if (choice3.toLowerCase() === "c") {
        // Cross the bridge
        alert("You successfully cross the bridge and continue your adventure.");
      } else {
        // Find another way
        alert("You find a safe path around the river and continue your journey.");
      }
    }
    break;

  case "r":
    // Right path
    let choice4 = prompt("You hear strange noises in the distance. Do you investigate the noises or avoid them? (I/A)");

    if (choice4.toLowerCase() === "i") {
      // Investigate the noises
      alert("You discover a hidden village and make friends with the indigenous people.");
    } else {
      // Avoid the noises
      alert("You bypass the noises and continue deeper into the jungle.");
    }
    break;

  default:
    alert("Invalid choice. Your adventure ends here.");
}

// Ask if the player wants to replay
let replay = confirm("Would you like to replay the adventure?");

if (replay) {
  // Reload the page to start over
  location.reload();
} else {
  alert("Thank you for playing the Mysterious Jungle Adventure. Goodbye!");
}
