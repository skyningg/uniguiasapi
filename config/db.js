const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'uniguias',
  password: 'KaiseL2409',
  port: 5433,
});

module.exports = pool;

