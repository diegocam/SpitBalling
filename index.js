// -- Dependencies
const express = require('express');
const app = express();
const port = 8080;


// Github endpoint. Used for PR Merges. Test
app.post('/pr-merge', (req, res) => {
    console.log(res);
    res.status(200).end();
});

app.listen(port, function() {
    console.log('bot running on ' + port);
});
