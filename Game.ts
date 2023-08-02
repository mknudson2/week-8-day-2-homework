
function battleLogic(character:Character, enemy: Enemy){
    while (character.health > 0 && enemy.health > 0){
        character.attack()
        enemy.defend()

        enemy.attack()
        character.defend()
    }

    if (character.health > 0){
        console.log("Excellent! You have claimed victory! I see your steps are protected.")
    } else console.log("Þér hefir mistekið að ávinna hylli góðana...Nú máttu fara þángað þeim án hamingu!\n (You have failed to acquire the favor of the gods. Now you must journey to them without good fortune).")
}


console.log('====')
console.log('====')
console.log('====')
console.log('')
console.log("Come, children of Heimdall   |      komið, barna heimdals")
console.log("Listen to this tale I tell   |      hlustið á sögu þessu")
console.log("of a certain champion        |      um kapi einn")
console.log("who strove against           |      er stríddi ámóti")
console.log("our enemies and darkness     |      óvinunum og myrkrið")
console.log("                           ...                         ")
console.log('')
console.log("                           ...                         ")
console.log('')
console.log("                           ...                         ")
console.log('')