let begin = () => {
    let choice1 = prompt('Would you like to go on an adventure? (y/n)')
    if (choice1 === 'y') {
        alert('awesome, let us begin.')
        forest()
    } else if (choice1 === 'n') {
        alert('Well, adventuring isnt for everyone.')
        alert('Maybe another time.')
        begin()
    } else {
        alert('Enter an acutal response or get out of our game, please!')
        begin()
    }
}
const forest = () => {
    let choice2 = confirm('The forest looks dark and scary. Do you want to continue?')
    if (choice2){
        alert('You start to walk through the forest and notice many spooky things skeletons, goblins, and ghouls just to name a few. You contiue until you see a brightly lit area. The light calms your nerves, slightly. You also seem to hear singing coming from the same direction. Would you like to investigate? (y/n)')
        stella()
    } else {
        alert(`Don't be such a weeny. Jk, we understand that not everyone is cut out for adventuring.`)
        begin()
    }
}
const stella = () => {
    alert('You are, now, right beside the area in which you saw the light and heard the singing. It is much more clear and you can now tell what song is being sung and you start to mumble, backstr...')
    alert(`All of the sudden you are thrown back by a powerful force that feels similar to a moving brick wall.`)
    alert('"HOW DARE YOU SPY ON ME!", the orb shouts.')
    alert('The bluish/yellow orb starts to approach you.')
    alert(`"Why did you feel the need to sneak upon me in such a vunerable state?" the orb asks with a confused orb face. More importantly, WHAT IS YOUR NAME?`)
    let userName = prompt(`Please enter your name so the orb doesn't kill us!`)
    let userNameConfirm = confirm(`Is ${userName} really what you wanna go with?`)
    if (userNameConfirm === true) { 
        let choice2 = prompt(`"It looks as though something of mine has come up missing, ${userName}. I would be more confident in it not being cave trolls, however this area is riddled with trolls. They come and ransack my belongings and take what is not theirs! It is getting quite old if you ask me. I think that since you have the courage to go walking through the forest at such an odd time, you should have no issue retrieving my stolen property. Ill give you directions and you can head that way in a moment." (enter 'y' to agree and continue or enter 'n' to refuse. Ill also let you try to stand your ground and fight with 'f')`)
        if (choice2 === 'y') {
            cave()
        } else if (choice2 === 'n') {
            alert(`"Huh, are you refusing? Fine!"`)
            death()
        } else if (choice2 === 'f') {
            fightBack()
        } else {
            alert(`Just start over`)
            begin()
        }
    } else {
        alert(`${userName}, if you're not happy with the name you chose then you might as well restart the game. good luck on your next playthrough.`)
        begin()
    }
}
const cave = () => {
    alert(`it looks like Stella has sent us to a cave to retrieve some kind of personal item that was stolen. Hopefully, it wont take too long to find and we get out and make it home before morning.`)
    alert(`Once you have made it into the cave several hundred feet you come to a fork in the path. The left cave fork looks clear and doesnt seem like it will offer much resistence. The right cave fork is more narrow and you cannot see as far down.`)
    let caveChoice = parseInt(prompt(`Look, dude! This seems like a pretty important descision so hopefully you can make the right one...What? Nothing? Come on, this could be life or death! Ok..ok..Ill think of a number and you try to guess which number I am thinking. (pick a number 1-2)`))
    if (caveChoice === 1) {
        alert(`Great f*ing choice`)
        leftFork()
    } else if (caveChoice === 2) {
        alert(`Great f*ing choice`)
        rightFork()
    } else {
        alert(`Did you not understand? I said pick a number! 1 or 2, this isn't rocket science. Here, just start this part over.`)
        cave()
    }
}
const leftFork = () => {
    alert(`Alright,looks like we are heading down the left fork.`)
    alert('The path is clear and is vry easy to walk. After about 5-10 minutes of walking you are hit it the face by the most foul stench you have ever smelled in your life. Seriously, its like the time you and your lactose intolerant friend thought you cured their lactose intolerance, so you tried to help them catch up on their years of missed dairy. Ah, the Ice cream was great until Todds digestive apocalypse')
    alert('Sorry about that. Anyways, the odor was coming from a den towards the end of the cave system. As you approach you can hear the apnea laden breathing of a cave troll')
    let choice = prompt(`Ok, so this is probably on of the trolls that ransacks Stellas property. You sneak into the trolls den and find the item that stella described to you. (press 'r' to return the item to Stella or 's' to steal the item)`)
    if (choice === 'r') {
        alert(`Really good choice!`)
        stellaReturn()
    } else if (choice === 's') {
        death()
    }

}
const rightFork = () => {
    alert(`Are you kidding? I cannot belive we are going down this path. it's too tight, and I keep getting poked in the ribs by stalagmites. I wonder how far we will hve to wal...`)
    alert(`*CRASH*`)
    alert(`The cave floor has officially dropped out from beneath our feet. It's amazing that we are still falling. I mean youd think wed stp at some point. What do you want to do?`)
    let choice = prompt(`I am thinking that we could just keep falling and see where that goes, but it's probably not gonna be a happy ending. On the other hand, you could just deploy your parachute. (please select 'k' to keep falling of 'k' to open parachute)`)
    if (choice === 'k') {
        alert(`If you couldnt tell the parachute thing was a joke then I'm sorry, but just know this part is only in here because the creator ran out of ideas and thought this would be funny. A lot of his friends said "No, don't do something like that" but, who are they anyway and what do they know about humor. Oh, yeah, sorry about making jokes during your untimely demise, but what can I say. I calls it like I see it.`)
        begin()
    }
}
const fightBack = () => {
    alert(`On your way to the cave entrance you find a large tree limb. You pick it up and head back to Stellas home. You arrive to find Stella has continued where they left off. Your anxiety builds as you try and get up the courage to face them.`)
    alert(`Stella doesn't expect a thing as you jump out from behind a tree and smack the h*ll out of their perfect baseball shaped body for a MUTHA F*ING HOMERUN!`)
    cookiesAndMilk()
}
const death = () => {
    alert('You start to feel nauseaus. It is almost like every atom in your body is vibrating at once. Your eyes, ears, and nose start to bleed profusely. Your teeth start falling one after the other. you look down at your hands to see your flesh rotting away.Stella was not someone to mess with and you have paid the ultimate price.')
    let beginAgain = confirm(`Please, enjoy another playthrough.`)
    if (beginAgain === true) {
        begin()
    }
}

const stellaReturn = () => {
    alert(`"So, you found my item! I guess I can repay you this one time by not ending your exitence. Please feel free to come back and do more work for me..HAHAHAHAHA"`)
    cookiesAndMilk()
}

const cookiesAndMilk = () => {
    let choice = prompt(`Finally safe at home. time to have a glass of milk and a cookie. Ooh, but which cookie do you desire? ('c' for chocolate chip 'o' for oatmeal raisen 's' for snickerdoodle)`)
    switch (choice) {
        case 'c':
            alert(`Good choice`)
            begin()
            break;
        case 'o':
            death()
            break;
        case 's':
            alert('Good choice')
            begin()
            break;
    }
}


begin()
