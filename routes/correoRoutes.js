const express = require('express');
const app = express();

app.get('/',(req, res) =>{

    res.sendFile(process.cwd()+"/dist/firebase-auth/index.html");

}

);

let envio = require('../controllers/correoController');

app.post('/',envio.envioCorreo);

app.get('/generador', (req, res) => {
    let x= 0;
    let max=0;
    let alea=[5];
    alea[0]='www.biutest.com/brands/ahal';
    alea[1]='www.biutest.com/brands/ceiba';
    alea[2]='www.biutest.com/brands/pai-pai';
    alea[3]='www.biutest.com/brands/xixanthe';
    alea[4]='www.biutest.com/brands/macre'; 
    max= alea.length;
    x= Math.floor(Math.random()*max);
    console.log(x);
    console.log(max);
    console.log(alea[x]);

    res.send({
    alea:alea[x]
    });
});

module.exports = app;