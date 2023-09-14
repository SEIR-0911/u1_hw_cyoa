/**
 * Requirements
 * Any path the user goes down must ask them at least three questions.
 * There must be a minimum of seven total destinations the user could arrive at based on their responses.
 * For at least one of the questions asked, there must be more than two possible user responses.
 * Your adventure must offer the user an option to replay at the end.
 * Your code must contain at least one switch statement.
 * Your code must make use of both string and number user inputs.
 */

let player = prompt("Hey Stranger! What's your name?");
if (player != null) {
    alert(` Welcome ${player} to
    --------------------------------------
    ADVENTURES IN WONDERLAND
    --------------------------------------`);
}
let gameOn = true;
while (gameOn === true) {

    let enterance = prompt(`You find yourself in a peculiar garden, much like Alice did when she fell down the rabbit hole.\nThe surroundings are strange, and you're not quite sure how you got here. What would you do?

    1. "Follow" the White Rabbit(enter follow).
    2. "Eat" the "Eat Me" cake(enter eat).
    3. "Speak" with the Cheshire Cat(enter speak).`);
    console.log(`You picked ${enterance}`)
    switch (enterance) {

        case '1':
        case 'follow':
        case 'Follow'://"Follow" the White Rabbit(enter follow).
            let followWhatIsNext = prompt(`You decide to chase after the White Rabbit, who hurries away muttering about being late.\nYou find yourself tumbling down a rabbit hole, just like Alice. What would you do? (choose 1 or 2)

            1. Continue your descent.
            2. Try to climb back up.
            3. Call out to the White Rabbit.
            `);
            console.log(`You picked ${followWhatIsNext}`);

            if (followWhatIsNext == 1) {
                alert(`Chasing the White Rabbit, you stumble into a joyful tea party with the Mad Hatter. After sharing tea and laughter, the White Rabbit leads you back home, leaving you with wonderful memories.`);
            } else if (followWhatIsNext == 2) {
                alert(`You end up in the Queen of Hearts' court, where you become a beloved guest. The Queen throws a grand party in your honor. She lets you go, and you leave Wonderland with cherished memories.
                `);
            } else if (followWhatIsNext == 3) {
                let askWhiskers = prompt(`The White Rabbit introduces itself as Mr. Whiskers and explains that he's late for a very important meeting with the Wonderland Council. However, he's willing to take a moment to assist you.

                1. Ask Mr. Whiskers for directions or help.
                2. Let him go on his way and continue falling.
                `);
                if (askWhiskers == 1) {
                    alert(`You follow Mr. Whiskers through the whimsical world of Wonderland, encountering strange characters and delightful adventures. Eventually, Mr. Whiskers fulfills his commitment to the Wonderland Council and leads you safely back home.
                    `);
                } else if (askWhiskers == 2) {
                    alert(`You decide to let Mr. Whiskers go on his way to his important meeting. As you continue falling, your journey through Wonderland unfolds in mysterious and unexpected ways, leading you to new and exciting adventures.\n\nIn the end, you discover a hidden portal that takes you back to your own world, leaving you with a sense of wonder and the memories of your extraordinary adventure.`)
                } else {
                    alert(`Game over ${player}! you can't do this!\nBut you can start over!`);
                }

            } else {
                alert(`Game over ${player}! you can't do this!\nBut you can start over!`);
            }

            break;//END - "Follow" the White Rabbit(enter follow).

        case '2':
        case 'eat':
        case 'Eat'://"Eat" the "Eat Me" cake(enter eat).
            let eatMeWhatIsNext = prompt(`You nibble on a mysterious cake labeled "Eat Me."\nSuddenly, you start growing taller and taller until you're nearly scraping the treetops!What would you do? (choose 1 or 2)

            1. Try to reach the key on the tree branch.
            2. Look for something to make you smaller.
            `);
            console.log(`You picked ${eatMeWhatIsNext}`)


            switch (eatMeWhatIsNext) {//Try to reach the key on the tree branch.

                case '1':
                    let reachWhatIsNext = prompt(`You extend your elongated arms and stretch toward a nearby tree branch where a shiny key hangs. After several attempts, you manage to grab the key.What would you do?(choose 1 or 2)

                    1. Use the key to unlock a nearby door.
                    2. Continue exploring while still giant-sized.
                    `);
                    if (reachWhatIsNext == 1) {//Use the key to unlock a nearby door.
                        alert(`You use the key to unlock a nearby door, and to your amazement, it leads to a beautiful garden filled with friendly talking animals. They invite you to join their tea party.\n\nYou spend a delightful afternoon sipping tea and conversing with the residents of this garden. When the party concludes, a kind rabbit guides you to a path that leads you back to your normal size.
                        `)
                    } else if (reachWhatIsNext == 2) {//Continue exploring while still giant-sized
                        alert(`You continue to roam Wonderland as a giant, making friends with talking animals and enjoying the beauty of this fantastical world. Your giant presence brings laughter and excitement to all you meet.`);
                    } else {
                        alert(`Game over ${player}! you can't do this!\nBut you can start over!`);
                    }
                    break;
                case '2'://Look for something to make you smaller.

                    alert(`${player}! As you explore further, you come across a magical fountain with shimmering water. Curious, you take a sip from it, and instantly, you return to your normal size. You feel a sense of fulfillment from your giant adventure.\n\nWith a smile on your face, you bid farewell to your Wonderland friends, knowing that you've had a truly unique experience. You find your way back home, cherishing the memories of your extraordinary adventure.
                    `);
                    break;
                default:
                    alert(`Game over ${player}! you can't do this!\nBut you can start over!`);
            }
            break;

        case '3':
        case 'speak':
        case 'Speak'://"Speak" with the Cheshire Cat(enter speak).`);
            let speakWhatNext = prompt(`A mysterious grin appears in the air, and you realize it belongs to the Cheshire Cat.It asks if you'd like some guidance.What would you do? (choose 1 or 2)

            1. Ask the Cheshire Cat for advice.
            2. Ignore the cat and continue exploring.
        `);
            if (speakWhatNext == 1) { //Ask the Cheshire Cat for advice.
                alert(`The Cheshire Cat imparts wisdom and guidance, helping you find your way through Wonderland.With the Cheshire Cat's help, you navigate the challenges and puzzles of this unique land with ease. Eventually, you find a way to return to your normal size and emerge from Wonderland.\n\nCongratulations ${player} !You've successfully completed your adventure.`)
            } else if (speakWhatNext == 2) {//Ignore the cat and continue exploring.
                alert(`${player}! You decide to ignore the Cheshire Cat's offer of guidance and continue on your own path through Wonderland. As you explore further, the world around you becomes increasingly surreal and unpredictable.\n\nAs you stand in this surreal, shifting landscape, you wonder if you've become a part of Wonderland or if Wonderland has become a part of you. The mysteries of this enigmatic world continue to unravel, leaving you in a state of perpetual wonder and uncertainty.`)
            } else {
                alert(`Game over ${player}! you can't do this!\nBut you can start over!`);
            }
            break;
        default:
            alert(`Game over ${player}! you can't do this!\nBut you can start over!`);

    }

    //Ask user if you want to replay
    let continuePlay = prompt("Do you want to try again?\n'Yes' to continue\n'No' to exit");
    if (continuePlay.toLowerCase() === 'yes' || continuePlay === 'y') {
        continue;
    } else {
        gameOn = false;
    }
}
alert("Good Bye!");