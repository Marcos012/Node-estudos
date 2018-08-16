const readline = require('readline')
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Fala tu, qual teu nome?', (answer) => {
  console.log('É noix', answer)
  rl.close();
})