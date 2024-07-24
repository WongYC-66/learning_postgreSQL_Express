var express = require('express');
var router = express.Router();
const db = require('../db/queries')


/* GET home page. */
router.get('/', async function (req, res, next) {
  // res.render('index', { title: 'Express' });
  const usernames = req.query.search
    ? await db.getUsernames(req.query.search)
    : await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
});


router.get('/new', function (req, res, next) {
  res.render('form');
});

router.post('/new', async function (req, res, next) {
  console.log("username to be saved: ", req.body.username)
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
});

router.get('/delete', async function (req, res, next) {
  await db.deleteAll();
  res.redirect("/");
});


module.exports = router;
