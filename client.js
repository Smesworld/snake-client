const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  // notify that we are connected
  conn.on('connect', () => {
    console.log("We are connected!");
  });

  // set snek name
  conn.on('connect', () => {
    conn.write('Name: BFS');
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = {connect};