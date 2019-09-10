const userService = require('../service/user.service')
exports.authenticate = async function (req, res) {
    console.log("hye!!")
    let result = await userService.authenticate(req.body)
    res.send(JSON.stringify({ "authenticate": result }))
}

exports.signup = async function (req, res) {
    console.log("req.body=", req.body)
    let result = await userService.signup(req.body)
    console.log("signup page")
    res.status('201')
    res.send(result)
}