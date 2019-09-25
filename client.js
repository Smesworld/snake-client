const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // create 'connect' callback
  conn.on('connect', () => {
    // notify we are connected
    console.log("We are connected!");
    // set snek name on server
    conn.write('Name: BFS');
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = {connect};