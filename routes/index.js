var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/inventarium', (req, res) => {
  // Send back the full list of items
  db("SELECT * FROM lists ORDER BY id ASC;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});


module.exports = router;
