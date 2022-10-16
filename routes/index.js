const express = require('express');
const format = require('date-fns/format');
const router = express.Router();

const messages = [
     {
          text: 'Hi there!',
          user: 'Amando',
          added: new Date(),
     },
     {
          text: 'Hello World!',
          user: 'Charles',
          added: new Date(),
     },
];

/* GET board index */
router.get('/', function (req, res, next) {
     res.render('index', {
          title: 'Mini Message Board',
          messages: messages,
          format: format,
     });
});

/* GET new message form */
router.get('/new', function (req, res, next) {
     res.render('form');
});

/* POST new message */
router.post('/new', function (req, res, next) {
     messages.push({
          text: req.body.message,
          user: req.body.author,
          added: new Date(),
     });
     res.redirect('/');
});

module.exports = router;
