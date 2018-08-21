// -- Dependencies
const express = require('express');
const app = express();
const port = 8080;


if (process.env.DEBUG === 'true') {
    console.log(process.env);
}

// Github endpoint. Used for PR Merges
app.post('/pr-merge', (req, res) => {
    console.log(req);
    res.status(200).end();
});

app.listen(port, function() {
    console.log('bot running on ' + port);
});
