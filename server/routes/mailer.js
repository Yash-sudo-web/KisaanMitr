const nodemailer = require("nodemailer");

async function main() {

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'maxwell.bartoletti67@ethereal.email',
        pass: 'f6pGBQ8aUVajxWmtZf'
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"KisaanMitr" <maxwell.bartoletti67@ethereal.email>', // sender address
    to: "ymathur123@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "TU CHUTIYA HAI", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);