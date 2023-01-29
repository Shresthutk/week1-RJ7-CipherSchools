class Animal {
    noOfLegs;
    color;
    family;
    sound;
  
    constructor(noOfLegs, color, family, sound) {
      this.noOfLegs = noOfLegs;
      this.color = color;
      this.family = family;
      this.sound = sound;
    }

    showAnimal() {
        console.log(`The animal belongs to family: ${this.family}`);
      }
}

let animal = new Animal(4, "brown", "rodent", "Phew Phew");
animal.showAnimal();