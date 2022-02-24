const { Router } = require('express');
const { get, route } = require('../app');
const router = Router();

router.route('/')
  .get((req, res) => res.json({message: 'Get Request'}))
  .post((req, res) => res.send({message: 'Post Request'}))

// route.route('/:id')
//   .get()
//   .put()
//   .delete()

module.exports = router;
