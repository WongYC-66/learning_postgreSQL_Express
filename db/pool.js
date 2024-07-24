const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

// module.exports = new Pool({
//   host: "localhost", // or wherever the db is hosted
//   user: "admin1",
//   database: "top_users",
//   password: "admin1",
//   port: 5432 // The default port
// });

// alternative using connetion URI
// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING
});
