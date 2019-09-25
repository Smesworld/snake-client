//Import required functions
const { connect } = require('./client');

//Establish connection
console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
}

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log(`Thanks for using me, bie!`);
    process.exit();
  }
}

setupInput();