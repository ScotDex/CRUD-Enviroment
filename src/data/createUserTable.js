import pool from "../config/db.js";

const createUserTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY, 
    name varchar(100) NOT NULL,
    email varchar(100) unique NOT NULL,
    created_at timestamp default now ()
)`;


try {
    pool.query(queryText);
    console.log("User table created if not exists")

} catch (error){
    console.log("Error creating users table: ", error)
};

};
export default createUserTable;