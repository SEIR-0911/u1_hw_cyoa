const game = () => {
    let playerName = prompt("What is your name ?")
    let playerBff = prompt('what is the name of your best friend?')
    let ansOne = prompt('what will be your weapon of choice? A.axe B.gun(with limited ammo) C.bow(with retreivable arrows)      ANSWER WITH THE LETTERS')
    switch(ansOne){
    case 'A'||'a':
        alert('great choice not only a weapon but a utility, great for places with tall buildings')
        break
    case 'B'||'b':
        alert('risky choice, better run far away')
        break
    case 'C'||'c':
        alert('good choice, great to survive in places with not that many buildings buildings')
        break
    default:
        console.log('please enter a letter that matches your answer')
    }
    if (ansOne === 'A'||'a') {
        let axePath = confirm(`Now that you chose your weapon ${playerName}, the zombies are chasing you, do you want to head to the city?`)
        if (axePath === true) {
            alert(`Amazing choice ${playerName} your so close in surviving one last question`)
            let axePathTwo = confirm(`${playerName}!!! ${playerBff} is being attacked do you save him and risk your life?`)
            if (axePathTwo === true) {
                alert(`Congrats ${playerName} you died a war hero, after you died ${playerBff} survived and managed to safe the world the world remembers you and even named that date of the year after you`)
                let restart = confirm('will you like to restart?')
                if (restart === true) {
                    game()
                }else {
                    alert(`Thank you for playing ${playerName}`)
                }
            }else {
                alert(`${playerName} you let ${playerBff} die and you saved the world and everyone remembers you for saving the world but the ones that were there know the sad truth about ${playerBff}`)
                let restart = confirm('will you like to restart?')
                if (restart === true) {
                    game()
                }else {
                    alert(`Thank you for playing ${playerName}`)
                }
            }
        }else{
            alert('that was very risky,You found yourself in your neighborhood lets see what awaits')
            alert(`${playerName} you want to stay aware of your suroun- BEHIND YOU!!!`)
            alert(`ummm ${playerName} because of your poor life choices skills you died, GET BETTERR!!!`)
            let restart = confirm('will you like to restart?')
                if (restart === true) {
                    game()
                }else {
                    alert(`Thank you for playing ${playerName}`)
                }
        }
    }else if (ansOne === 'B'||'b'){
        let gunPath = confirm(`wow ${playerName} you chose the riskiest from the 3 weapons, good thing its easy to put away and escape the zombies do you want to head to the Mountains?`)
        if (gunPath === true) {
            alert(`great choice ${playerName} looks like you might outrun them`)
            let gunPathTwo = confirm(`do you want to stay there for the night because your hungry? if not youll keep running`)
            if (gunPathTwo === true) {
                alert(`You successfully outran the zombies and youre the luckiest man alive a helicopter showed up because ${playerBff} saw where you were at and he informed the military congrats on surviving.`)
                let restart = confirm('will you like to restart?')
                if (restart === true) {
                    game()
                }else {
                    alert(`Thank you for playing ${playerName}`)
                }
            }else {
                alert(`why ${playerName}? :(`)
                confirm(`Zombies started catching you lost your pace from lack of energy and you died, no one ever found your body again.`)
                let restart = confirm('will you like to restart?')
                if (restart === true) {
                    game()
                }else {
                    alert(`Thank you for playing ${playerName}`)
                }
            }
        }else{
            alert(`${playerName} you start running to the suburbs and you notice a bigger hoard of zombies when you get there, you hide in the first house that you find.`)
            let gunPathThree = confirm(`${playerName} you hear noises inside the building, do u want to go check?`)
            if (gunPathThree === true) {
                alert(`${playerName} have you not seen scary movies??? dont ever go to bad noises, YOU GOT EATEN ALIVE FROM 10 ZOMBIES DONT ACT LIKE YOU DIDNT SEE IT COMING`)
                let restart = confirm('will you like to restart?')
                if (restart === true) {
                    game()
                }else {
                    alert(`Thank you for playing ${playerName}`)
                }
            }else {
                alert(`${playerName} im sorry you shouldve gone to the mountains your dead because you were trapped and there were 10 zombies upstairs and you got eaten up.`)
                let restart = confirm('will you like to restart?')
                if (restart === true) {
                    game()
                }else {
                    alert(`Thank you for playing ${playerName}`)
                }
            }
        }
    }else {
        let arrowPath = confirm(`${playerName} great choice of weapon, do you even know how to use a bow?(LOL) besides that do u want to head to the suburbs?`)
        if (arrowPath === true) {
            alert(`${playerName} nice you made it to the suburbs you see alot of zombies `)
            let arrowPathTwo = confirm(`${playerName} do u head someplace else?`)
            if (arrowPathTwo === true) {
                alert(`on the way to no where you fell into a hole, and see the queen zombie the one in charge of all this trouble`)
                let killQueen = confirm(`${playerName} i think we know what you must do, kill IT!!!`)
                if (killQueen === true) {
                    alert(`${playerName} you killed the queen and the zombies killed you, you died but you ended the war congrats.`)
                    let restart = confirm('will you like to restart?')
                    if (restart === true) {
                        game()
                    }else {
                        alert(`Thank you for playing ${playerName}`)
                    }
                }else {
                    alert(`${playerName} WHY DIDNT YOU KILL THE QUEEN ARE YOU STUPID?!?! YOU DIED FOR NOTHING, NOOOOTHINGGGG!!!`)
                    let restart = confirm('will you like to restart?')
                    if (restart === true) {
                        game()
                    }else {
                        alert(`Thank you for playing ${playerName}`)
                    }
                }
            }else {
                alert(`you stayed and you died what did you expect?`)
                let restart = confirm('will you like to restart?')
                if (restart === true) {
                    game()
                }else {
                    alert(`Thank you for playing ${playerName}`)
                }
            }
        }else {
            alert(`you kept running and running and your in the moon now, oh yea it was just a dream oh well you won`)
            let restart = confirm('will you like to restart?')
                if (restart === true) {
                    game()
                }else {
                    alert(`Thank you for playing ${playerName}`)
                }
        }
    }
}
game()