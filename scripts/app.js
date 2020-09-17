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

//Create alien array attack loop
    //While ships both have hulls attack
    //If ship beats alien, add prompt to attack or retreat
    //Iterate to next alien and restart attack sequence

const alienShips = [alien1, alien2, alien3, alien4, alien5, alien6];

//If player attacks and hits, alien loses hull. If player misses, alien attacks
//If alien hits and hits, player loses hull. If alien misses, player attacks

for (let i = 0; i < alienShips.length; i++){
    while (player.hull > 0 && alienShips[i].hull > 0) {
        player.attack()
        if(Math.random() >= player.accuracy){
            console.log(`${player.name} has caused ${player.firepower} damage!`)
            alienShips[i].hull -= player.firepower
        } else {
            console.log(`${player.name} misses.`)
        }
            console.log(alienShips[i]);
            alienShips[i].attack() 
        if(Math.random() >= alienShips[i].accuracy){
            console.log(`${alienShips[i].name} has caused ${alienShips[i].firepower} damage!`)
            player.hull -= alienShips[i].firepower
        } else {
            console.log(`${alienShips[i].name} misses.`)
        }
            console.log(player);
        
    }
    //Prompt to continue or end game
    if(alienShips[i].hull <= 0){
        let gameStatus = prompt("Would you like to attack or retreat")
        if(gameStatus === "attack"){
            continue
        }  else if(gameStatus === "retreat"){
            alert("Game over")
        }
    }
    break
}

/*
Current issues:
1. Aliens attack after death
2. Accuracies are not working
3. Attack functions need major refactoring
*/