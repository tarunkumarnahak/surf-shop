
const express = require('express');
const router = express.Router({ mergeParams: true});
/*GET reviews index /posts/id:/reviews*/
router.get('/', (req, res, next) => {
  res.send('INDEX /posts/id:/reviews');
});
/*GET reviews new /posts/id:/reviews/new*/

//router.get('/new', (req, res, next) => {
  //res.send('NEW /posts/id:/reviews/new');
//});
/*review reviews create /posts/id:/reviews*/

router.post('/', (req, res, next) => {
  res.send('CREATE /posts/id:/reviews');
});
/*GET reviews show /reviews/:review_id*/

//router.get('/:review_id', (req, res, next) => {
  //res.send('SHOW /posts/:id/reviews/:review_id');
//});
/*GET reviews edit /reviews/:review_id/edit*/

router.get('/:review_id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/reviews/:review_id/edit');
});
/*PUT reviews update /reviews/:review_id*/

router.put('/:review_id', (req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:review_id');
});
/*DELETE reviews destroy /reviews/:review_id*/

router.delete('/:review_id', (req, res, next) => {
  res.send('DELETE /posts/:id/reviews/:review_id');
});

module.exports = router;

/*
GET index 		/reviews
GET new 		/reviews/new
review create 	/reviews
GET show 		/reviews/:id
GET edit 		/reviews/:id/edit
PUT update 		/reviews/:id 
DELETE destory 	/reviews/:id 
*/
