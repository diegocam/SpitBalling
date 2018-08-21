# LPSBot

A Slack bot.

## Development Environment

### Requirements

* Node/NPM
* Slack

### Clone Repo

You'll first need to clone this repo. There are not any restrictions around the directory and path you clone to - use what's best for your environment.

```
# Mac/Linux
git clone https://github.com/LiteracyPro/lps-bot ~/CPSbot
```

### Setup

For production we save environment variables directly on Heroku. Locally, we need to add them as system variables. In `.bashrc`, you'll need key/values for:

```
# --- SlackBot - Local Dev
export DEBUG=true
export SLACK_TOKEN=<slack_api_key>
export HEROKU_API_TOKEN=<heroky_api_token>
export GITHUB_TOKEN=<github_auth_token>
```

## Usage

With the repo cloned and your local environment configured, you can run `CPS Bot` with:

`node index.js`

Example:

```
chris -> node index.js
Initializing Botkit v0.6.8
info: ** No persistent storage method specified! Data may be lost when process shuts down.
```

Ignore the  warning about "persistent storage". Heroku doesn't support it and if we need it we'll have to setup a database somewhere.
