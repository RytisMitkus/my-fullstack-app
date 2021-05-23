
import express from 'express'
import mysql from 'mysql';
import bodyParser from 'body-parser';
const app = express()
const port = 5000
// import path from 'path';

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

const db = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
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
    res.send({ greetings: [{ msg: 'Hello Rytis' }, { msg: 'Autodeployd node as well' }, { msg: 'restarted pm2' }] })
})

app.get('/api/user', (req, res) => {
    let sql = 'SELECT * FROM `Persons`'
    const user = db.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})