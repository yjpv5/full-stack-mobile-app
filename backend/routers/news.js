const express = require('express');
const router = express.Router();
const { createNews, getAllNews, getSingleNews, getNewsByCategoty } = require('../controllers/news');
const uploads = require('../middleware/multer');
const { validator, result, validateFile } = require('../middleware/validator');


router.post('/create', uploads.single('thumbnail'), validator, result, validateFile, createNews);

router.get('/news', getAllNews);

router.get('/news/single/:id', getSingleNews);

router.get('/news/:category', getNewsByCategoty);

module.exports = router;