const express = require('express');
const app = express();
const port = 3000;

var request = require('request');

app.get('/', function(req, res){
    if (req.query.url != undefined) {
        request(req.query.url, function (error, response, body) {
            res.set('Access-Control-Allow-Origin', '*');
            res.send(JSON.stringify(body));
        })

    } else {
        res.send('Waiting CONTENT');
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
