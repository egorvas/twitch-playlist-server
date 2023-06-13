# twitch-playlist-server

## Deploying with docker

docker run -d -p 5000:5000 -e CHANNELS="nix,just_ns" egorvas/twitch-playlist-server

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using this button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/egorvas/twitch-playlist-server&env[CHANNELS]=nix,just_ns)
