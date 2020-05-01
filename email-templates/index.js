const nodemailer = require('nodemailer');
const pug = require('pug');

// try to use any email service 
const transporter = nodemailer.createTransport('smtps://support@totalcash.biz:**********@smtp.yandex.ru');

function sendMail() {
  const message = {
    from: 'support@totalcash.biz',
    to: 'yahoo1985@tut.by',
    subject: 'Test',
    text: 'hello',
    html: pug.renderFile('./emails/confirmAccount/subject.pug', {confirmToken: '12345678'}), 
  };
  transporter.sendMail(message, (err, res) => {
    if (err) {
      global.console.log(err);
    } else {
      global.console.log(`Message sent: ${res.message}`);
    }
    this.transporter.close();
  });
}

sendMail();
