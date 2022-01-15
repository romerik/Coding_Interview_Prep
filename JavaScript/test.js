console.log("Hello world");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});*/

rl.question('Enter a string to see it\'s unique character : ', (answer) => {
    console.log('There are :  ');
    for(let character of new Set(answer))
        console.log(character);
    rl.close();
  });