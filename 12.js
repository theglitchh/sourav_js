// nested object 

let alient = {
    name: 'alien',
    age: 1000,
    laptop : {
        brand: 'mac',
        price: '$1000'
    }
}
console.log(alient.laptop.brand);
delete alient.age; // deletes the age property from the object