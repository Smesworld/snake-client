const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  // create 'connect' callback
  conn.on('connect', () => {
    // notify we are connected
    console.log("We are connected!");
    // set snek name on server
    conn.write('Name: BFS');
  });

  // // move
  // conn.on('connect', () => {
  //   for (let i = 0; i < 4; i++) {
  //     setTimeout(() => {
  //       conn.write('Move: up');

  //     }, i*100);
  //   }    
  // });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = {connect};