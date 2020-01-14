const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'Surf Shop -Home' });
});

/* GET register. */
router.get('/register', (req, res, next)=> {
  res.send('GET /register');
});
/* Post register. */
router.post('/register', (req, res, next)=> {
  res.send('/POST /register');
});

/* GET login. */
router.get('/login', (req, res, next)=> {
  res.send('GET /login');
});

/* Post login. */
router.post('/login', (req, res, next)=> {
  res.send('POST /login');
});

/* get /profile . */
router.get('/profile', (req, res, next)=> {
  res.send('POST /profile');
});

/* PUT /profile/:user_id . */
router.put('/profile/:user_id', (req, res, next)=> {
  res.send('GET /profile/:user_id');
});

/* get /forgot. */
router.get('/forgot', (req, res, next)=> {
  res.send('GET /forgot');
});

/* put /forgot. */
router.put('/forgot', (req, res, next)=> {
  res.send('PUT /forgot');
});
/* GET /reset/:token. */
router.get('/reset/:token', (req, res, next)=> {
  res.send('GET /reset/:token');
});
/* put /reset/token. */
router.put('/reset/:token', (req, res, next)=> {
  res.send('PUT /reset/:token');
});

module.exports = router;
