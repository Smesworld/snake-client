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
  let delay = 25;
  let moves = 6;

  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    connection.write('Move: up');
  } else if (key === "a") {
    connection.write('Move: left');
  } else if (key === "s") {
    connection.write('Move: down');
  } else if (key === "d") {
    connection.write('Move: right');
  } else if (key === "q") {
    connection.write('Say:  Why you do this?');
  } else if (key === "f") {
    connection.write('Say: My food!');
  } else if (key === "e") {
    connection.write('Say: Sho! Be gone fiend!');
  } else if (key === "i") {
    for (let i = 0; i < moves; i++) {
      setTimeout(() => {
        connection.write('Move: up');
      }, i * delay);
    }
  } else if (key === "j") {
    for (let i = 0; i < moves; i++) {
      setTimeout(() => {
        connection.write('Move: left');
      }, i * delay);
    }
  } else if (key === "k") {
    for (let i = 0; i < moves; i++) {
      setTimeout(() => {
        connection.write('Move: down');
      }, i * delay);
    }
  } else if (key === "l") {
    for (let i = 0; i < moves; i++) {
      setTimeout(() => {
        connection.write('Move: right');
      }, i * delay);
    }
  }
};

module.exports = {setupInput};