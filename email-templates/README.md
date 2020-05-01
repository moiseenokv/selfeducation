# Working with email in node.js


## Email Template Preparance

### 1. HTML email template
    - Stripo Service:
      - url: https://stripo.email/ru/
      - generate html email template and export as html
      - all images try to put in your domain place

### 2. HTML to PUG format
    - url: https://html-to-pug.com/
    - generate pug template
    - pug external variables:
         - `${variable}` - often can be used in href attributes
         - #{variable} - often can be used in txt instances

### 3. HTML to TXT format
    - url: https://templates.mailchimp.com/resources/html-to-text/
    - generate text format of html
    - throw in variables in txt - ES6 `${}`

### 4. How to use
    - install  npm install nodemailer pug
            ----------------------------------------

            const nodemailer = require('nodemailer');
            const pug = require('pug');

            const transporter = nodemailer.createTransport('smtps://smtp.yandex.ru');

            function sendMail() {
            const message = {
                from: 'support@totalcash.biz',
                to: 'yahoo1985@tut.by',
                subject: 'Test',
                text: 'hello',
                html: pug.renderFile('./emails/confirmAccount/subjectcopy.pug', {}), 
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

### 5. Example

## How to learn your server to send not spammed emails

### 1. Learn this article
    https://livepage.pro/knowledge-base/email-in-spam.html

### 2. Setup all secure DNS params on yours vps server
    https://prnt.sc/s94j4z

### 3. After DNS update check your email with Mail tester Service and follow instructions
    https://www.mail-tester.com/ 
