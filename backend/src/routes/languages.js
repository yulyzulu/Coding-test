const { Router } = require('express');
const router = Router();

const { getLanguages,
  createLanguage,
  getLanguage,
  updateLanguage,
  deleteLanguage } = require('../controllers/languages.controller');

router.route('/')
  .get(getLanguages)
  .post(createLanguage)

router.route('/:id')
.get(getLanguage)
.put(updateLanguage)
.delete(deleteLanguage)

module.exports = router;
