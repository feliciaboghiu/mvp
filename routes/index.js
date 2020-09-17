var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

// Helper Functions

async function getAllLists() {
  let response = null;
  try {
    response = await db("SELECT * FROM lists");
  } catch (err) {}
    return response;
}


async function getAllItems() {
  let response = null;
  try {
    response = await db("SELECT * FROM items");
  } catch (err) {}
  return response;
}


/* GET home page. */
router.get('/inventarium', function(req, res, next) {
  res.send({ title: 'Welcome to the Inventorium' });
});


// get all lists
router.get('/inventarium/lists', (req, res) => {

  db("SELECT * FROM lists;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

// add list
router.post('/inventarium/lists', async (req, res) => {
  let { title } = req.body;
  let sql = `INSERT INTO lists (title) VALUES ('${title}')`;
  try {
    let response = await db(sql); // INSERT new list
    // return all lists
    response = await getAllLists();
    res.status(201).send(response.data);
  } catch (err) {
    res.status(500).send({ error : err.statusText });
  }
});

// get all items
router.get('/inventarium/items', (req, res) => {
  db("SELECT * FROM items;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

// add items
router.post('/inventarium/items', async (req, res) => {
  let { text } = req.body;
  let sql = `INSERT INTO items (text) VALUES ('${text}')`;
  try {
    let response = await db(sql); // INSERT new list
    // return all items
    response = await getAllItems();
    res.status(201).send(response.data);
  } catch (err) {
    res.status(500).send({ error : err.statusText });
  }
});

module.exports = router;
