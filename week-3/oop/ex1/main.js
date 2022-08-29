class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.children = [];
  }

  giveBirth(name) {
    this.children.push(name);
  }
}

const dog = new Animal("doa", 4);
console.log(dog.name);

class Human {
  constructor(name, age, isFriendly) {
    this.name = name;
    this.age = age;
    this.isFriendly = isFriendly;
  }
}
/* 
const human = new Human("omer", 36, true);
console.log(human); */

const cat = new Animal("doa", 4);
cat.giveBirth("Dolly");
console.log(cat.children); // should print an array with 1 item: ["Dolly"]

class Vehicle {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this._speed = speed;
    this_fuel = 0;
    Vehicle.carsSold++;
  }
  static getInfo() {
    console.log("We've sold " + Vehicle.carsSold + " vehicles.");
  }

  static calculateMoney() {
    this.money = this.carsSold * 30000;
    console.log(this.money);
  }

  set speed(speed) {
    if (speed < 0) {
      return console.log("Speed must be positive");
    }
    this._speed = speed;
  }

  get speed() {
    return this._speed;
  }

  set fuel(fuel) {
    if (fuel < 0 || fuel > 150) {
      return console.log("Fuel value is incorrect");
    }
    this._fuel = fuel;
  }

  get speed() {
    return this._fuel;
  }
}

Vehicle.carsSold = 0;

const car1 = new Vehicle(1, 2, 120);
Vehicle.getInfo();
const car2 = new Vehicle(1, 2, 120);

Vehicle.getInfo();
Vehicle.calculateMoney();
