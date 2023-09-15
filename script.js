function startAdventure() {
    const yourName = prompt("Welcome you poor unfortunate soul. It is time for you to make some choices. Before we get going - what is your name?")

alert(`Thank you, ${yourName}, you may forget from the lack of food, but up until now you have been put into the most unfortunate circumstance. You have been captured by a serial killer for the past few weeks.`) 

let opportunity = prompt("You find yourself with an opportunity, with a chance to escape after cutting yourself free from the rope that bound you to the chair you have been being held in. With the opportunity finally presenting itself, what do you choose to do? sit still and wait, call out into the next room or get up from the chair?")

if (opportunity === "sit still and wait") {
    alert("You sit still. It has been a while since the killer has been around, and it may be better to wait it out a bit to see if he shows up soon.")
    //Move to the next challenge

} if (opportunity === "call out into the next room") {
    alert("You call out to the room. Your voice is quiet and weak and you do not know if many could even hear you while you try.")
    //Move to the next challenge

} if (opportunity === "get up from the chair") {
    alert(" You get up from the chair. You look around the room for a second and find a journal in the corner of the room - the same journal you noticed the killer writing in before.")
    //Move to the next challenge

}

let choice = prompt("How long do you wait before you try to leave, right away, wait a few minutes, or wait a while?")

 if (choice === "right away") {
    alert("You get up from the chair. You look around the room for a second and find a journal in the corner of the room - the same journal you noticed the killer writing in before.")
    let choice_2 = prompt("You see the door to leave, do you take the journal with you before you leave the room? take it or leave it?") 

    if (choice_2 === "take it") {
        alert("You leave the room taking the book and go immediately to the left down the hall and around the corner.") 
        
        let choice_3 = prompt("You can hear a noise of a door slam close by, what do you do? run, hide or stay still?")

        if (choice_3 === "run") {
            alert("You panic and run back down the hall from where you came. You hear footsteps start coming up from behind you. YOU SURVIVE BUT YOU ARE HORRIBLY DISFIGURED.  You continued running but were not able to out-pace the killer. You freed yourself eventually and managed to jump out of a window fleeing. With the journal you brought to the police details of the killer and his past victims.")
            
        
        } if (choice_3 === "hide") {
            alert("You see lockers to the side of you and jump inside. You hold your breath as the footsteps get closer and quickly pass you by.")
            
            let choice_4 = prompt("Do you stay in the locker? yes or no?")

            if (choice_4 === "yes") {
                alert("You stay still and hope for the best. Sadly this was not the best choice. You are found by the killer... YOU DIED...")
            } if (choice_4 === "no") {
                alert("You hear the footsteps make the corner back around from where you came and wait to hear the door to the room you were in close. YOU SURVIVE AND CONVICT THE KILLER! When all was clear you ran. You followed the hall to the door where the killer came in from. With the journal in hand you brought it to the police and with that, details of the killer and his past victims.")
            }
        
        } if (choice_3 === "stay still"){
            alert("You stay still and hope for the best. Sadly this was not the best choice... YOU DIED...")
            // option to restart
        }
    }  
    if (choice_2 === "leave it") {
        alert("You leave the room leaving the book behind and go immediately to the right down the hall and around the corner.") 
        // should go to "let choice_5"
        let choice_5 = prompt("You hear the sound of a door slam from far away. Do you run, hide or stay still?")
        
        if (choice_5 === "run") {
            alert("You run further down the hall. In your haste you accidentally trip over a mop bucket and make a noise that echos the hallway. The killer finds you... YOU DIED...")
            // option to restart
        
        } if (choice_5 === "hide") {
            alert("You quickly make your way over to a door that leads to another room - open like the previous one you were captured in. That room you found had a window close to the ground and was already partially open. YOU SURVIVE... FOR NOW... Outside of the building you breath fresh air again. As you take in that breath, out of nowhere a 1 TON BAG OF BUTTERFLIES falls on you and crushes you instantly... YOU DIED...")
            // option to restart
        
        } if (choice_5 === "stay still") {
            alert("You stay still being extra quiet. You tiptoe down the hall and find a door at the end of it. YOU SURVIVE. You are out of it but are in desperate need of therapy. Other victims continue to be plagued by the mystery killer.")
            // option to restart
        }
    }
} if (choice === "wait a few minutes") {
    alert("You wait too long and the killer walks into the room. He walks over to you and sees rope frayed on the floor... YOU DIED...")
    // option to restart
    
} if (choice === "wait a while") {
    alert("You wait too long and the killer walks into the room. He walks over to you and sees rope frayed on the floor... YOU DIED...")
    // option to restart
    
}



const replay = confirm("Thank you for playing! Do you want to try again?")
if (replay) {
    startAdventure()
} else {
    alert("GAME OVER")
}
}

 startAdventure()











