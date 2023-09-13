let beginVacation = prompt(`It's a beautiful morning at Disney World! Which park will you go to today? Type "1" for Magic Kingdom, "2" for Hollywood Studios, "3" for Animal Kingdom or "4" for Epcot`)



if (parseInt(beginVacation) === 1){
    //magic kingdom path
    alert(`Welcome to the Magic Kingdom`)
    let magicKingdom = prompt(`How do you start your day? Choose between "characters", "rides", or "shopping".`)
        if(magicKingdom === 'characters'){
            //character path
            let kingdomCharacters = confirm(`The line to meet Mickey Mouse looks pretty long. Do you wait?`)
                if (kingdomCharacters === true){
                    //mickey
                    alert(`You got to meet Mickey! The line was long but it was totally worth it. He signed your book and everything.`)
                } else (
                    //cinderella
                    alert(`You decided to hop in the line to meet Cinderella which was surprisingly short! She was so sweet but hopefully next time you'll get to meet Mickey!`)
                )
        } else if (magicKingdom === 'rides') {
            //ride path
            let kingdomRide = confirm(`Time to pick a ride. You wanted to ride Peter Pan's Flight but the line looks long. Do you wait?`)
                if (kingdomRide === true) {
                    alert(`You decided to wait in the line. It was SUPER long. The ride was cool but very short. You are tired and head back to the hotel to rest.`)
                } else {
                    let anotherRide = confirm(`After leaving Peter Pan's flight, you ran over to Pirates of the Carribean. There is another long line! Do you wait?`)
                        if (anotherRide === true){
                            alert(`You are glad you waited. It was a long line but the line was air conditioned. And the ride was long and air conditioned. Nice to be out of the Florida sun.`)
                        } else {
                            alert(`Well, the line for It's a Small World looks is really short. You ride that. Now you have the song stuck in your head. Only sleep will cure this.`)
                        }
                }
        } else if (magicKingdom === 'shopping') {
            //shopping path
            let kingdomShopping = prompt(`You decided to go shopping! What did you buy?`)
            alert(`You can leave the park happy knowing that you finally got the ${kingdomShopping} that you have been wanting.`)
        } else {
            //error path
            alert(`The number of people must have freaked you out because you just left the Magic Kingdom.`)
        }
} else if (parseInt(beginVacation) === 2){
    //hollywood studios path
    alert(`Good morning from Hollywood Studios.`)
    let hollywoodStudios = confirm(`Star Wars: Galaxy's Edge is brand new and popular. Do you run over there first?`)
        if (hollywoodStudios === true) {
            //galaxy's edge
            let studiosGalaxy = confirm(`You have wanted to build a droid for a while, but it's expensive. Do you bite the bullet and build a droid?`)
                if (studiosGalaxy === true) {
                    let droidChoice = prompt(`Do you want to build an R-series unit or BB-series unit. Select "r" or "b"`)
                        switch (droidChoice){
                            case 'r':
                                alert(`Your R-series unit looks amazing! Now to go test him out in the droid area.`)
                                break
                            case 'b':
                                alert(`Your BB-series unit looks amazing! Now to go test him out in the droid area.`)
                                break
                            default: alert(`Looks like you couldn't decide what to build. Maybe next time.`)
                        }
                } else {
                    let galaxyRide = prompt(`You decided to pick a ride in Galaxy's Edge instead. Type "1" to ride Rise of the Resistance or "2" to ride Millennium Falcon: Smugglers Run`)
                        switch(galaxyRide){
                            case '1':
                                alert(`Rise of the Resistance was super fun. Too bad you can't stop thinking about that droid.`)
                                break
                            case '2':
                                alert(`You loved Millennium Falcon! If only the line wasn't so long, you would ride it again.`)
                                break
                            default: alert(`You couldn't choose a ride so you left!`)
                        }
                }
        } else {
            //classic rides
            let studiosRides = prompt(`You chose to head to the classic rides of Hollywood Studios. Choose between "Tower of Terror", "Rock n Roller Coaster" or "Star Tours".`)
                switch(studiosRides){
                    case 'Tower of Terror':
                        alert(`Tower of Terror was just as awesome as you remembered. You can't wait to see what tomorrow holds.`)
                        break
                    case 'Rock n Roller Coaster':
                        alert(`Rock n Roller Coaster totally rocked. What an awesome time at Hollywood Studios`)
                        break
                    case 'Star Tours':
                        alert(`Star Tours, the classic Hollywood Studios star wars ride. Totally worth the wait!`)
                        break
                    default: alert(`You weren't able to pick a ride so you left the park. Maybe you just need a nap!`)
                }
        }
} else if (parseInt(beginVacation) === 3) {
    //animal kingdom path
    alert(`It's a beautiful day in the Animal Kingdom.`)
    let animalKingdom = prompt(`How do we want to spend our? Choose "rides" or "shows".`)
        if (animalKingdom === 'rides'){
            //rides
            let animalRides = confirm(`Avatar Flight of Passage always has the longest line. Do you run there?`)
                if (animalRides === true) {
                    let animalFood = prompt(`You rode Avatar Flight of Passage. But the line was very long. Now you are hungry and decide to eat at Satu'li Canteen. What do you order`)
                        if (animalFood === 'cheeseburger boa buns') {
                            alert(`You made the right choice. The cheeseburger boa buns are the best option.`)
                        } else {
                            alert(`You enjoyed your ${animalFood} but you wish you had ordered the cheeseburger bao buns.`)
                        }
                } else {
                    alert(`Running to Avatar Flight of the Passage does not sound like fun. You decided to go on the Safari ride instead.`)
                }
        } else if (animalKingdom === 'shows') {
            //shows path
            let animalShow = confirm(`As you wonder through the park, you see a show "Festival of the Lion Kind." Do you go?`)
                if (animalShow === true) {
                    alert(`Wow! That show was awesome. The music, the costumes. You would totally do that again!`)
                } else (
                    alert(`You keep wondering and find another show, "Finding Nemo: The Big Blue & and Beyond." You attend and it's awesome! What a lucky find.`)
                )
        } else {
            //error
            alert(`You couldn't make up your mind on what to do so you left the park. You'll try again tomorrow.`)
        }
} else if (parseInt(beginVacation) === 4){
    //epcot path
    alert(`Welcome to Epcot`)
    let epcot = prompt(`Where should we head first? Choose "rides" or "world show case"`)
        if (epcot === 'rides'){
            //rides path
            let epcotRides = prompt(`Which ride should we head to. Choose "Mission Space", "Soarin", or "Spaceship Earth".`)
                switch(epcotRides){
                    case 'Mission Space':
                        alert(`The ride was amazing but the line was long. Let's head back to the hotel pool.`)
                        break
                    case 'Soarin':
                        alert(`What a fun ride! You can almost smell California.`)
                        break
                    case 'Spaceship Earth':
                        alert(`Blast off! We had a long wait but it was worth it. Let's go relax now.`)
                        break
                    default: alert(`The lines were all too long. You leave the park and decide to try again tomorrow.`)
                }
        } else if (epcot === 'world show case'){
            //world show case path
            let epcotShowCase = prompt(`Time for the World Show Case! Do you eat or drink around the world? Type "eat" or "drink"`)
                if (epcotShowCase === 'eat'){
                    let eatShowCase = confirm(`Do you want to go clockwise around the show case?`)
                        if (eatShowCase === true){
                            alert(`After visiting Mexico, Norway, China and Germany, you are so full you have to go back to the hotel and lay down.`)
                        } else {
                            alert(`After visiting Canada, U.K. France and Morocco, you are so full you have to go back to the hotel and lay down.`)
                        }
                } else if (epcotShowCase === 'drink') {
                    let drinkShowCase = confirm(`Do you go clockwise around the show case?`)
                        if (drinkShowCase === true){
                            alert(`After visiting Mexico, Norway, China and Germany, you are so tipsy you have to go back to the hotel and lay down.`)
                        } else {
                            alert(`After visiting Canada, U.K. France and Morocco, you are so tipsy you have to go back to the hotel and lay down.`)
                        }
                } else {
                    alert(`You couldn't decide. So you just leave.`)
                }
        } else {
            //error path
            alert(`The amount of walking must have been to much because you just left Epcot.`)
        }
} else {
    //error path
    alert(`I guess you decided to hang by the pool today.`)
}


