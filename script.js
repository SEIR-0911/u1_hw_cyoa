let playAgain=true
while (playAgain === true) {
    let locationDarkSouls = prompt("Welcome to Dark Souls! What location would you like to go to? [Undead Burg], [Blight Town], or [Depths]? (Only Enter values in the []")
    switch (locationDarkSouls) {
        case "Blight Town":
            let direction = prompt("You Enter Blight Town! What do you want to do? [Explore] the swamp, Run towards [Quelaag], or Look for [Secrets]")
            if (direction == "Explore") {
                let leftRight = prompt("OK, Are you going to go [Left] or [Right]?")
                if (leftRight == "Left") {
                    alert("You encounter 5 slugs gaurding a magical sword. You throw a fireball at them and take the sword and run! You Aquire the Moonlight Greatsword! ")
                } else if (leftRight == "Right"){
                    alert("You encounter a Giant that crushes you with his club! You're dead!")
                }
            } else if (direction == "Quelaag") {
                let attackType = prompt("You run towards Quelaag, You are now in a boss fight! Will you attack with your [Sword] or [Magic]")
                if (attackType == "Sword") {
                    alert("You are only able to cut off one of her spider legs, but the 2 of her remaining legs slice you in half! Youre dead!")
                } else if (attackType == "Magic") {
                    alert("You cast a Magic Spear at her and pierce her heart! You win! ")
                }
            } else if (direction == "Secrets") {
                let action = prompt("OK, Do you open the [Chest] or [Attack] that weird looking wall?")
                if (action == "Chest") {
                    alert("The Chest was a Mimic, It eats you! You are Dead")
                } else if (action == "Attack") {
                    alert("You find a secret wall! As it disappears you see a hollow Tree! What adventure awaits you!")
                }
            } else {
                alert("You don't do anything, so you die of poisoning")
            }
            break;
        case "Undead Burg":
            let enemy = prompt("You Enter the Undead Burg! What do you want to do? [Fight] the Undead or Run towards the [Dragon]")
            if (enemy == "Fight") {
                let attackTimes = prompt("OK, how many times should you attack")
                if (parseInt(attackTimes, 10) >= 5 ) {
                    alert(` You attack them  ${attackTimes} times. You beat them and get away!`)
                } else {
                    alert(` You attack them ${attackTimes} times. It doesn't do anything, you run away down some stairs, and they roll a burning barrel at you and it explodes! You Die! `)
                }
            } else if (enemy == "Dragon") {
                let dragonAction = prompt("You run up to the dragon! Do you want to say [Hello] or [Attack] the dragon")
                if (dragonAction == "Hello") {
                    alert("The Dragon is pleasantly surprised, and gives you a Dragon Sword!")
                } else if (dragonAction == "Attack") {
                    alert("The dragon Laughs, and blows fire at you and you are burnt to a crisp! You Die")
                }            
            }
            break;
        case "Depths":
            let depthsAction = prompt("You Enter the Depths! Do you want to [Fight] the skeletons or examine the [Bridge]")
            if (depthsAction == "Fight") {
                let attackType = prompt("OK, Do you attack with your [Club] or [Dagger]?")
                if (attackType == "Club") {
                    alert("The Club attack breaks all of their bones! YOu Win!")
                } else if (attackType == "Dagger") {
                    alert("The dagger goes in between their ribs and does nothing! They stab you to death! You Die!")
                }            
            } else if (depthsAction == "Bridge") {
                let bridgeOption = prompt("You run up to the bridge. Do you want to go [Across] or go [Around]?")
                if (bridgeOption == "Across") {
                    alert("OK, As you get half way across the bridge, you hear laughter and a switch Clunk. The whole bridge turns sideways and you slide off to your death! You Die!")
                } else if (bridgeOption == "Around") {
                    alert("You go around and encounter a menacing character by a switch! His name is Patches, and he says, \" haha, youre smarter than you look\" and gives you a map to get through the depths! You Survive!")
                }            
            }
            break;
        default:
            alert("That is not a location! You're Dead!")
    }
    playAgain=confirm("Would you like to play again? OK for Yes, Cancel for No")
}
