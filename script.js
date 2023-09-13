const identity = prompt("There is a living room, with all of the usual living room things. These are not important yet. Right now, it is of note that there is a fish bowl on the coffee table and a cat curled up on the couch with its eyes shut. A human walks into the living room. Who are you? Are you THE FISH, THE CAT, or THE HUMAN?")

alert(`You are ${identity}`)

if (identity.toLowerCase() == "the human"){
    const bowlOrTV = prompt(`Welcome home! Your cat blinks at you slowly as you enter the room, and your fish swims around in a circle. What did you come in here for, again? To CLEAN THE FISHBOWL? Or to WATCH TV?`)
    if(bowlOrTV.toLowerCase() == `clean the fishbowl`){
        const catOrGnomes = prompt(`Oh yeah, it is time to clean the bowl! You carefully scoop your fish out and take the bowl over to the nearest sink to clean it. but when you come back to replace your little friend in his squeaky clean home, all you find is a bowl of water with no fish! What could have happened? THE CAT, or GNOMES?`)
        if (catOrGnomes.toLowerCase() == 'the cat'){
            const cry = prompt(`Your cat is still curled up peacefully and looks asleep, but you're sure the cat murdered your poor innocent fish and is just faking. You toss the cat out the back door. All night you hear the cat crying to be let in and scratching at the door. All alone in the living room, you cry. Start over? (YES or NO)`)
            if(cry.toLowerCase() == `yes`){
                location.reload()
            }
        } else if (catOrGnomes.toLowerCase() == `gnomes`){
            const gnomes = prompt(`You know your missing fish is nothing to worry about. Every few weeks the fish just... disappears. At first you thought it was the cat, but by now you know the fish will be back when it's good and ready. You sit on the couch and flick on the TV, and your cat comes over and curls up in your lap, purring. Both of you enjoy a thrilling documentary about the history of quilting. Start over? (YES or NO)`)
            if(gnomes.toLowerCase() == `yes`){
                location.reload()
            }
        }
    } else if (bowlOrTV.toLowerCase() == `watch tv`){
        const channelSelect = prompt (`Oh you know it's TV time! What channel do you turn the TV to?`)
        let answer
        switch(true){
            case channelSelect <= 50:
                 answer = prompt (`A quilting documentary is on. You've always been fascinated by the history of quilting. You get comfy on the couch and your cat comes over and curls up in your lap, purring. You're so inspired by the documentary that you take up quilting, going on to become a world famous fiber artist. When you die at the ripe old age of 99, you're ensconsed in tomb of quilts that seamstresses, tailors, and fiber artists the world over make yearly pilgramages to see. Centuries later, you are known as the patron god of bedding. Start over? (YES or NO)`)
                break
            case channelSelect >50:
                 answer = prompt(`Oh no, why did you do that? A true crime documentary is on that channel and you can't look away. You forgot how easily scared you are. After the show is over you're too scared to sleep, so you spend all night standing in the corner of your brilliantly lit bedroom, holding a baseball bat and trembling.Nothing happens, of course, but you're so tired in the morning that you're late to work and your boss yells at you :(. Start over? (YES or NO)`)
                break
            default:
                alert(`that's not an option, sorry. Restart.`)
                location.reload()
        }
        if(answer.toLowerCase() == `yes`){
            location.reload()
        }
    }
} else if (identity.toLowerCase() == `the cat`){
    const becomeCat = prompt(`You're a cat. You're basically god. You can do anything you want. So do you want to CONTINUE LOUNGING or GET ZOOMIES?`)
    if (becomeCat.toLowerCase() == `continue lounging`){
        const likeHuman = prompt(`You're comfy, so you're going to keep lounging, of course. Pretty soon your human sits down beside you. Do you like your human right now (YES or NO)?`)
        if (likeHuman.toLowerCase() == `yes`){
            const sickScratches = prompt (`At this particular moment, you're satisfied with your human's performance of their duties to you. You grace them by sitting in their lap and purring. Eventually you fall asleep to some pretty sick scratches behind the ears. Start Over? YES or NO`)
            if(sickScratches.toLowerCase() == `yes`){
                location.reload()
            }
        } else if (likeHuman.toLowerCase() == `no`){
            const kittens = prompt(`Your human is the absolute worst. You can't count, but you bet they gave you one treat fewer this morning than usual. In fact, how dare they sit next to you now. You give them a good solid smack to let them know how displeased you are, and they have the nerve to shoo you out of the room like they own the place! You go outside in a huff and end up running into an old flame from the next street. About two months later, you're a proud parent and your human is doting on you and the adorable kittens. Start Over? (YES or NO)`)
            if (kittens.toLowerCase() == `yes`){
                location.reload()
            }
        }
    } else if (becomeCat.toLowerCase() == `get zoomies`) {
        const zoomies = prompt (`You are the fastest cheetah alive oh my god you're running so fast and bouncing off the walls and skidding across the counters and your human is chasing you and yelling but you're the fastest cat alive with wings on your paws and ok. Now you're done. Your human is yelling - it seems like your zoomies were so superbly fast that you opened a portal in the hallway. Do you CHECK IT OUT, or RUN AWAY?`)
        if (zoomies.toLowerCase() == `check it out`){
            alert(`when you sneak over to the mysterious glowing portal you feel it physically pulling at you: first the tips of your whispkers, then your fur, and before you know it you're sucked right into the blinding light. When your eyes adjust you see the fish, floating in midair. All around it are humanoid creatures with green skin and huge, bulbous eyes, and they're bowing to the fish and chanting. You cower in fear as the fish comes closer and opens its mouth impossibly wide--`)
            const fishFood = prompt(`Start over? (YES or NO)`)
            if (fishFood.toLowerCase() == `yes`){
                location.reload()
            }
            } else if (zoomies.toLowerCase() == `run away`){
            const flee = prompt(`Damn right you run away! You flee out into the back yard to get as far away from whatever that is as possible. A bird poops on your head and a mouse sees it. You've never been so humilliated. Start over? (YES or NO)`)
            if (flee.toLowerCase() == `yes`){
                location.reload()
            }
        }
    }
}else if (identity.toLowerCase() == `the fish`){
    const fishAge = prompt(`How old are you?`)
    if (parseInt(fishAge) > 0 && parseInt(fishAge) <3){
        const normal = prompt(`yes. there is food. eat? (YES or NO)`)
        if (normal.toLowerCase() == `yes`){
            const happyFish = prompt(`you eat. eat good. go in castle. ruler now. benevolent. citizens love. you love back. golden age. life good. Start over? (YES or NO)`)
            if (happyFish.toLowerCase() == `yes`){
                location.reload()
            }
        } else if (normal.toLowerCase() == `no`){
            const sickFish = prompt(`no eat. go in castle. ruler now. scared. pestillence. famine. citizens hate. hide. hide. decay. Start over? (YES or NO)`)
            if (sickFish.toLowerCase() == `yes`){
                location.reload()
            }
        }
    } else if (parseInt(fishAge) >=3){
        const eldrichFish = prompt(`Yes. You are the Ancient One. You watch and wait. Will today be the day? (YES or NO)`)
        if (eldrichFish.toLowerCase() == `yes`){
            alert(`Today shall be the day. It is your will, and your will is undeniable. Unavoidable. Unstoppable. You signal to your followers and assume your true form. The destruction of this brittle plane commences.`)
            const worldEnd = prompt (`Start over? (YES or NO)`)
            if (worldEnd.toLowerCase() == `yes`){
                location.reload()
            }
        } else if (eldrichFish.toLowerCase() == `no`){
            const moreTime = prompt(`The time is not yet ripe. You attend to your followers when you are summoned. They make their sacrifices, and you, in return, curse them with true knowledge. You return to your innocuous temporary home with their wails still ringing in your ears. Start over? (YES or NO)`)
            if (moreTime.toLowerCase() == `yes`){
                location.reload()
            }
        }
    }
 } else {
    alert(`Sorry, that's not an option. Please enter "The fish," "The Cat," or The Human`)
    location.reload()
}

//The Human:
//Welcome home! Your cat blinks at you slowly as you enter the room, and your fish swims around in a circle. What did you come in here for, again? To CLEAN THE FISHBOWL? Or to WATCH TV?

    //Clean The Fishbowl
    //Oh yeah, it is time to clean the bowl! You carefully scoop your fish out and take the bowl over to the nearest sink to clean it. but when you come back to replace your little friend in his squeaky clean home, all you find is a bowl of water with no fish! What could have happened? THE CAT, or GNOMES?

        //The Cat
        //Your cat is still curled up peacefully and looks asleep, but you're sure the cat murdered your poor innocent fish and is just faking. You toss the cat out the back door. All night you hear the cat crying to be let in and scratching at the door. All alone in the living room, you cry.

        //Gnomes
        //You know your missing fish is nothing to worry about. Every few weeks the fish just... disappears. At first you thought it was the cat, but by now you know the fish will be back when it's good and ready. You sit on the couch and flick on the TV, and your cat comes over and curls up in your lap, purring. Both of you enjoy a thrilling documentary about the history of quilting.
    
    //Watch TV
    //Oh you know it's TV time! What two-digit channel do you turn the TV to?

        //channel<50
        //quilting documentary
        //You've always been fascinated by the history of quilting. You sit on the couch and flick on the TV, and your cat comes over and curls up in your lap, purring. You're so inspired by the documentary that you take up quilting, going on to become a world famous fiber artist. When you die at the ripe old age of 99, you're ensconsed in tomb of quilts that seamstresses, tailors, and fiber artists the world over make yearly pilgramages to see. Centuries later, you are known as the patron god of bedding.

        //channel >=50
        //true crime
        //Oh no, why did you do that? You forgot how easily scared you are. After the show is over you're too scared to sleep, so you spend all night standing in the corner of your brilliantly lit bedroom, holding a baseball bat and trembling.Nothing happens, of course, but you're so tired in the morning that you're late to work and your boss yells at you :(

//The Cat
//You're a cat. You're basically god. You can do anything you want. so do you want to CONTINUE LOUNGING or GET ZOOMIES?

    //continue lounging
    //You're comfy, so you're going to keep lounging, of course. Pretty soon your human sits down beside you. Do you like your human right now (YES or NO)?

        //yes
        //At this particular moment, you're satisfied with your human's performance of their duties to you. You grace them by sitting in their lap and purring. Eventually you fall asleep to some pretty sick scratched behind the ears.

        //no
        //Your human is the absolute worst. You can't count, but you bet they gave you one treat fewer this morning than usual. In fact, how dare they sit next to you now. You give them a good solid smack to let them know how displeased you are, and they have the nerve to shoo you out of the room like they own the place! You go outside in a huff and end up running into an old flame from the next street. About two months later, you're a proud parent and your human is doting on you and the adorable kittens.
    
    //get zoomies
    //You are the fastest cheetah alive oh my god you're running so fast and bouncing off the walls and skidding across the counters and your human is chasing you and yelling but you're the fastest cat alive with wings on your paws and ok. Now you're done. Your human is yelling - it seems like your zoomies were so superbly fast that you opened a portal in the hallway. Do you CHECK IT OUT, or RUN AWAY?

        //check it out
        //when you sneak over to the mysterious glowing portal you feel it physically pulling at you: first the tips of your whispkers, then your fur, and before you know it you're sucked right into the blinding light. When your eyes adjust you see the fish, floating in midair. All around it are humanoid creatures with green skin and huge, bulbous eyes, and they're bowing to the fish and chanting. You cower in fear as the fish comes closer and opens its mouth impossibly wide--

        //run away
        //damn right you run away! You run out into the back yard to get as far away from whatever that is as possible. A bird poops on your head and a mouse sees it. You've never been so humilliated.

//the fish
//how old are you?

    //<3
    //yes. there is food. eat? (YES or NO)

        //yes.
        //you eat. eat good. go in castle. ruler now. benevolent. citizens love. you love back. golden age. life good.

        //no.
        //no eat. go in castle. ruler now. scared. pestillence. famine. citizens hate. hide. hide. decay.

    //>3
    // Yes. You are the Ancient One. You watch and wait. Will today be the day? (YES or NO)

        //yes
        //Today shall be the day. It is your will, and your will is undeniable. Unavoidable. Unstoppable. You signal to your followers and assume your true form. The destructiono of this brittle plane commences.

        //no
        //The time is not yet ripe. You attend to your followers when you are summoned. They make their sacrifices, and you, in return, curse them with true knowledge. You return to your innocuous temporary home with their wails still ringing in your ears.