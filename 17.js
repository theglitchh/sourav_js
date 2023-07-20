// this in javascript
// this is a keyword that refers to the object that it belongs to.
// this is not a variable, it is a keyword, and its value cannot be changed.
// this keyword in a method
let laptop1 = {
    brand: "asus",
    model: "tuf",
    price: 50000,
    color: "black",
    // method
    greet: function(){
        console.log(`Welcome to ${this.brand} service center`);
    }
}

let laptop = {
    brand: "HP",
    model: "Pavilion",
    price: 45000,
    color: "Silver",
    // method
    greet: function(){
        console.log(`Welcome to ${this.brand} service center`);
    }
}

laptop.greet();