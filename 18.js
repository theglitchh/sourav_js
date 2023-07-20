// constructor function in javascript
// constructor function is a function that is used to create objects.
// constructor function is a blueprint for creating objects.

function Alien (name, tech){
    this.name = name;
    this.tech = tech;
    this.getDetails = ()=> {
        console.log(`${this.name} is expert in ${this.tech}`);
    }
}
let alien1 = new Alien("Sourav", "Javascript");
let alien2 = new Alien("Rahul", "Python");

console.log(alien1);
alien1.getDetails();
alien2.getDetails();