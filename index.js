// -- Dependencies
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json());

// Github endpoint. Used for PR Merges. Test
app.post('/pr-merge', (req, res) => {
    // console.log(req.body);
    console.log(req.body);
    res.status(200).end();
});

app.listen(port, function() {
    console.log('bot running on ' + port);
});
