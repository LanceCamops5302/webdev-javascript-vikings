// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
            this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > damage) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {


    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
         this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
   }

   vikingAttack(){
       let S = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]; 
       let D = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        let hit = S.receiveDamage(D.attack(D.damage));

       if(S.health <= 0){
        this.saxonArmy.splice(S,1)     
     }

     return hit
   }

   saxonAttack(){
    let S = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]; 
    let D = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

     let hit = S.receiveDamage(D.attack(D.damage));

    if(S.health <= 0){
     this.vikingArmy.splice(S,1)     
  }

  return hit
}
    showStatus(){
        if(this.vikingArmy.length == 0){
            return `Saxons have fought for their lives and survive another day...`
        }
        else if(this.saxonArmy.length == 0){
            return `Vikings have won the war of the century!`
        }
        else{
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
