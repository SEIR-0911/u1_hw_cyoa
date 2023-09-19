let house = prompt('It is a cold winter night, and you are on a street with just two houses. House 1 is a red house, and house 2 is blue. You may enter one. Which do you enter?')

if (house == 1 || 'red'){
    let leave = prompt('Uh oh! It looks like a fire has started in the kitchen! Its moving quickly toward you. Maybe now is a good time to turn around and run out! Do you wish to leave?')
} else if (house == 2 || 'blue'){
    prompt('On the table inside, there are three pieces of paper. Which do you pick up? Top, Middle, or Bottom?')
}else {
    prompt('that option is invalid, please choose again.')
}
if (house == 1 || 'red' && leave == 'yes'){
    let enterBlue = prompt('Good thinking! Now might be a good time to enter the blue house. Would you like to?')
}else {
    prompt('You have been saved from the fire and brought to the blue house next door. You awake to find three pieces of paper on the table. Which do you pick up? Top, middle or bottom?')
}
switch (enterBlue) {
    case 'yes':
      let paper = prompt('Great! On the table inside, you see three pieces of paper. Which do you pick up? Top, Middle, or Bottom?');
      break;
    default:
      prompt('Unfortunately, you became hypothermic from being in the cold for so long. Luckily, a kind stranger saved you and brought you into the blue house next door. When you awake, you find three pieces of paper on the table inside.');
      break;
  }

if (paper == 'top'){
    let pickUpAnother = prompt('Hmm, seems like you\'ve picked up a prescription label, and it looks like someone has been crying over it. There are smudges everywhere. Put it down and pick up another?')
}else if( paper = 'middle'){
    prompt('Hmm, seems like you\'ve picked up a news article, and it looks like someone has been crying over it. There are smudges everywhere. Put it down and pick up another?')
}else if( paper = 'bottom'){
    prompt('Hmm, seems like you\'ve picked up a fairy tale, and it looks like someone has been crying over it. There are smudges everywhere, but we can try to decipher this. Put it down and pick up another?')
}else {
    prompt('That is not a valid option. Please input: top, middle, or bottom')
}

if (paper =='top' && pickUpAnother == 'yes'){
    prompt('Which one would you like to pick up? Middle, or bottom?')
}else{
    prompt('Great! Well, let\'s fill in the blanks so we can read this thing! It looks important! There are 7 words that we can\'t read, but judging by the rest of the sentence we can determine if they are nouns, verbs, adjectives, or adverbs. Then we just fill in our own to complete it!')
}

if (paper =='middle' && pickUpAnother == 'yes'){
    prompt('Which one would you like to pick up? Top, or bottom?')
}else{
    prompt('Great! Well, let\'s fill in the blanks so we can read this thing! It looks important! There are 7 words that we can\'t read, but judging by the rest of the sentence we can determine if they are nouns, verbs, adjectives, or adverbs. Then we just fill in our own to complete it!')
}

if (paper =='bottom' && pickUpAnother == 'yes'){
    prompt('Which one would you like to pick up? Middle, or bottom?')
}else{
    prompt('Great! Well, let\'s fill in the blanks so we can read this thing! It looks important! There are 7 words that we can\'t read, but judging by the rest of the sentence we can determine if they are nouns, verbs, adjectives, or adverbs. Then we just fill in our own to complete it!')
}

let adjective1 = prompt("Enter an adjective")
let noun1 = prompt("Enter a noun")
let noun2 = prompt("Enter a noun")
let noun3 = prompt("Enter a noun")
let noun4 = prompt("Enter a noun")
let verb1 = prompt("Enter a verb")
let verb2 = prompt("Enter a verb")


let prescription = 'This medication may cause $(adjective1) side effects, including: Possible $(noun1). Tell your health care provider if you get a $(noun1)or $(noun2)in your neck. These may be symptoms of $(noun3). In studies with rodents, this medication caused $(verb1). It is not known if this medication will cause $(verb1) $(noun4)this medication before $(verb2) with your doctor is not advised.'


let newArticle ='In a surprising turn of events, a $(noun2)was discovered in the heart of $(noun4). The $(noun2) weighing approximately $(noun3) pounds, left the local community in awe. Witnesses reported that the $(noun1) $(verb1) through the streets, causing quite a commotion. Authorities quickly arrived at the scene to $(verb2) the situation and ensure public safety. Eyewitnesses described the $(noun2) as $(adjective1), catching everyone\'s attention. Many residents were left wondering how such a rare occurrence could happen in their beloved $(noun2). Experts have speculated that the $(noun2) might have escaped from a nearby $(noun4) but investigations are still ongoing.Local authorities have urged citizens to remain vigilant and report any sightings of the elusive $(noun2). The community has come together, sharing stories and images of the mysterious $(noun2) on social media, with hopes of shedding light on this peculiar incident. Stay tuned for updates as the story unfolds. This unexpected encounter has left the town buzzing with excitement and curiosity, as they eagerly await answers regarding the origins and future of the fascinating $(noun1).'

let fairyTale = 'Once upon a time, there was a $(noun1) named Rapunzel. She had long, flowing, $(noun2) and was trapped in a $(noun3) by a wicked $(noun4). Rapunzel dreamed of $(verb1) out into the world and experiencing freedom. One day, a brave prince $(verb1) into her tower and heard her beautiful voice. He was mesmerized by her $(adjective1) ,singing. Together, they planned an escape and $(verb2} away from the tower. They faced many challenges, but their love and determination helped them overcome every obstacle. In the end, Rapunzel and the prince lived happily ever after, surrounded by joy and $(noun2).'
    

if (paper =='top' && pickUpAnother =='no'){
    prompt(prescription)
    }

if (paper =='middle' && pickUpAnother =='no'){
    prompt(newsArticle)
}

if (paper =='bottom' && pickUpAnother =='no'){
    prompt(fairyTale)
    }

    let restart = true;
    let iteration = 0;
    
    while (restart) {
      if (iteration < 3) { 
        prompt(`Iteration ${iteration + 1}`);

        iteration++;
      } else {
        restart = false; 
      }
    }
    
    prompt('glad we figured that out! Uh oh there are noses coming from upstairs! Run before someone sees you tresspassing!... Great, now we\'re back outside and freezing cold again. Luckily there are two warm house in front of us. House 1 is a red house, and house 2 is blue. You may enter one. Which do you enter?')
  
   




