const Pool = require("pg").Pool;
// require("dotenv").config();
// const pool = new Pool(
//     {
//         connectionString: process.env.DB_URL,
//         ssl: {
//             rejectUnauthorized: false}
//     }
//     );

// Configuring for PostgreSQL Database connection;
// //const pool = new Pool(process.env.DB_URL); // Configuring for PostgreSQL Database connection;

// module.exports = pool;


// const isProduction = process.env.NODE_ENV === "production";

// const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const pool = new Pool({connectionString: process.env.DB_URL, ssl: {rejectUnauthorized: false}});


// const pool = new Pool({
//     connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  
//     ssl: {
//         rejectUnauthorized: false,
//     },
// });
module.exports = pool;
