
// codeName collect
document.getElementById("codeNameForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // collect the codeName answer
    const codeName = document.getElementById("codeName").value;

        // greet the player
        document.getElementById("output").textContent = `${codeName}? That's what you came up with? Okay...`;
});

// keep getting "undefined" when trying to submit the code name in the input
// it took me awhile to figure out that the form ID and the input ID could not be the same; above is fixed.

// grab the text for the stories
const textElement = document.getElementById("text")
// grab the buttons
const optionButtonsElement = document.getElementById("option-buttons")

let state = {}

// start the game
function startGame() {
    state = {}
    showTextNode(1)
}

// change the text question?
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener("click", () => selectOption(option))
            optionButtonsElement.appendChild(button)

        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

// option selected - I had to watch a Web Dev Simplified video on YouTube to figure this part out.
function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}

const textNodes = [
    {
        id: 1,
        text: "You wake up on a bed in a brightly lit room, with all white shiny floors and walls. As you sit up, you see a Mr. Mime materialize out of thin air between you and three doors. Above the doors are signs that read, 'Willpower', 'Knowledge', and 'Emotion'. The Mr. Mime waits for your acknowledgement before you suddenly hear his voice inside your head, 'Each time you battle you rely on one of the three qualities shown above. Choose one and proceed. *POOF* He disappears. ",
        options: [
            {
                text: "Willpower",
                setState: { madeChoice: true },
                nextText: 2,
            },
            {
                text: "Knowledge",
                setState: { madeChoice: true },
                nextText: 2,
            },
            {
                text: "Emotion",
                setState: { madeChoice: true },
                nextText: 2,
            }
        ]
    },
    // after choosing the door, the player will be in the same room (madeChoice: true) with three icon pokemon items in the same 
    {
        id: 2,
        text: "You open the door to a pitch black room, and step through. As you close the door, a lamp flickers a moment before the whole room is illuminated by what looks like natural light. You're in your childhood bedroom. Oddly, you're drawn to three specific items, almost like they're under spotlights. You know you have to grab one.",
        options: [
            {   text: "Running Shoes",
                requiredState: (currentState) => currentState.madeChoice,
                setState: { madeChoice: false, runningShoes: true },
                nextText: 3,
            },
            {   text: "Old Fishing Rod",
                requiredState: (currentState) => currentState.madeChoice,
                setState: { madeChoice: false, oldFishingRod: true },
                nextText: 4,
            },
            {   text: "Bicycle",
                requiredState: (currentState) => currentState.madeChoice,
                setState: { madeChoice: false, bicycle: true},
                nextText: 5,
        }
        ]
    },
    // running shoes is 3, old fishing rod is 4, bicycle is 5
    {
        id: 3,
        text: "You received the RUNNING SHOES from the AIDE. You switched shoes with the RUNNING SHOES. Press the B button to run. But only where there is room to run! You open the next door in front of you and see an Onix (ROCK) and a Machop (FIGHTING) doing battle in your front yard. Whose side do you join?",
        options: [
            {   text: "Onix",
                requiredState: (currentState) => currentState.runningShoes,
                setState: { runningShoes: false, rockType: true },
                nextText: 6,
            },
            {   text: "Machop",
                requiredState: (currentState) => currentState.runningShoes,
                setState: { runningShoes: false, fightingType: true },
                nextText: 7,
        }
        ]
    },        
    // running shoes is 3, old fishing rod is 4, bicycle is 5
    {
        id: 4,
        text: "'Take this and fish, young friend!' You received an OLD ROD from the FISHING GURU! You put the OLD ROD in the KEY ITEMS POCKET. You open the front door of your bedroom, to reveal a lake surrounded by snow. Ripples shoot across the lake as a Dratini (DRAGON) and Shellder (ICE) do battle. Whose side do you join?",
        options: [
            {   text: "Dratini",
                requiredState: (currentState) => currentState.oldFishingRod,
                setState: { oldFishingRod: false, dragonType: true },
                nextText: 8,
            },
            {   text: "Shellder",
                requiredState: (currentState) => currentState.oldFishingRod,
                setState: { oldFishingRod: false, iceType: true },
                nextText: 9,
            }
        ]
    },
    // running shoes is 3, old fishing rod is 4, bicycle is 5
    {
        id: 5,
        text: "You exchanged the BIKE VOUCHER for a BICYCLE. You put the BICYCLE in the KEY ITEMS POCKET. 'The time has finally come, choose your starter: Bulbasaur (GRASS), Squirtle (WATER), or Charmander (FIRE).'",
        options: [
            {   text: "Bulbasaur",
                requiredState: (currentState) => currentState.bicycle,
                setState: { bicycle: false, grassType: true},
                nextText: 10,
            },
            {   text: "Squirtle",
                requiredState: (currentState) => currentState.bicycle,
                setState: { bicycle: false, waterType: true},
                nextText: 11,
            },
            {   text: "Charmander",
                requiredState: (currentState) => currentState.bicycle,
                setState: { bicycle: false, fireType: true},
                nextText: 12,
        }
        ]
    },
    // 6-12 are the final choices- 6: Onix/Rock 7: Machop/Fighting 8: Dratini/Dragon 9: Shelder/Ice 10: Bulbasaur/Grass 11: Squirtle/Water 12: Charmander/Fire
    {
        id: 6,
        text: "'You chose the Rock type!' You blacked out! You scurried to a Pokemon Center, protecting the exhausted and fainted Pokemon from further harm. 'Onix will be your new partner, and you will be the new Rock Gym Leader!'",
        options: [
            {   text: "Restart?",
                nextText: -1,
            },
        ]
    }, 
    {
        id: 7,
        text: "'You chose the Fighting type!' You blacked out! You scurried to a Pokemon Center, protecting the exhausted and fainted Pokemon from further harm. 'Machop will be your new partner, and you will be the new Fighting Gym Leader!'",
        options: [
            {   text: "Restart?",
                nextText: -1,
            },
        ]
    },
    {
        id: 8,
        text: "'You chose the Dragon type!' You blacked out! You scurried to a Pokemon Center, protecting the exhausted and fainted Pokemon from further harm.'Dratini will be your new partner, and you will be the new Dragon Gym Leader!'",
        options: [
            {   text: "Restart?",
                nextText: -1,
            },
        ]
    },
    {
        id: 9,
        text: "'You chose the Ice type!' You blacked out! You scurried to a Pokemon Center, protecting the exhausted and fainted Pokemon from further harm. 'Shellder will be your new partner, and you will be the new Ice Gym Leader!'",
        options: [
            {   text: "Restart?",
                nextText: -1,
            },
        ]
    },
    {
        id: 10,
        text: "'You chose the Grass type!' You blacked out! You scurried to a Pokemon Center, protecting the exhausted and fainted Pokemon from further harm. 'Bulbasaur will be your new partner, and you will be the new Grass Gym Leader!'",
        options: [
            {   text: "Restart?",
                nextText: -1,
            },
        ]
    },
    {
        id: 11,
        text: "'You chose the Water type!' You blacked out! You scurried to a Pokemon Center, protecting the exhausted and fainted Pokemon from further harm. 'Squirtle will be your new partner, and you will be the new Water Gym Leader!'",
        options: [
            {   text: "Restart?",
                nextText: -1,
            },
        ]
    },
    {
        id: 12,
        text: "'You chose the Fire type!' You blacked out! You scurried to a Pokemon Center, protecting the exhausted and fainted Pokemon from further harm. 'Charmander will be your new partner, and you will be the new Fire Gym Leader!'",
        options: [
            {   text: "Restart?",
                nextText: -1,
            },
        ]
    }
]
 
startGame()
