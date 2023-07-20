// for in loop 

let alient = {
    name: 'alien',
    age: 1000,
    laptop : {
        brand: 'mac',
        price: '$1000'
    }
}

for (let key in alient) {
    console.log(`The ${key} of alien is`, alient[key]);
}