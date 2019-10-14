const express = require('express')
const app = express()
const port = 3000
const logging = require('simple-node-logger').createSimpleFileLogger('hotdog.log');
const fs = require('fs');

app.get('/version', (req, res) => {
 log('/version');
 res.send('Version 0 of HotBurger')
    }
);

log = (arg) => {
    console.log(`Log in for ${arg}`)
    logging.isInfo(`This is login results: ${arg}`)
}

app.get('/logs', (req, res) => {
    log('/logs'); 
    fs.readfile(`hotdog.log`, `utf8`, (err,data) =>{
        if(err)
            log(err);
            res.send(data.toString())
    });  
});

app.listen(port, () => console.log(`new connection`));
