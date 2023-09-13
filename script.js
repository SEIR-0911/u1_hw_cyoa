// Function to start the adventure game
function startAdventure() {
    alert("Welcome to the Adventure Game!");

    let name = prompt("What's your name?");
    let destination = prompt(`Hi ${name}! Which realm would you like to enter? (forest, desert, ocean)`);

    switch (destination) {
        case 'forest':
            let animal = prompt("You've entered the forest. Which animal would you like as your guide? (wolf, bird)");
            if (animal === 'wolf') {
                let path = prompt("The wolf suggests two paths. Which one do you take? (left, right)");
                if (path === 'left') {
                    alert("You've found a hidden treasure!");
                } else {
                    alert("Oh no! You fell into a trap.");
                }
            } else {
                let fly = parseInt(prompt("The bird can fly you to a height (enter a number between 1 to 10)."));
                if (fly <= 5) {
                    alert("You've landed safely on a random tree.");
                } else {
                    alert("You've reached the bird's nest and found a Faberge egg.");
                }
            }
            break;

        case 'desert':
            let water = confirm("The desert is hot. Do you want to take a bottle of water?");
            if (water) {
                let camelRide = prompt("You can ride a camel. Which speed do you prefer? (slow, fast)");
                switch (camelRide) {
                    case 'slow':
                        alert("You've found an oasis!");
                        break;
                    case 'fast':
                        alert("You over exhausted your camel!");
                        break;
                    default:
                        alert("The camel got confused and you ended up back at the start.");
                }
            } else {
                alert("You got dehydrated and had to return.");
            }
            break;

        case 'ocean':
            let depth = parseInt(prompt("How deep would you like to dive? (enter a number between 1 to 100)"));
            if (depth <= 50) {
                alert("You've discovered a coral reef!");
            } else {
                let creature = prompt("You've reached a deep ocean cave. Which creature do you want to meet? (mermaid, dragon, ghost)");
                switch (creature) {
                    case 'mermaid':
                        alert("The mermaid introduced you to Sebastian");
                        break;
                    case 'dragon':
                        alert("The dragon gifted you a gold coin.");
                        break;
                    case 'ghost':
                        alert("The ghost killed you.");
                        break;
                    default:
                        alert("You got scared and swam back to the surface.");
                }
            }
            break;

        default:
            alert("That's not a valid realm.");
    }

    // Replay the game
    let replay = confirm("Would you like to play again?");
    if (replay) {
        startAdventure();
    } else {
        alert("Thanks for playing the Adventure Game!");
    }
}

// Start the game when the user opens the page
startAdventure();

