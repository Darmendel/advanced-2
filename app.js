const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 12347;
var database;

app.use("/static", express.static('./static/'));

fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
    database = JSON.parse(data);
    console.log(database);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.get('/listUsers', (req, res) => {
    res.render("users", {"users" : database});
});

app.get('/:id', (req, res) => {
    var user = database["user" + req.params.id];
    res.end(JSON.stringify(user));
})

app.post('/addUser', (req, res) => {
    id = req.query.id;
    password = req.query.password;
    n = req.query.name;

    database["user" + id] = {
        "name" : n,
        "password" : password,
        "id" : id
    }
});

app.listen(port, '0.0.0.0');