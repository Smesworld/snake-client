//Import required functions
const { connect } = require('./client');
const { setupInput } = require('./input');

//Establish connection
console.log('Connecting ...');
let connection = connect();

setupInput(connection);