
alert('Hansel & Gretel You and your younger sister have taken the path of no return as you’ve been forced from your home forever by your tyrannical stepmom. Wandering through the forest, you long for your childhood home, knowing the journey ahead. As you continue walking, you notice the paths start shifting. One riddles the floor with vines, one has trees of snow, and another is a path made of pink bricks. Which do you choose?')
let path = prompt("You have three paths to choose from: vines, trees of snow, pink bricks. Which do you choose?")

switch (path) {

    case "vines":
        let action = confirm("The greenery around you is transforming. You and your sister are stepping through vines and they’re becoming thicker by the foot. Gretel tells you she’s tired, and it’s also getting dark out. Keep walking?")

        if (action) {
            let brightLight = confirm("You saw something bright and shiny. Do you want to approach it?")

            if (brightLight) {
                let knockOrEat = prompt("You found a gingerbread house! Do you want to knock on the door (1) or start eating the house (2)?");

                if (parseInt(knockOrEat) === 1) {
                    alert("You knock on the door and an older lady answers. She hears your story and helps you on your way with supplies and goodies! The End!");
                } else {
                    alert("You chomp on anything in sight as it’s all edible! A sweet voice calls out from a few feet of the gingerbread wall you’re chomping on. The older lady invites you guys inside… bad idea… she tries to kill you! You’re trapped in the gingerbread house forever!");
                }
            } else {
                alert("Bye-bye!");
            }
        } else {
            alert("You guys are famished and having been walking through the forest, you and your sister decide to take a rest. Hours turn to days and by the time you wake up. You and Gretel are captured by men and traded away for gold! Bye-bye!")
        }
        break

    case "trees of snow":
        let tasteSugar = confirm("You and your sister are running through the trees of snow and when you put your tongue out to taste the ‘snow’ you realize its actually sugar! The further you go in, the stronger the sugar tastes. Deviate off path or go to the stronger sugar?")

        if (tasteSugar) {
            alert("You and your sister go off the path and can’t find your way back. You eventually end up living there for years, and over time, it seems that everyone who deviates off the path is led to the lost spot where you are, and you guys form a civilization and live happily! The End!");
        } else {
            alert("You decide to stick to the path of sugar trees, but as you go further, it becomes too sweet to handle. You and Gretel continue until you can't bear the sweetness anymore, and your adventure ends.")
        }
        break

    case "pink bricks":
        let followBricks = confirm("You and your sister decide to follow the path of pink bricks. It seems to be leading you deeper into the forest. Do you want to keep following the pink bricks or turn back?");

    if (followBricks) {
        alert("You continue to follow the path of pink bricks, and it leads you to a colorful and enchanting candyland! You and Gretel have a wonderful time exploring and indulging in the delicious candies. The residents of candyland welcome you, and you both live happily ever after! The End!");
    } else {
        alert("You decide to turn back from the path of pink bricks and return to the forest. As you venture deeper into the woods, you encounter a group of friendly woodland creatures who offer to guide you home. With their help, you and Gretel eventually find your way back home safely! The End!");
    }
        break

    default:
        alert("Invalid path! Please select from the given options.")
}

//it was working when i did it but now coming back to it i dont remember what went wrong




