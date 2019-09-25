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
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log(`Thanks for using me, bie!`);
    process.exit();
  } else if (key === "w") {
    console.log(`Key: ${key}, move up!`);
    connection.write('Move: up');
  } else if (key === "a") {
    console.log(`Key: ${key}, move left!`);
    connection.write('Move: left');
  } else if (key === "s") {
    console.log(`Key: ${key}, move down`);
    connection.write('Move: down');
  } else if (key === "d") {
    console.log(`Key: ${key}, move right`);
    connection.write('Move: right');
  } else if (key === "q") {
    console.log(`Key: ${key}, Neh`);
    connection.write('Say: Neh');
  } else if (key === "f") {
    console.log(`Key: ${key}, Noo`);
    connection.write('Say: Noo');
  } else if (key === "e") {
    console.log(`Key: ${key}, Sho`);
    connection.write('Say: Sho');
  } else if (key === "i") {
    console.log(`Key: ${key}, move up!`);
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        connection.write('Move: up');
      }, i * 50);
    }
  } else if (key === "j") {
    console.log(`Key: ${key}, move left!`);
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        connection.write('Move: left');
      }, i * 50);
    }
  } else if (key === "k") {
    console.log(`Key: ${key}, move down!`);
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        connection.write('Move: down');
      }, i * 50);
    }
  } else if (key === "l") {
    console.log(`Key: ${key}, move right!`);
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        connection.write('Move: right');
      }, i * 50);
    }
  }
};

module.exports = {setupInput};