const http = require('http')
const fs = require('fs')
// const server = http.createServer()

http.createServer(function (req, res){
    const text = fs.readFileSync('./content/big.txt', 'utf8')
    res.end(text)
})

.listen(5000)
