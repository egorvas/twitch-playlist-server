const twitch = require("twitch-m3u8");
const m3u = require('m3u');
const express = require("express");
const CHANNELS = process.env.CHANNELS.split(",") || ["dotatv247"];

if (CHANNELS.length>0){
    const app = express();
    app.set('port', (process.env.PORT || 5000));
    app.get('/', async (req, res) => {
        const writer = m3u.writer();
        for await (const channel of CHANNELS){
            let data;
            try{
                data = await twitch.getStream(channel);
            }catch(e){
            }
            if (data){
                for await (const res of data){
                    writer.write(`#EXTINF:0,${channel} - ${res.resolution?res.resolution:"audio"}`);
                    writer.write(`#EXTGRP:${res.quality}`);
                    writer.write(res.url);
                }
            }
        }
        res.send(writer.toString());
    })

    app.listen(app.get('port'), () => {
        console.log(`Starting on port ${app.get('port')}`)
    })
}else{
    console.log(`Invalid CHANNELS array`);
}

