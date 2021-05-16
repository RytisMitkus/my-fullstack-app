
const express = require('express')
const app = express()
const port = 5000
const path = require('path');

// app.use(express.static(path.join(__dirname, 'frontend/dist')))
app.get('/api', (req, res) => {
    res.send({ hello: 'Hello Rytis!' })
    console.log('hey')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})