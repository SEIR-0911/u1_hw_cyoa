let name = prompt(`What is thoust name young padawon`)

alert(`AHHH ${name} how nice it is to meet you!!! I hope you like adventures`)

let adventureDecesion = confirm(`shall we go on said adventure?? let our lives be that of folk lore unitl the end of time!!`)

if(adventureDecesion == false) {
    prompt(`game over`)
    //more code for a restart needed here.
} else {
    lRS = prompt(`HERE HERE my friend! Which path shall we choose?  LEFT to the bog, RIGHT to the enchanted forest , or maybe DEAD AHEAD through the cemetery. (Type Left or Right or Straight to continue)`)
}

if(lRS == "Left") {
    let fightOrRun = prompt(`Oh god the big bad bog monster!! I feared he would show!! Do we stand and fight? Or do we run!?!?!? type 1 for fight 2 for skidadle`)
    if(fightOrRun == 1){
        prompt(` You and your companion whom you never asked for his name have been devoured by the BBBM`)
        // restart?
    } else {
        let tOrB = prompt(` The two of you make like a tree and leaf. Once arriving in the nearest village you are presented with yet another grave decision to make. "To the tavern for a cold mead or to the bunk for sleep my friend?" Asks you companion(input T or B)`)
        if(tOrB == "T"){
            prompt(` you and your companion  drink until you black out and are robbed and murdered by a band of theives`)
            // restart?
        } else{
            let reachOrScream = prompt(`A good nights rest prepares you well for whats to come. In the wee hours of the morning a blue flame appears at your bedside do you let the fear consume you and scream or do you reach and take hold of destiny? (input Reach or Scream)`)
            if(reachOrScream == "Reach"){
                prompt(`You take up the blue flame assume your final form and rule the earth`)
                // restart?
            }else{
                prompt(`You scream and startle your companion he awakes with sword in hand and swings wildly in the dim light......your head hits the floor....Game over`)
            }
        }

    }

}