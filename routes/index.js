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


async function listExists(id) {
  let exists = false;
  try {
    let response = await db(`SELECT * FROM lists WHERE id = ${id}`);
    if (response.data.length === 1) {
      exists = true;
    }
  } catch (err) {}
  return exists;
}

async function itemExists(id) {
  let exists = false;
  try {
    let response = await db(`SELECT * FROM items WHERE id = ${id}`);
    if (response.data.length === 1) {
      exists = true;
    }
  } catch (err) {}
  return exists;
}

function reduceLists(rows) {
  let reduced = [];

  let list = { id: rows[0].l_id, title: rows[0].title };
  let items = [];
  
  for (let row of rows) {
    if (row.l_id !== list.id) {
      list.items = items;
      reduced.push(list);
      list = { id: row.l_id, title: row.title };
      items = [];
    }
    if (row.i_id) {
      items.push({ id: row.i_id, text: row.text, list_id: row.list_id });
    }
  }

  list.items = items;
  reduced.push(list);

  return reduced;
}

// ROUTES

/* GET home page. */
router.get('/inventarium', function(req, res, next) {
  res.send({ title: 'Welcome to the Inventarium' });
});

// get all lists and items
router.get('/inventarium/lists/', (req, res) => {

  db("SELECT lists.id AS l_id, lists.title, items.id AS i_id, items.text, items.list_id FROM lists LEFT JOIN items on lists.id = items.list_id;")
  .then(results => {
    res.send(reduceLists(results.data));
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

// edit list
router.put('/inventarium/lists/:list_id', async (req, res) => {
  let id = req.params.list_id;

  // 404 Check
  if ((await listExists(id)) === false) {
    res.status(404).send({ error: "Not Found" });
    return;
  }
  let { title } = req.body;
  let sql = `UPDATE lists SET title = '${title}' WHERE id = ${id}`;

  try {
    let response = await db(sql); // UPDATE
    // return all lists
    response = await getAllLists();
    res.send(response.data);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

// delete list
router.delete('/inventarium/lists/:list_id', async (req, res) => {
  let id = req.params.list_id;
  // 404 Check
  if ((await listExists(id)) === false) {
    res.status(404).send({ error: "Not Found" });
    return;
  }

  let sql = `DELETE FROM lists WHERE id = ${id}`;

  try {
    let response = await db(sql); // DELETE
    // return all lists
    response = await getAllLists();
    res.send(response.data);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});


// get all items
router.get('/inventarium/lists/items', (req, res) => {
  db("SELECT * FROM items;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

// add items
router.post('/inventarium/lists/items', async (req, res) => {
  let { text, list_id } = req.body;
  let sql = `INSERT INTO items (text, list_id) VALUES ('${text}', ${list_id})`;
  try {
    let response = await db(sql); // INSERT new list
    // return all items
    response = await getAllItems();
    res.status(201).send(response.data);
  } catch (err) {
    res.status(500).send({ error : err.statusText });
  }
});

// edit items
router.put('/inventarium/lists/items/:item_id', async (req, res) => {
  let id = req.params.item_id;

  // 404 Check
  if ((await itemExists(id)) === false) {
    res.status(404).send({ error: "Not Found" });
    return;
  }
  let { text } = req.body;
  let sql = `UPDATE items SET text = '${text}' WHERE id = ${id}`;

  try {
    let response = await db(sql); // UPDATE
    // return all items
    response = await getAllItems();
    res.send(response.data);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

// delete item
router.delete('/inventarium/lists/items/:item_id', async (req, res) => {
  let id = req.params.item_id;
  // 404 Check
  if ((await itemExists(id)) === false) {
    res.status(404).send({ error: "Not Found" });
    return;
  }
  let sql = `DELETE FROM items WHERE id = ${id}`;

  try {
    let response = await db(sql); // DELETE
    // return all items
    response = await getAllItems();
    res.send(response.data);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

module.exports = router;
