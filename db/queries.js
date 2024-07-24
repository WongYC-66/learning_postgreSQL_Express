const pool = require("./pool");

async function getAllUsernames() {
  console.log('getting all')
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getUsernames(name) {
  console.log('searching')
  const { rows } = await pool.query("SELECT * FROM usernames WHERE username LIKE $1 ", ['%' + name + '%']);
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
  //alternatively
  //   await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");

}

async function deleteAll() {
  console.log('deleting')
  await pool.query("DELETE FROM usernames");
  // return rows;
}

module.exports = {
  getAllUsernames,
  getUsernames,
  insertUsername,
  deleteAll
};