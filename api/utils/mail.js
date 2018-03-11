const nodemailer = require("nodemailer");

const SendMail = (args, cb) => {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        }
    });
    console.log(process.env);
    // setup email data with unicode symbols
    let mailOptions = {
        from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_USERNAME}>`, // sender address
        to: args.to, // list of receivers
        subject: args.subject, // Subject line
        text: "Hello world?", // plain text body
        html: args.body // html body
    };

    // send mail with defined transport object
    return transporter.sendMail(mailOptions);
};

export default SendMail;