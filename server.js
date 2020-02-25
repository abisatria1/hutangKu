const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000 || process.env.PORT

app.get('/', () => {
    return "hello world"
})

app.listen(port, () => {
    console.log('listen on port ' + port)
})