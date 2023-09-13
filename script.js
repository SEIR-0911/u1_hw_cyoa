/*
Future features/cleanup:
- Remove case sensitivity
- Count the number of times replay takes place
- Create functions for the various checks
*/

// A toddler adventure - lots of paths, very few endings.


let toddler = "Noam"
let cont = true
let replay = true
let dinner = null
let timer = null

console.log(toddler, cont, dinner, timer)


//Replay loop
while (replay == true) {
    //reset continue upon replay
    cont = true
    //Initial question, asking three times,  exasperated on the fourth ask 
    for (let i=0; i<4; i++) {
        if (i<3) {
            let q1Prompt = prompt(`Hi ${toddler}, did you play with your friends at school today? [Yes/No]`)
            switch (q1Prompt) {
                case `Yes`:
                    alert(`How fun! Now it's time to figure out dinner.`)
                    //Yes is a satisfactory answer, exit the for loop
                    i=4
                    break
                case `No`: 
                    alert(`Yes you did, we are literally walking home in the stroller. Let's try that again.`)
                    break
                default:
                    alert(`That wasn't the question. Let's try that again.`)
            }
        } else {
            //Game Over #1
            dinner = "Cheesy Broccoli"
            timer = 2
            alert(`You're in a mood tonight. We're having ${dinner} for dinner and we're going to cook it for ${timer} minutes. Then it will be time for bath and bedtime.`)
            cont = false
        }   
    }

    //GO 1 Check
    if (cont == true) {
        // Second question, asking three times,  exasperated on the fourth ask
        for (let i=0; i<4; i++) {
            if (i<3) {
                let q2Prompt = prompt(`What would you like for dinner today? [Cheesy Broccoli/Quesadilla/Papa's Chicken]`)
                switch (q2Prompt) {
                    case `Cheesy Broccoli`:
                        dinner = q2Prompt
                        alert(`Great idea, let's make ${dinner}`)
                        //This is a satisfactory answer, exit the for loop
                        i=4
                        break
                    case `Quesadilla`:
                        dinner = q2Prompt
                        alert(`Great idea, let's make ${dinner}`)
                        //This is a satisfactory answer, exit the for loop
                        i=4
                        break
                    case `Papa's Chicken`: 
                        alert(`Sorry sweety, you ate it all over the weekend. Pick something else.`)
                        break
                    default:
                        alert(`That wasn't the question. Let's try that again.`)
                }
            } else {
                //Game Over #2
                dinner = "Cheesy Broccoli"
                timer = 2
                alert(`I'm glad you had fun at school but you're in a mood tonight. We're having ${dinner} for dinner and we're going to cook it for ${timer} minutes. Then it will be time for bath and bedtime.`)
                cont = false
            }   
        }
    }
    
    //GO 2 Check
    if (cont == true) {
        
        // third question, asking three times,  exasperated on the fourth ask
        for (let i=0; i<4; i++) {
            if (i<3) {
                let q3Prompt = prompt(`For how long should we cook your ${dinner}?`)
                if (q3Prompt<0) {
                    alert(`That's a silly answer. Let's try that again.`)
                } else if (q3Prompt < 2) {
                    alert(`That's not enough time, your food will be too cold. Let's try that again.`)
                } else if (q3Prompt <= 3) {
                    i=4
                    timer = q3Prompt
                    alert(`That's right! We're going to cook the ${dinner} for ${timer} minutes.`)
                } else if (q3Prompt>2) {
                    alert(`The food will be too hot! Let's try that again`)
                }
            } else {
                //Game Over #3
                timer = 2
                alert(`I'm glad you picked ${dinner} for dinner but you're in a mood. We're going to cook it for ${timer} minutes. Then we will take a bath and go to bed.`)
                cont = false
            }   
        }     
                

    } 
        
    // Winning outcomes
    alert(`Okay, that ${dinner} was yummy. We cooked it for ${timer} minutes, which was just right. Now it's time for bath and bedtime.`)


    //Replay Question
    let qReplay = confirm('Would you like to experience tomorrow?')
    if (qReplay == true) {
        alert(`Jumping to tomorrow in 3, 2, 1...`)
    } else {
        alert(`Thanks for being a toddler!`)
        replay = false
    }

}



