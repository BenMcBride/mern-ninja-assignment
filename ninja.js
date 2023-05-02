class Ninja {
  constructor(name, health = 100, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName() {
    console.log('Ninja name: ' + this.name);
  }

  showStats() {
    console.log('Ninja name: ' + this.name)
    console.log('Ninja health: ' + this.health)
    console.log('Ninja speed: ' + this.speed)
    console.log('Ninja strength: ' + this.strength)
  }

  drinkSake() {
    this.health += 10;
  }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();