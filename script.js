const adventureTime = function(){
    let you = prompt(`One day, while exploring the Candy Kingdom, you find a shiny, glowing gem hidden in the Royal Treasury. What will you do??\n 
    a) reach out and grab the gem.\n
    b) leave the gem and report your discovery to the princess.
    `)
    you = you.toLowerCase()
    if (you.includes('a')){
        let answerA = prompt(`You reach out and grab the gem. As soon as your fingers touch it, a brilliant flash of light surrounds you, and you find yourself in a strange and colorful world. Before you can react, a friendly talking dog named Jake appears by your side... "I'm Jake the Dog, and you must be new here. Wanna go on an adventure?"\n
        What do you do?\n
        a)Accept Jake's invitation and embark on an adventure.\n
        b)Tell Jake you want to go back to where you came from.`)
        if (answerA.includes('a')){
            const answerAa = prompt(`you decide to join Jake on a journey through the Land of Ooo. He introduces you to various quirky and whimsical characters.as well as shows you the racoon gang who have recently stolen Valuable items from the candy people. With your newfound friends by your side you devise a clever plan to outsmart the raccoons and recover the Valuables earning the gratitude of the candy people. as you're basking the cheers and thanks for your new friends Jake returns to you and ask "where should we go next buddy"\n a) Suggest exploring the mysterious Fire Kingdom.\n
            b) Opt for a journey to the ancient Ice Kingdom.
            `)
            if (answerAa.includes('a')){
                let answerAa = prompt(`Jake stretches himself into a fiery steed, allowing you to ride him as you journey toward the Fire Kingdom Upon arrival, you're greeted by Flame Princess, the ruler of the Fire Kingdom. She informs you that a powerful fire elemental has gone rogue, threatening to engulf the entire kingdom in flames. Flame Princess asks for your help in subduing the elemental
                What do you do?
                a)Agree to help Flame Princess and confront the rogue fire elemental.\n
                b)Decide it's too dangerous and suggest an alternative solution.`)
            }else if (answerAa.includes('b')){
                let answerAab = prompt(`You decide to opt for a journey to the ancient Ice Kingdom. Jake stretches himself into a sled, and you embark on a frosty adventure through the icy landscapes of Ooo.As you reach the Ice Kingdom, you're greeted by the eccentric Ice King, who seems distressed. He tells you that his magic crown, which grants him ice powers, has been stolen by a band of mischievous penguins. Without the crown, the Ice Kingdom is in danger of melting.

                What do you do?
                
                a)Agree to help the Ice King recover his stolen crown and save the Ice Kingdom.\n
                b)Decide it's too risky and suggest another plan to deal with the situation.`)
            }
        }else if (answerA.includes('b')){
            confirm(`Uncertain about this strange new world, you decide to tell Jake that you want to go back to where you came from. You're not ready for an adventure in the Land of Ooo just yet.\nJake nods understandingly and says, "No worries, pal. I can help you find your way back." He uses his magical stretching powers to create a portal back to your world.\nAs you step through the portal, you find yourself back in your familiar surroundings. The gem is safely left behind in the Land of Ooo, and you're grateful for the chance to return home.
            
            The End.\n play again?(y/n)`) 
        }
     
    }else if (you.includes('b')){
        let answerAb = confirm(`You rush to report your discovery to Princess Bubblegum. she decides to study the gem's mysterous properties.\n
        Weeks pass, and one day, Princess Bubblegum invites you to her Royal Lab. She has discovered that the gem is connected to an ancient legend of the Enchanted Realm. It is said that whoever possesses the gem can access this magical world.`)
        if (answerAb == true){
            let answerAb = confirm(`After weeks of dedicated work, you make a breakthrough. With great anticipation, you step up to the portal, ready to explore the Enchanted Realm. You take a deep breath, and step through the portal, leaving the Candy Kingdom behind and entering the mystical Enchanted Realm.`)
            if (answerAb == true){
                prompt(`As you step through the portal, the world around you transforms into something entirely different. Taking in the breathtaking scenery, you're overwhelmed with awe and wonder. You're no longer in the Candy Kingdom, but instead, you've entered a realm of pure enchantment.

                Before you can explore further, a soft voice calls out from behind. Turning around, you see a graceful, winged creature with iridescent feathers—an Enchanted Sprite. "It seems fate has guided you here for a purpose. The Enchanted Realm is a place of magic, but also of balance and responsibility. Will you embrace the spirit of this land and help us preserve its harmony?"

                What do you do?\n
                
                a)Agree to assist Seraphina and explore the Enchanted Realm further.\n
                b)Express uncertainty and ask Seraphina for more information before making a decision.`) 
            }
        }
}
}
adventureTime()

