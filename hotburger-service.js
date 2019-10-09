const express = require('express')
const app = express()
const port = 3000

app.get('/version', (req, res) => {
 log('/version');
 res.send('Version 0 of HotBurger')
    }
);

log = (arg) => {
    console.log(`Log in for ${arg}`)
}

app.get('/logs', (req, res) => {
    log('/logs');   
});

app.listen(port, () => console.log(`new connection`));
