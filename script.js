//const prompt = require("prompt-sync")()

alert('Welcome to Dungeons and Dragons')
alert('You have the option of playing 3 different characters')



 function choice() {
    const characters = ["MAGE", "WARRIOR", "PRIEST"]
    alert("Your character options are: Mage, Warrior, Priest")
    let yourCharacter = prompt("Choose a character: ")
    let characterChoice = yourCharacter.toUpperCase(); {   
    function choice1() {
        
            if (characterChoice === characters[0]) {
                yourChar = characterChoice[0]
                alert(`You have chosen a ${characterChoice}, you have long range abilities!`)
            } else if (characterChoice === characters[1]) {
                yourChar = characterChoice[1]
                alert(`You have chosen a ${characterChoice}, you have melee abilities!`)
            } else if (characterChoice === characters[2]) {
                yourChar = characterChoice[2]
                alert(`You have chosen a ${characterChoice}, you can only heal!`)
            } else {
                alert("pleas enter a valid character")
                choice()
            }
        }
    choice1()

    alert(`You are at a crossroads with three signs pointing in opposite directions:`)
    alert(`1.Living Forest 2.Dry Desert   3.Your Certain Death, Do NOT take this path`)
    let pathChoice = prompt("Choose 1, 2, or 3: ")
    const pathChoices1 = ['Living Forest', 'Dry Desert', 'Your Certain Death']
    let chosenPath = null

    switch(pathChoice) {
        case '1':
            alert(`You begin your journey into the ${pathChoices1[0]}, you hear a lot of strange noises`)
            chosenPath = 1
            break;
        case '2':
            alert(`You begin your journey into the ${pathChoices1[1]}, you already regret not bringing water`)
            chosenPath = 2
            break;
        case '3':
            switch(characterChoice) {
            case 'PRIEST':
                alert(`You begin your journey into your certain death, godspeed. Nevermind, you take your first step and fall to the center of the earth and burn alive. :(`)
                alert(`BUT, since you are a priest you resurrect yourself as any new character.`)
                choice()
                break
            case 'MAGE':
                alert(`You begin your journey into your certain death, godspeed. Nevermind, you take your first step and fall to the center of the earth and burn alive. :(`)
                alert(`The End.`)
                break
            case 'WARRIOR':
                alert(`You begin your journey into your certain death, godspeed. Nevermind, you take your first step and fall to the center of the earth and burn alive. :(`)
                alert(`The End.`)
            }
    
    }
        if (parseInt(chosenPath) === 1) {
            
            let bushTreeRav = prompt("Do you want to go through the bushe, trees, or ravine? Select: bushes/trees/ravine: ")
            if (bushTreeRav === 'trees') {
                let cabinTreeCave = prompt("You have a choice of continueing through the trees, walking into a cabin, or exploring the cave: select: trees/cabin/cave: ")
                if (cabinTreeCave === 'trees' && characterChoice === 'MAGE') {
                    alert('Congratulations, as a mage you are able to use your abilites to clear a path through the trees and make it through safely to Narnia!')
                } else {
                    alert(`Sorry, as a ${yourCharacter} you were not able to make it through the ${cabinTreeCave} and died.`)
                }
            } else if (bushTreeRav === 'ravine') {
                if (characterChoice === 'WARRIOR') {
                    alert(`As a fierce ${characterChoice}, you are strong enough to swim across the Ravine and make it safetly to Valhalla!`)
                } else {
                    alert(`Unfortunately, as a ${characterChoice} you do not have the strength to swim across the ravine and you drown!`)
                }
            } else if (bushTreeRav === 'bushes') {
                alert('You walk into the bushes and knock into a swarm of angry bees')
                if (characterChoice === 'PRIEST') {
                    alert(`As a ${characterChoice} you are able to use a spell in order to calm the bees and make it safely through the bushes into your Church!`)
                } else {
                    alert(`As a ${yourCharacter} you are allergic to bees and perish in the bushes, swollen like a balloon`)
                } 
            }
        }  
        if (parseInt(chosenPath) === 2) {
            
            let helpDuneWater = prompt("You can ask a friendly looking traveler for help, travel towards the dunes, or towards a body of water. Select help/dune/water: ")
            if (helpDuneWater === 'help') {
                if (characterChoice === 'PRIEST') {
                    alert(`As a ${characterChoice} the traveler offers you the correct path to freedom if you can heal him with one of his favorite numbers`)
                    let pHeal = prompt('Choose a number from 1-10: ')
                        if (parseInt(pHeal) === 1 || 3 || 5 || 7 || 9) {
                            alert(`You have chosen ${pHeal} the traveler is so happy and magically opens a path towards your home sanctuary! Congratulations!`)
                        } else {
                            alert(`You have chosen ${pHeal} the traveler is displeased and magically teleports you into a lava pit. `)
                        }
                } else {
                    alert(`Unfortunately the travelers has a vendetta against ${yourCharacter}'s, you magically transforms into a Sandworm and eats you whole.`)
                }
            } else if (helpDuneWater === 'dune') {
                if (characterChoice === 'WARRIOR') {
                    alert(`As a mighty warrior, you are able to cross dunes with ease and find civilization within a few kilometers`)
                } else {
                    alert(`You are too weak as a ${characterChoice} to make it further than 500 feet before succumbing to deadly heat`)
                }
            } else if (helpDuneWater === 'water') {
                if (characterChoice === 'MAGE') {
                    alert(`As a clever ${characterChoice} you walk towards the water, only to realize it was a mirage. BUT you have just enough energy to potentially teleport you home`)
                    alert(`With such little energy, it's hard for you to remember if the spell starts with a 3 or a 7, and you only have one chance`)
                    let lastSpell = prompt(" 3   or   7: ")
                    if (parseInt(lastSpell === 3)) {
                        alert(`The spell works! you teleport yourself back to Toronto and live happily ever after`)
                    } else {
                        alert(`The Spell malfunctions and you die of thirst`)
                    }
                } else {
                    alert(`The water was a mirage, you collapse and are unable to get up again`)
                }
            }
        }
    }

}


choice()
 let playAgain = confirm("play again? ")
 if (playAgain === true) {
     choice()
}
