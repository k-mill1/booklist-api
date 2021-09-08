const express = require('express')
const router = express.Router()
const books = require('./bookListController')

/* get home page / list of all objects */
router.get('/books', books.index)
router.post('/book/create', books.create)
router.get('/book/id/:id', books.show)
router.delete('/book/:id', books.delete)
router.put('/book/:id', books.update)
router.get('/book/title/:title', books.title)
router.get('/book/author/:author', books.author)

module.exports = router