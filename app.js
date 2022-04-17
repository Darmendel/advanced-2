const express = require('express');
const app = express();
const path = require('path');
const port = 12347;

app.use("/static", express.static('./static/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.listen(port, '0.0.0.0');