const {request, response } = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req=request,resp=response) =>{
    let body = req.body;

    let config = nodeMailer.createTransport({
        service:'gmail',
        post:587,
        secure:false,
        auth:{
            user:'eduardo.rosales1909@gmail.com',
            pass:'yphhbnxanoqgsjiu'
        }
    });

    const opciones = {
        from: body.name,
        subject: body.asunto,
        to: body.email,
        text: body.message+' Enviado por:'+body.name+' mi correo electronico es: '+body.mail,
    };

    config.sendMail(opciones,function(error,result){
        if (error){
            resp.status(500).send(error.message);
            console.log(resp.status(500).send(error.message));
        }
        return resp.json({
            ok:true,
            msg:result
        });
    })

}

module.exports = {
    envioCorreo
}