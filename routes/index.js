const express = require('express');
const format = require('date-fns/format');
const router = express.Router();

const colors = [
     '#b58900',
     '#cb4b16',
     '#dc322f',
     '#d33682',
     '#6c71c4',
     '#268bd2',
     '#2aa198',
     '#859900',
];

const messages = [
     {
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, in!',
          user: 'Amando',
          added: new Date(),
          color: colors[Math.floor(Math.random() * colors.length)],
     },
     {
          text: 'Hello World!',
          user: 'Charles',
          added: new Date(),
          color: colors[Math.floor(Math.random() * colors.length)],
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
          color: colors[Math.floor(Math.random() * colors.length)],
     });
     res.redirect('/');
});

module.exports = router;
