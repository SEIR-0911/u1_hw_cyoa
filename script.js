//request Name from user
let userName = prompt("What is your name?");
alert("Hello " + userName);

let gameChoice = prompt('Would you like to adventure through the Forrest, Mountains, Tropical Beaches , or Desert?');
if (gameChoice === `Forrest` || gameChoice === `forrest` ) {
    let forrestChoice = prompt('You are hiking through the Forrest and come across a fork in the road. Do you go along the marked trail  or unmarked trail?');
        if (forrestChoice === `marked` || forrestChoice === `marked trail`) {
            let markedTrail = prompt (`You follow the trail to your campsite and set up camp.would you like to start a fire?`);
                if (markedTrail === `yes`) {
                    let fire = prompt (`You start a fire and cook dinner. You eat, then lay down to rest after your adventure. Would you like to restart your adventure?`);
                        if (fire === `yes`) {
                            location.reload();
                        } else if (fire === `no`) {
                            alert(`Thank you for playing ${userName}!`);
                            location.reload();
                        }
                } else if (markedTrail === `no`) {
                    let noFire = prompt (`You lay down to rest after your adventure. Would you like to restart your adventure?`);
                        if (noFire === `yes`) {
                            location.reload();
                        } else if (noFire === `no`) {
                            alert(`Thank you for playing ${userName}!`);
                            location.reload();
                        }
                }
    } else if (forrestChoice === `unmarked` || forrestChoice === `unmarked trail`) {
        let unmarkedTrail = prompt (`You get lost from the  trail and set up camp in a clearing. Would you like to start a fire?`);
            if (unmarkedTrail === `yes`) {
                let fire = prompt (`You start a fire but a rain begins and you are unable to make food. You go to sleep wet and hungry.  Would you like to restart your adventure?`);
                    if (fire === `yes`) {
                        location.reload();
                    } else if (fire === `no`) {
                        alert(`Thank you for playing ${userName}!`);
                        location.reload();
                    }
            } else if (unmarkedTrail === `no`) {
                let noFire = prompt (`You lay down to rest after your adventure. Would you like to restart your adventure?`);
                    if (noFire === `yes`) {
                        location.reload();
                    } else if (noFire === `no`) {
                        alert(`Thank you for playing ${userName}!`);
                        location.reload();
                    }
            }
    } else {
        alert("Please enter a valid option");
        location.reload();
    }

} else if (gameChoice === `Mountains` || gameChoice === `mountains` ) {
    let mountainsChoice = prompt(`You are hiking in the mountains, do you head up towards the peak or down towards the valley?`);
        if (mountainsChoice === `peak` || mountainsChoice === `up`) {
            let mountainsChoice = prompt('You meet another hiker headed up towards the peak, he asks you for some supplies. How many supplies do you give him? Enter a number or type none');
                if (mountainsChoice >= 1 || mountainsChoice <=10) {
                    let supply = prompt (`You give the hiker ${mountainsChoice} supplies and continue on your way. will you continue to the peak with limited supplies or head back down?`);
                        if (supply === `peak` || supply === `up` || supply === `continue` || supply === `continue to peak` || supply === `yes`) {
                            let peak = prompt (`You reach the peak and take in the view. You decide to head back down the mountain. Would you like to restart your adventure?`);
                                if (peak === `yes`) {
                                    location.reload();
                                } else if (peak === `no`) {
                                    alert(`Thank you for playing ${userName}!`);
                                    location.reload();
                                }
                        } else if (supply === `valley` || supply === `down`) {
                            let valley = prompt (`You head back down the mountain. Would you like to restart your adventure?`);
                                if (valley === `yes`) {
                                    location.reload();
                                } else if (valley === `no`) {
                                    alert(`Thank you for playing ${userName}!`);
                                    location.reload();
                                }

                        }
                } else if (mountainsChoice === `none` || mountainsChoice === `no` || mountainsChoice === `0`) {
                    let supply = prompt (`You give the hiker no supplies and continue on your way. This upsets the other hiker and he steals your backpack. You head back down the mountain. Would you like to restart your adventure?`);
                    location.reload();
                }

        } else (mountainsChoice === `valley` || mountainsChoice === `down`); {
            let valley = prompt (`You follow the valley down to the river. Do you want to go fishing?`);
                if (valley === `yes`|| valley === `y`) { 
                    let fishing = prompt (`You catch a fish and cook it over a fire. You eat, then lay down to rest after your adventure. Would you like to restart your adventure?`);
                        if (fishing === `yes`) {
                            location.reload();
                        } else if (fishing === `no`) {
                            alert(`Thank you for playing ${userName}!`);
                            location.reload();
                        }
                } else if (valley === `no` || valley === `n`) {
                    let noFishing = prompt (`You sit by the river to rest after your adventure. Would you like to restart your adventure?`);
                        if (noFishing === `yes`) {
                            location.reload();
                        } else if (noFishing === `no`) {
                            alert(`Thank you for playing ${userName}!`);
                            location.reload();
                        }
                }

        }
    
    } else if (gameChoice === `Tropical Beaches` || gameChoice === `tropical beaches` ) {
        let seaShells = prompt(`You are walking along the beach and find a sea shell. Do you pick it up?`);
            if (seaShells === `yes`|| seaShells === `Yes`){
                let seaShell = prompt (`You pick up the sea shell and hear a voice. It is a mermaid! She asks you to join her in the sea. Do you join her?`);
                    if (seaShell === `yes`|| seaShell === `y`) {
                        let mermaid = prompt (`You join the mermaid in the sea and she takes you to her underwater kingdom to live forever. Would you like to restart your adventure?`);
                            if (mermaid === `yes`) {
                                location.reload();
                            } else if (mermaid === `no`) {
                                alert(`Thank you for playing ${userName}!`);
                                location.reload();
                            }
                    } else if (seaShell === `no` || seaShell === `n`) {
                        let noMermaid = prompt (`You leave the sea shell and continue walking along the beach. You find a cave, do you explore it?`);
                            if (noMermaid === `yes`) {
                                let cave = prompt (`You enter the cave and find a treasure chest. Do you open it?`);
                                    if (cave === `yes`|| cave === `y`) {
                                        let treasure = prompt (`You open the treasure chest and find gold! You take the gold and head home. Would you like to restart your adventure?`);
                                            if (treasure === `yes`) {
                                                location.reload();
                                            } else if (treasure === `no`) {
                                                alert(`Thank you for playing ${userName}!`);
                                                location.reload();
                                            }
                                    }
                            } else (noMermaid === `no`); {
                                alert(`Thank you for playing ${userName}!`);
                                location.reload();
                            }
                    }
            }
        
        }else if (gameChoice === `Desert` || gameChoice === `desert` ) {
            let desertChoice = prompt(`You are hiking in the desert, do you head towards the oasis or the mountains?`);
            switch(desertChoice) {
                case `oasis`:
                    alert(`You find an oasis and drink some water. You lay down to rest after your adventure. Let's find somewhere else to adventure!`);
                    location.reload();
                    break;
                case `mountains`:
                    alert(`You head towards the mountains and find a cave. you enter to escape the heat of the desert. lets find somewhere else to adventure!`);
                    location.reload();
                    break;
                default: alert (`this desert is too hot, lets find somewhere else to adventure!`);
            }    
            
            } else {
                alert(`${userName}, Please enter a valid option`);
                location.reload();
            }  
