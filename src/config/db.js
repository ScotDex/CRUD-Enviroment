import pkg from "pg";
import dotenv from "dotenv"

const { Pool } = pkg;
dotenv.config();

console.log (process.env.HOST);

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DBPORT,

})

pool.on("connect", () => {
    console.log("Connection pool estalished with database");    

});

export default pool;