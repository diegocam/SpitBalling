// -- Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const port = 8080;

app.use(bodyParser.json());

const verifyGitHub = (req) => {
    console.log(req);
    // From Github and of PR event
    if (!req.headers['user-agent'].includes('GitHub-Hookshot') && req.headers['x-github-event'] !== 'pull_request') {
        return false;
    }

    // Compare their hmac signature to our hmac signature
    // (hmac = hash-based message authentication code)
    const theirSignature = req.headers['x-hub-signature'];
    const payload = JSON.stringify(req.body);
    const secret = 'SOME_TOKEN'; // TODO: Replace me

    const ourSignature = `sha1=${crypto.createHmac('sha1', secret).update(payload).digest('hex')}`;
    console.log(ourSignature);
    return crypto.timingSafeEqual(Buffer.from(theirSignature), Buffer.from(ourSignature));
};

// Github endpoint. Used for PR Merges. Another Testings
app.post('/pr-merge', (req, res) => {
    if (verifyGitHub(req)) {
        console.log(req.body);
        res.status(200).end();
    }
});

app.listen(port, function () {
    console.log('bot running on ' + port);
});
