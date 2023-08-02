/* 
First, we create our interfaces that will globally adhere to all characters 
while still allowing their, respectively, attacks and defences to be unique to 
their class. Hence, why we leave the interface as ():void. However, we do use the argument
of CharName so that the character's name might be passed in to the string literal that occurs
in the console.log of each attack/defense class.
 */
interface Attacking { 
    attack(CharName:string):void 
}

interface Defending {
    defend(CharName:string):void
}

/* 
Now, create parent class, which includes the inherited elements of name and gold.
This allows all characters,regardless of class, to inherit the ability to have a 
name as well as to collect gold. The method for collecting gold is laid out 
(each character starts at 0 but collects gold by adding an amount to their base value).
The attack and defend interfaces are also included as all clases will be able to attack and
defend, although the individual values are determined by the character class and not the parent
class of Character (e.g., Ogre attacks with club while a knight uses a sword.)
 */

class BaseCharacter {
    name: string
    gold: number

    constructor(name:string){
        this.name = name
        this.gold = 0
    }

    collectGold(amount:number){
        if (amount> 0){
            this.gold += amount
            console.log(`${this.name} has collected ${amount} gold. They now have ${this.gold} gold!`)
        } else {
            this.gold -= amount
            console.log(`Tröllinar! ${this.name} lost ${amount} gold. Now they only have ${this.gold}gold left.`)
        }

        }
        

    attack(){}

    defend(){}
}

/* 
Next, we create the attack and defense classes that the various character classes will 
pull from. This is done since more than one character can have the same attack or defense
mechanism. Furthermore, this allows a character to adapt and become a member of a different
class should they lose their weapon or defense element. Instead of writing everything out 
in each character's description, they can instead be instantiated as a new member of a 
certain class. Allows it to be more dynamic with less hard-coding.
*/

class ClubAttack implements Attacking{
    attack(CharName:string):void {
        console.log(`${CharName} is attacking with a club!`)
    }
}

class SwordAttack implements Attacking{
    attack(CharName:string):void {
        console.log(`${CharName} is attacking with a sword!`)
    }
}

class BowAttack implements Attacking{
    attack(CharName:string): void {
        console.log(`${CharName} attacks with a bow and arrow!`)
    }
}

class ShieldDefense implements Defending{
    defend(CharName:string): void {
        console.log(`${CharName} defends themselves with their shield!`)
    }
}

class ArmorDefense implements Defending{
    defend(CharName:string): void {
        console.log(`${CharName} is protected by their armor!`)
    }
}

class TunicDefense implements Defending{
    defend(CharName:string): void {
        console.log(`${CharName}'s tunic protects them...somewhat...`)
    }
}

/* 
Having created the attack/defense classes, we now make the individual character classes that
both inherit from BaseCharacter (name and ability to collect gold) and are instantiated as 
instances of an attack and defense class.
*/

class Ogre extends BaseCharacter{
    constructor(name:string){
        super(name)
    }

    attack(): void {
        const ogreAttack = new ClubAttack()
        ogreAttack.attack(this.name)
    }

    defend(): void {
        const ogreDefense = new ShieldDefense()
        ogreDefense.defend(this.name)
    }
}

class Peon extends BaseCharacter{
    constructor(name:string){
        super(name)
    }

    attack(): void {
        const peonAttack = new ClubAttack()
        peonAttack.attack(this.name)
    }

    defend(): void {
        const peonDefense = new ShieldDefense()
        peonDefense.defend(this.name)
    }
}

class Knight extends BaseCharacter{
    constructor(name:string){
        super(name)
    }

    attack(): void {
        const knightAttack = new SwordAttack()
        knightAttack.attack(this.name)
    }

    defend(): void {
        const knightDefense = new ArmorDefense()
        knightDefense.defend(this.name)
    }
}

class Archer extends BaseCharacter{
    constructor(name:string){
        super(name)
    }

    attack(): void {
        const archerAttack = new BowAttack()
        archerAttack.attack(this.name)
    }

    defend(): void {
        const archerDefense = new TunicDefense()
        archerDefense.defend(this.name)
    }
}

/* 
===================TESTING=======================
 */

const ogre = new Ogre("Grendel")
const peon = new Peon("Æðelwīne")
const knight = new Knight("Kjartan")
const archer = new Archer("Bendigeidfran")


ogre.attack()
peon.defend()
knight.collectGold(60)
archer.defend()
archer.collectGold(-10)


/* 
===================FURTHER TESTING=======================
 */

/* Enemies
draugr
vitki
Seiðberendi
Úlfhédinn
Ormr
Álfr
Andi */

