
// tried to figure out loop but couldn't :(
// let replay = ''

// while (replay != 'N') {



const promptSync = require('prompt-sync')
const prompt = promptSync()

console.log(`You wake up and you look around. Everything is bigger than usual.... You feel like you have a fur coat on.... But then you notice you have somehow transformed into a cat!`)

let userName = prompt(`Enter your name: `)
    console.log(`Hello ${userName}, welcome to the game!`)

// Asking the player what they would like to do, now that they know they are a cat!

console.log(`Once you realize you are a cat, you decide to do some cat things. 
Your options are to: Find 'hooman' for pets (P), look around for some food (F), or last but not least do something mischevious like all cats do.(M)`)

// Asking the player to make their first choice.
let pc1 = prompt(`Which do you choose? P/F/M: `)

//Path 1

if (pc1 === 'P') {
    console.log(`You get up from you slumber and do a biiiiig cat stretch. You hop off the bed and walk down the hall to see if there are any hoomans around. You see two hoomans: One is working away on their laptop (L), while the other is sitting on the couch with an open lap ready to take all the fluffy pets (C).`)

    let pc2 = prompt(`Which hooman do you decide to approach? L/C: `)

    if (pc2 === 'L') {
        console.log(`You jump onto the table where the hooman_1 is working. You can see two options to get their attention: Lay down right on their keyboard (K), Look them dead center in the eye and scream the loudest meow you possibly can for pets (S).`)

        let pc3 = prompt(`Which do you choose? K/S: `)

        switch(pc3) {
            case 'K':
                console.log(`Good choice. Hooman_1 is in a meeting so they brush you off their keyboard and decide to give a quick pet.`)
                break
            case 'S':
                console.log(`Bad choice. Hooman_1 is in a meeting and shoos you away!`)
                break
            default:
                console.log(`Error! You did not input a viable choice!!`)
        }
    } else if (pc2 === 'C') {
        console.log(`You walk over to hooman_2 and jump on their lap. You are greeted with kisses and pets, more than you could ever ask for!`)

        let pc4 = prompt(`How many minutes do you decide to stick around before darting off and doing cat things?: `)

        if (pc4 < 5) {
            console.log(`Bad choice. You dart off with a hiss and Hooman_2 is clearly upset with you. You've become a stereotypical cat!`)  
        } else if (pc4 >= 5) {
            console.log(`Good choice. You decide to fall asleep for a quick cat nap and are very cozy.`)
        } else {
            console.log(`Error! Please input an integer!`)
        }
    } else {
        console.log(`Error! You did not input a viable choice!!`)
    }
    
    // Path 2

} else if (pc1 === 'F') {
    console.log(`You decide to follow your nose and find the food your beautiful hooman has surely left for you. Let's hope it's fancy feast.... You get to the kitchen and realize it's Meow Mix. But maybe the hooman left hooman food out... Do you decide to eat the grotesque Meow-Mix (MM)? Or do you decide to look around for some hooman food (HF)?`)

    let pc5 = prompt(`Which option do you choose? MM/HF: `)

    if (pc5 === 'MM') {
        console.log(`You decide to eat this vulgar food and the dry hard kernels make you sick.`)

        let pc6 = prompt(`Do you cough a hairball up in spite? Y/N: `)

        switch(pc6) {
            case 'Y':
                console.log(`Bad choice. Hooman_2 walks over and steps in your puke.`)
                break
            case 'N':
                console.log(`Good choice. Hooman_2 walks over and noticed you ate all your food, and gives you a treat!`)
                break
            default:
                console.log(`Error! You did not input a viable choice!!`)
        }
    } else if (pc5 === 'HF') {
        console.log(`You walk around and notice some tuna salad sitting in a bowl that someone has prepared for lunch.`)

        let pc7 = prompt(`Do you decide to eat the tuna salad? Y/N: `)

        switch(pc7) {
            case 'Y':
                console.log(`Bad choice. Hooman_1 heres you chomping away and the rattling of the plate on the counter, they quickly run over and give you a swipe to save their lunch.`)
                break
            case 'N':
                console.log(`Good choice. Hooman_2 sees that you were curious about the tuna but hesistated. They are proud you had the wherewithall to hold back, and they decide to get the fancy feast out for you!`)
                break
            default:
                console.log(`Error! You did not input a viable choice!!`)
        }
    } else {
        console.log(`Error! You did not input a viable choice!!`)
    }

    // Path 3

} else if (pc1 === 'M') {
    console.log(`You jump off the bed with a spring in your step... you know you are ready to throw down. You walk into hooman's office and notice a full glass of ice cold water next to a laptop. Do you decide to hop on that table and knock it over (KO)... or do you decide to say 'hey, maybe I shouldn't be knocking over water onto their livelihood and find something else less mischevious to get into (LM).`)

    let pc8 = prompt(`Which option do you choose? KO/LM: `)

    if (pc8 === 'KO') {
        console.log(`You hop on the table and look at the juicy glass of water. You think about sipping it, but after smelling the odorless H2O- you decide the hell with it... Do you decide to swipe it off the table (ST), or do you decide to swipe it directly onto their laptop (SL) and swipe that water right onto their laptop.`)

        let pc9 = prompt(`Which option do you choose? ST/SL: `)

        switch(pc9) {
            case 'ST':
                console.log(`Better choice? Hooman_1 hears the noise, but you are able to run under the bed before they can see who the culprit was and no electronics were caught in the crossfire!`)
                break
            case 'SL':
                console.log(`VERY bad choice! Hooman_1 runs over and SCREAMS 'WTF' and you bolt for the quickest thing you can hide under with the knowledge that you done f****d up.`)
                break
            default:
                console.log(`Error! You did not input a viable choice!!`)
        }
    } else if (pc8 === 'LM') {
        console.log(`You see hooman_2 sitting on the couch knitting. You see two opportunities here: Go over and nip at the yarn (Y) or run over and jump on the hoomans head while they are focused knitting (J).`)

        let pc10 = prompt(`Which do you choose? Y/J: `)

        switch(pc10) {
            case 'Y':
                console.log(`Good choice. Hooman_2 thinks you are super cute and decides to give you pets. Who woulda thought mischeif would pay off this well. They always say, crime pays.`)
                break
            case 'J':
                console.log(`Bad choice. Hooman_2 is extremely focused and all their muscles in their head are relaxed, you jump on their head and they instantly freak out and accidentally send you flying. "Fly ${userName} fly!"`)
                break
            default:
                console.log(`Error! You did not input a viable choice!!`)
        }
    } else {
        console.log(`Error! You did not input a viable choice!!`)
    }
} else {
    console.log(`Error! You did not input a viable choice!!`)
}

// let replay = prompt(`Would you like to replay: Y/N? `)

// }
