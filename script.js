let name = prompt("What is your name?")
let year = prompt(`Hi ${name} what year would you like to go to?. (YYYY)`)

    if (year >= 2015) {

        let bg = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)");
           
            if (bg = "B") {
                let stayFight = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)");
                     if (stayFight == "S" || "s") {
                        alert("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
                     }

                     else if (stayFight == "R" || "r") {
                                alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
                    }
            } 
            } else { 
  let newName = prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?");
    }