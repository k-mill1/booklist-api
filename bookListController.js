const createError = require('http-errors')

let booklist = []
let idno = 0

// read all book entries
exports.index = function (req, res) {
    res.send(booklist)
}

// create new book entry
exports.create = function (req, res, next) {
    if(!req.body.title) {
        return(next(createError(400, "title is required")))
    }
    booklist.push({id: idno, title: req.body.title, author: req.body.author, read: req.body.read})
    res.send({result: true})
    idno++
}

// show book by id
exports.show = function (req, res, next) {
    const bookitem = booklist.find((book) => book.id == req.params.id)
    if (!bookitem) {
        return(next(createError(404, "no book with that id")))
    }
    res.send(bookitem)
}

// delete book by id
exports.delete = function (req, res, next) {
    const bookitem = booklist.find((book) => book.id == req.params.id)
    if (!bookitem) {
        return(next(createError(404, "no book with that id")))
    }
    booklist = booklist.filter((book) => book.id != req.params.id)
    res.send({result: true})
}

// update book by id
exports.update = function (req, res, next) {
    const bookitem = booklist.find((book) => book.id == req.params.id)
    if(!req.body.title) {
        return(next(createError(400, "title is required")))
    }
    if (!bookitem) {
        return(next(createError(404, "no book with that id")))
    }
    booklist = booklist.map((book) => {
        if (book.id == req.params.id) {
            book.title = req.body.title,
            book.author = req.body.author,
            book.read = req.body.read
        }
        return book
    })
    res.send({ result: true })
}

// find book by title
exports.title = function (req, res, next) {
    const bookitem = booklist.find((book) => book.title == req.params.title)
    if (!bookitem) {
        return(next(createError(404, "no book with that title")))
    }
    res.send(bookitem)
}

// find books by specified author
exports.author = function (req, res, next) {
    const bookitem = booklist.find((book) => book.author == req.params.author)
    if (!bookitem) {
        return(next(createError(404, "no books with that author")))
    }
    booksByAuthor = booklist.filter((book) => book.author == req.params.author)
    res.send(booksByAuthor )
}