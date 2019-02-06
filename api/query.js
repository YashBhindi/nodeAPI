const Pool = require('pg').Pool
const pool = new Pool({
  user: 'yash',
  host: 'localhost',
  database: 'api',
  password: 'argusadmin',
  port: 5432,
});


module.exports = pool;