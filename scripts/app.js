/*Design spacehship class with attack method(?). If math.random  >= accuracy
the spaceship can hit with message?*/

class SpaceShip {
    constructor(name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
};

/*Extend spaceship
Extend alien ships
Add methods for player / aliens to attack based on accuracy. Separate
methods for player and aliens?*/

class Player extends SpaceShip {
    constructor(name, hull, firepower, accuracy) {
        super('USS Assembly', 20, 5, .7)
    }
    attack(){
        console.log(`${this.name} attacks`)
    }
};

class Alien extends SpaceShip {
    constructor(name, hull, firepower, accuracy) {
        super(name, hull, firepower, accuracy)
    }
    attack(){
        console.log(`${this.name} attacks`)
    }
};


let player = new Player();
let alien1 = new Alien('Alien1', 5, 4, .8);
let alien2 = new Alien('Alien2', 3, 3, .6);
let alien3 = new Alien('Alien3', 4, 2, .6);
let alien4 = new Alien('Alien4', 6, 3, .7);
let alien5 = new Alien('Alien5', 5, 3, .6);
let alien6 = new Alien('Alien6', 4, 4, .7);

// player.attack();
// alien1.attack();

//Create attack loop
    //While ships both have hulls attack
    //If ship beats alien, add prompt to attack or retreat
    //Iterate to next alien and restart attack sequence
//Add attack or retreat prompt

const alienShips = [alien1, alien2, alien3, alien4, alien5, alien6];

//If player attacks and hits, alien loses hull. If player misses, alien attacks
//If alien hits and hits, player loses hull. If alien misses, player attacks
// for (let i = 0; i < alienShips.length; i++){
//     if(player.hull > 0 && alienShips[0].hull > 0) {
//         player.attack() 
//         if(Math.random() >= player.accuracy){
//             console.log(`${player.name} has caused ${player.firepower} damage!`)
//             alienShips[0].hull -= player.firepower
//         } else {
//             console.log(`${player.name} misses.`)
//         }
//         console.log(alienShips[0]);
//         alienShips[0].attack() 
//         if(Math.random() >= alienShips[0].accuracy){
//             console.log(`${alienShips[0].name} has caused ${alienShips[0].firepower} damage!`)
//             player.hull -= alienShips[0].firepower
//         } else {
//             console.log(`${alienShips[0].name} misses.`)
//         }
//         console.log(player);
//     }

// }

for (let i = 0; i < alienShips.length; i++){
    while (player.hull > 0 && alienShips[i].hull > 0) {
        player.attack()
        if(Math.random() >= player.accuracy){
            console.log(`${player.name} has caused ${player.firepower} damage!`)
            alienShips[0].hull -= player.firepower
        } else {
            console.log(`${player.name} misses.`)
        }
            console.log(alienShips[i]);
            alienShips[0].attack() 
        if(Math.random() >= alienShips[i].accuracy){
            console.log(`${alienShips[i].name} has caused ${alienShips[0].firepower} damage!`)
            player.hull -= alienShips[i].firepower
        } else {
            console.log(`${alienShips[i].name} misses.`)
        }
            console.log(player);
    }
}