const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'jrshields86',
    password: 'Bl@ckonyx86',
    host: 'localhost',
    port: 5432,
    database: 'perntodo_db'
});

module.exports = pool;