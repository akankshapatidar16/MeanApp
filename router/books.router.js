const express = require('express')
const books = require('../controller/books.controller')
const router = express.Router();

router.get('/all', (books.getAllBooks))
router.get('/:id', (books.getBooksById))
//router.get('/country', (books.getBooksByCountry))
router.get('/',(books.getBooksByQuery))
router.delete('/:id',(books.deleteBooksById))
router.put('/:id',(books.putBooksById))

module.exports = router;