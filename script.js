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


if(lRS == "Right") {
    let fightOrRun = prompt(`AHH the enchanted forest a good choice when the sun is high in the sky!! BUT.....after the sun disapears...... "I see a heard of horses and some donkeys which shall we ride??" type 1 for donkey 2 for horses`)
    if(fightOrRun == 1){
        prompt(` The Donkeys a stubborn animal you spend all day riding to only get half way through the forest and have to make camp over night unofortunately you are bit by a snake and die`)
        // restart?
    } else {
        let tOrB = prompt(` The horses move like the wind! You make it through the forest and encounter an old witch who ask for payment to pass. "Do you pay or slay the witch?" Asks you companion(input P for pay or S slay)`)
        if(tOrB == "S"){
            prompt(` you take up your sword and releave the witch of her head......However there is a curse you activated upon the last beat of the witches heart. The sun instantly dissapears and the trees roots pull you beneath the earth to your worm infested grave.`)
            // restart?
        } else{
            let reachOrScream = prompt(`you and your companion pass the witch making good time. you arrive in the land of middle earth and meet the king, he ask you to bow and pay respect what shall you do? (input Bow or Scoff)`)
            if(reachOrScream == "Bow"){
                prompt(`You become great friends with the king, his first born passes due to an unkown sickness and he proclaims you shall be his succesor! You now rule middle earth`)
                // restart?
            }else{
                prompt(`You scoff at the king and his gaurds throw you in a cell, you slowly wither away with no foor and only a cup of water a day.....better luck  next time`)
            }
        }

    }

}


if (lRS == "Straight"){
    let choose = prompt(`I shant say taking the path through the cemetary is smart but it is brave!!! "There is gold sitting on that grave over there should we take it" (input Yes to take or No to continue)`)
  switch(choose) {
  case 'Yes':
    prompt('You reach to take the gold as your hand hits the gold you turn to stone and forever be as a solemn reminder to all passersby.')
    //restart?
    break;
  case 'No':
    let touchOrNo = prompt('"A wise descision my friend!" you continue down the path and arrive at a mirror and it looks like there is a fluid, you want to touch it.....(input T for touch and N for Nope!) ')
    if(touchOrNo == `T`){
        prompt(`you dies`)
    } else {
        let bOrb = prompt(`Great choice you side step the deadly mirror and continue down the path. You encounter a dragon he ask you a riddle "what is blue and smells like red paint?"`)
        if (bOrb == "blue paint") {
            prompt(` Congrats you shall take all my gold and your childrens childrens children shall be rich beyond measure.`)
        } else {
            prompt(`"Wrong answer" The Dragon gobbles you down in one bite`)
        }

    }
    }  
    }

    let restart = confirm(`Would you like to play again? if so refresh the web page!!`)
   

   

