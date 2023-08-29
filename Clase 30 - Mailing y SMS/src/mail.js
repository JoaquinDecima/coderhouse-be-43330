import express from 'express';
import nodmailer from 'nodemailer';
import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config();

const app = express();
const transporter = nodmailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.get('/mail', (req, res) => {
    const mailOptions = {
        from: `Coderhouse Test <${process.env.EMAIL}>`,
        to: process.env.EMAIL,
        subject: 'CoderTest Mail',
        html: '<h1>HTML</h1>',
        attachments: [{
            filename: 'text.txt',
            content: 'Hello world!',
        }],
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });

    res.send('Sended');
});

app.get('/sms', (req, res) => {
    const query = req.query;
    client.messages.create({
        body: `Gracias por tu compra ${query.name}!`,
        to: process.env.PHONE_NUMBER,
        from: process.env.TWILIO_NUMBER,
    }).then((message) => console.log(message.sid));

    res.send('Sended');
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});