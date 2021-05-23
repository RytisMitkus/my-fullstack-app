
const express = require('express')
const mysql = require('mysql')
// import bodyParser from 'body-parser';
const app = express()
const portas = 3000
// import path from 'path';

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

const db = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'Emiliukas1-',
    database: 'nodevue'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql connected...')
});



// app.use(express.static(path.join(__dirname, 'frontend/dist')))
app.get('/api', (req, res) => {
    res.send({ greetings: [{ msg: 'One More hello' }, { msg: 'Another hello' }, { msg: 'Hello Rytis' }, { msg: 'Autodeployd node as well' }, { msg: 'restarted pm2' }] })
})

app.get('/api/user', (req, res) => {
    let sql = 'SELECT * FROM `Persons`'
    const user = db.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
        // res.send('results')
    });

})


app.listen(portas, () => {
    console.log(`Example app listening at http://localhost:${portas}`)
})