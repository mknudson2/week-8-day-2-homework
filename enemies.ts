interface Attacking { 
    attack(enemyType:string):void 
}

interface Defending {
    defend(enemyType:string):void
}

/* 
=================Creating Base class====================
*/

class Enemy {
    name:string
    health:number 
    attacks: {name:string; minDamage:number, maxDamage:number}[];

    constructor(name: string, health: number, attacks: { name:string; minDamage:number; maxDamage:number }[]) {
        this.name = name
        this.health = health
        this.attacks = attacks
    }
    
    attack(){
        const randomAttack = this.attacks[Math.floor(Math.random() * this.attacks.length)] //random is a point between 0-1(exclusive). Multiply by length of attack array and  use floor division to round the number out and have align with an index.

        const damage = Math.floor(Math.random() * (randomAttack.maxDamage - randomAttack.minDamage + 1)) + randomAttack.minDamage;
        console.log(`${this.name} ${randomAttack.name}. They inflict ${damage} damage!`);

        return damage
      }

    defend(){}
}



/* 
=================Creating enemy classes=================
*/

// class Draugr extends Enemy {
    
//     constructor(name:string, health:number){
//         super(name, health)
//     }
    
//     attack(){}
// }

//seeing as most enemies have the same basic characteristics for this(i.e., attack, defense, health, gold carried) I am not sure if I really need to make individual classes for each and can just take care of it at instantiation...what is the downside to doing this?

/* 
================Creating attack/defense classes================
*/

const draugrAttacks =[
    {name: "slashes with an ancient sword", minDamage: 15, maxDamage: 25},
    {name: "haunts you. It doesn't do much, but you won't sleep for weeks now!", minDamage: 1, maxDamage: 2},
    {name: "attempts to drag you into the river. Luckily, he fails, but the struggle took its toll", minDamage: 10, maxDamage: 17},
    {name: "hits you with his corporeal fist. Man, those bones are sharp!", minDamage: 7, maxDamage: 18}
]

const vitkiAttacks=[
    {name: "cries 'Þér vitkast!' (which you come to find means that you were bewitched). Stupid wizard makes you hit yourself", minDamage: 15, maxDamage: 25},
    {name: "invokes a torrent of angry ravens through seiðmagnan", minDamage: 15, maxDamage: 20},
    {name: "calls a bear on you. Great, just what you need...", minDamage: 20, maxDamage: 30},
    {name: "throws a turnip at you.", minDamage: 2, maxDamage: 8}

]

const úlfhédinnAttacks = [
    {name: "bites you.", minDamage: 10, maxDamage: 20},
    {name: "rushes you and, while you manage to get free, you are left the worse for it.", minDamage: 12, maxDamage: 22},
    {name: "drunkenly swings his mighty axe. Thankfully, his inebriation throws off his aim, but it's still a BIG axe.", minDamage: 20, maxDamage: 30},
    {name: "howls in madness. No physical damage, but psycologically...well, you might need to see someone about it.", minDamage: 2, maxDamage: 5}

]

const ormrAttacks = [
    {name: "spews poison at you.", minDamage: 13, maxDamage: 23},
    {name: "slams his massive body against you.", minDamage: 15, maxDamage: 25},
    {name: "bites you. Thankfully, you miss the worst of it and avoid being skewered", minDamage: 15, maxDamage: 25},
    {name: "thrashes about, causing the earth to shake and you to fall. Only minor damage", minDamage: 2, maxDamage: 5}

]

const álfrAttacks = [
    {name: "throws rocks at you.", minDamage: 10, maxDamage: 15},
    {name: "attempts to drag you down into álfaheimrinn beneath the ground. You escape their grasp, but not without a struggle.", minDamage: 12, maxDamage: 20},
    {name: "steals your favorite snack, which you were saving for later. Now you're sad...", minDamage: 2, maxDamage: 5},
    {name: "calls up the subterranean cow-people to trample you.", minDamage: 18, maxDamage: 26}

]

const andiAttacks = [
    {name: "grants you visions of Gisli's evil dream-women. You feel madness begin to tug at your hugr (mind and spirit)", minDamage: 10, maxDamage: 20},
    {name: "blinds you, causing you to hurt yourself", minDamage: 10, maxDamage: 20},
    {name: "incites memories of your failures. No physical damage, but the mental anguish is weighty", minDamage: 5, maxDamage: 8},
    {name: "attacks with the fylgar of your fallen enemies.", minDamage: 20, maxDamage: 30}
]

const draugr1 = new Enemy("Skarpheðinn", 120, draugrAttacks)
const draugr2 = new Enemy("Helgi Hundingsbani", 150, draugrAttacks)
const draugr3 = new Enemy("Grotti", 130, draugrAttacks)

const vitki1 = new Enemy("Kotkell", 100, vitkiAttacks)
const vitki2 = new Enemy("Gróa", 140, vitkiAttacks)
const vitki3 = new Enemy("Bróðr", 160, vitkiAttacks)

const úlfhéðinn1 = new Enemy("Egill Skallagrímsson", 160, úlfhédinnAttacks)
const úlfhéðinn2 = new Enemy("Skallagrímr", 150, úlfhédinnAttacks)
const úlfhéðinn3 = new Enemy("Bǫðvarr Bǫðvasson", 200, úlfhédinnAttacks)

const ormr1 = new Enemy("Ormrinn langi", 150, ormrAttacks)
const ormr2 = new Enemy("Nighǫggr", 150, ormrAttacks)
const ormr3 = new Enemy("Jǫrmungandr", 200, ormrAttacks)

const álfr1 = new Enemy("Alvís", 80, álfrAttacks)
const álfr2 = new Enemy("Eitri", 100, álfrAttacks)
const álfr3 = new Enemy("Ivaldi", 120, álfrAttacks)

const andi1 = new Enemy("Lodfafnir", 60, andiAttacks)
const andi2 = new Enemy("Magnus Berfœtr", 80, andiAttacks)
const andi3 = new Enemy("Gísli Sursson", 160, andiAttacks)

draugr1.attack()
vitki1.attack()
úlfhéðinn1.attack()
ormr1.attack()
álfr1.attack()
andi1.attack()



