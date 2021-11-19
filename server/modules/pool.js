const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool({
    database: 'to-do-list',
    host: 'localhost'
});

pool.on('connect', () =>{
    console.log('Postgresql connected');
});

pool.on('error', () =>{
    console.log('Error with postgres pool', error);
});

module.exports = pool;