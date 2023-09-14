//This weekend is perfect for a little getaway. Whats the temperature going to be?
// let valueOfPrompt = prompt()
// console.log(valueOfPrompt)

// let temp = prompt(`This weekend is perfect for a little getaway. What's the temperature going to be?`)
// alert(`It is ${temp} degrees outside`)

let temp = null
let playerChoice = null
let food = null

// >= 80 we should go to the Cape
if (temp >= 80 || temp <= 100) {
    console.log(`We should go to the Cape!`)
    //what should we do? (B/R)
                //   B - go to the beach
                if (playerChoice == 'B' || playerChoice == 'b') {
                    console.log(`Great idea! Let's go to the beach!`)
                        //What should we do at the beach? (R/W)
                                    //R = lay on a towel and relax
                                    if (playerChoice == 'R' || playerChoice == 'r') {
                                        console.log(`you choose to lay on a towel and relax`)
                                        //prompt()Good choice! How should we handle the sun? (U/S)
                                                    //use an Umbrella
                                                    if (playerChoice == 'U' || playerChoice == 'u') {
                                                        console.log(`you choose an umbrella to keep cool`)    
                                                    //use lots of Sunscreen
                                                    } else if (playerChoice == 'S' || playerChoice == 's') {
                                                        console.log(`you choose to lather on suncreen. smart!`) 
                                                    } else {
                                                        console.log(`I'm sorry, please make a valid selection`)
                                    //W = go into the water                
                                    } else if (playerChoice == 'W' || playerChoice == 'w') {
                                        console.log(`you choose to go into the water`)
                                            //prompt()should we take floats? (Y/N)
                                            if (playerChoice == 'Y' || playerChoice == 'y') {
                                                console.log(`floats are perfect for relaxing`)    
                                            } else if (playerChoice == 'N' || playerChoice == 'n') {
                                                console.log(`let's go for a swim!`) 
                                            } else {
                                                console.log(`I'm sorry, please make a valid selection`)
                                    } else {
                                        console.log(`I'm sorry, please make a valid selection`)    
                                    }        
                //   R - go to a restaurant                  
                } else if (playerChoice == 'R' || playerChoice == 'r') {
                    console.log(`Great idea! Let's go to a restaurnant!`)
                                    //prompt()What should we get for food? (L/H/S)
                                        switch(food) {
                                            case 'L':
                                          console.log('ill have the lobster')
                                          break
                                        case 'H':
                                          console.log('ill have a burger, medium')
                                          break
                                        case 'S':
                                            console.log('ill have a salad')
                                          break
                                        default:
                                          console.log('please enter a valid entree')
                                      }
                                                    //prompt()What should we do now? 
                                                                        //  M = go to the movies. Oppenheimer is playing
                                                                        //   W = walk along the beach, enjoy ther cool night air
                } else {
                    console.log(`I'm sorry, please make a valid selection`)    
                }        
} else if (temp < 80 || temp >= 40) {
    // < 80  we should go into Boston
    console.log(`We should go into Boston!`)
    //What should we do? 
    console.log(`What should we do in town? (M/S)`)
    //M = go to a museum
            
                //which type of museum? A - art
                                            //Which paintings should we see first?
                                                        // R - Rewmbrandt's
                                                        // P - Picasso's
                                                        // D - Da Vinci's
                                    //  S - science
                                            //What exhibit is your favorite?
                                                            //E - electricity show
                                                            //A - animal exhibit

    //   S = go to a sox game at Fenway
                //Did the Red Sox win? (Y/N)
                                    // Y Whoohoo that's a big win!
                                                    //where should we celebrate?
                                                            //N - North End
                                                            //C - Copley
                                                            //S - Seaport
                                    // N That's a shame, tough loss
                                                    //should we walk around the city? Y/N
} else {
    console.log(`I'm sorry, please make a valid selection`)
}

        
        
                        

                        