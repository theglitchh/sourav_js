// user input

const readline = require("readline")
const rl =
 readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let userInput = "";

// question user to enter name
rl.question("What is your name\n", function (string) {
  userInput = string;

  console.log("Your name is " + userInput);

  // close input stream
  rl.close();
});