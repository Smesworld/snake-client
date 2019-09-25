// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  connection = conn;

  stdin.on('data', handleUserInput);

  return stdin;
}

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log(`Thanks for using me, bie!`);
    process.exit();
  } else if (key === "w") {
    console.log(`Key: ${key}, move up!`)
    connection.write('Move: up');
    // for (let i = 0; i < 2; i++) {
    //   setTimeout(() => {
    //     connection.write('Move: up');
    //   }, i*100);
    // }
  } else if (key === "a") {
    console.log(`Key: ${key}, move left!`);
    connection.write('Move: left');
  } else if (key === "s") {
    console.log(`Key: ${key}, move down`);
    connection.write('Move: down');
  } else if (key === "d") {
    console.log(`Key: ${key}, move right`);
    connection.write('Move: right');
  }
}

module.exports = {setupInput};