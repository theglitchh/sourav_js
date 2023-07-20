// map in js
// map is a function that takes a function as an argument
// and applies that function to each element in the array
// and returns a new array with the results of the function
// applied to each element

let map = new Map();
map.set("name", "sourav");
map.set("age", 23);
map.set("name1", "sourav1");
map.set("age1", 24);

for (let [key, value] of map) {
    console.log(key + " = " + value);
}