let replay=true
while (replay===true){

    let playerName=prompt(`Enter your name:`)

    let destination=prompt(`Welcome, ${playerName}.  You have been chosen as the new She-Ra.  Would you like to go to "Crimson Waste", "Bright Moon", or "Fright Zone"?`)

    if (destination=="Crimson Waste") {
        let foe=prompt(`You have arrived in the Crimson Waste.  Will you take on "Tung Lashor" or "Huntara"?`)
        if (foe=="Tung Lashor"){
            let cWWeapon=prompt(`You face off with Tung Lashor and his gang.  What's your weapon- "whip" or "words"?`)
                if (cWWeapon=="whip"){
                    alert("Nice move.  You've managed to wrestle his whip away and defeat the gang.")
                } else if (cWWeapon="words"){
                    alert("You live to face another day but not before receiving a verbal beatdown.")
                } else {
                    alert("Invalid entry.")
                }
        } else if (foe=="Huntara"){
            let acceptNewRebel=confirm(`Huntara is treacherous & tough.  Your teammates propose convincing her to join the rebellion.  How do you respond to this request? Click "OK" to ask her to join or "Cancel" to leave her in the Waste.`)
            if (acceptNewRebel==true){
                alert("Good call.  Better to join forces than be on her bad side.")
            } else {
                alert("Bummer.  She would have been a strong ally.")
            }
        }

    } else if (destination=="Bright Moon"){
        let princessName=prompt("The best friends squad are discussing the princesses of Etheria.  What would you like your princess name to be?")
        alert(`All hail Princess ${princessName}!`)

    } else if (destination=="Fright Zone"){
        let fZWeapon=prompt(`Bound to run into trouble here.  Choose a weapon- "sword", "staff", or "heart"?`)
            switch(fZWeapon){
                case "sword":
                    alert("The Sword of Protection sounds like it would be useful, but it's a wasted opportunity as you don't really need it to activate your power.")
                    break
                case "staff":
                    alert("King Micah's Staff is powerful, but you don't know how to wield it.  Better find a place to hide!")
                    break
                case "heart":
                    let ultimateChoice=prompt(`You chose the Heart of Etheria.  Moment of truth- Do you allow it to fall into Horde Prime's evil clutches or would you rather destroy the precious heart? Answer "GIVE" or "DESTROY".`)
                        if (ultimateChoice=="GIVE"){
                            alert("Oops.  Bad move.  Prime unleashes its power and controls the universe.")
                        } else if(ultimateChoice=="DESTROY"){
                            alert("In destroying the heart you were able to absorb its power & defeat the Horde.  Congratulations!")
                        }
                    break
                default:
                    alert("Invalid entry.")
        }

    } else {
        alert("Invalid Entry.")
    }
    replay=confirm("Play again?")
}
