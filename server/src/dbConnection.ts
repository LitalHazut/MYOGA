import mysql from 'mysql';

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'accounts',
});

export default dbConnection;
