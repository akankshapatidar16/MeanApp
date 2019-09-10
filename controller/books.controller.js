const booksService = require('../service/books.service')
exports.getAllBooks = async function (req, res) {
    console.log("hye!! controller.js is working")
    let result = await booksService.getAllBooks()
    res.send(result)
}

exports.getBooksById = async function (req, res) {
    console.log("hye!! controller.js is working")
    let result = await booksService.getBooksById(req.params.id)
    res.send(result)
}

/*exports.getBooksByCountry = async function (req, res) {
    console.log("hye!!")
    let result = await booksService.getBooksByCountry(req.query.country)
    res.send(result)
}*/

exports.getBooksByQuery = async function (req, res) {
    console.log("hye!! controller.js is working")
    if(req.query.country !==undefined){
       let result = await booksService.getBooksByCountry(req.query.country) 
       res.send(result)
    }
    else if(req.query.author !== undefined){
        let result = await booksService.getBooksByAuthor(req.query.author)
        res.send(result)
    } 
}

exports.deleteBooksById = async function (req, res) {
    console.log("hye!! controller.js is working")
    let result = await booksService.deleteBooksById(req.params.id)
    res.send(result)
}

exports.putBooksById = async function (req, res) {
    console.log("hye!! controller.js is working")
    let result = await booksService.putBooksById(req.params.id, {$set:req.body})
    res.send(result)
}