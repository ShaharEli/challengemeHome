const path = require("path");
const express = require('express')
const checkToken = require('./middleware/checkToken')


const app = express()
app.use(express.json( {limit: '50mb'}))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/api/v1/', checkToken ,require('./api/v1'))

app.use(express.static(path.join(__dirname, "..", "client", 'build')))
app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

module.exports = app;