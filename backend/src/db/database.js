import mysql from "mysql2/promise"; 

import config from "./../config.js";

const connection = await mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password
});

const getConnection = () => connection;

export default getConnection;
