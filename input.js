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
  } else if (key === "w") {
    console.log(`Key: ${key}, move up!`)
  } else if (key === "a") {
    console.log(`Key: ${key}, move left!`);
  } else if (key === "s") {
    console.log(`Key: ${key}, move down`);
  } else if (key === "d") {
    console.log(`Key: ${key}, move right`);
  }
}

module.exports = {setupInput};