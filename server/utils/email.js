
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');


const sendEmail = async (toMail, Name, Ammount, link) => {

    let config = {
        service: 'gmail',
        auth: {
            user: 'ninjahathodi1015@gmail.com',
            pass: 'apii gpol igjd tigf',
        }
    }
    // Creating a transporter for sending emails using the specified configuration
    let transporter = nodemailer.createTransport(config);

    let mailgenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Eber',
            link: 'http://localhost:4200/home/createRide'
        }
    });

    let response = {
        body: {
            name: Name,
            intro: 'Your Ride bill',
            table: {
                data: [{
                    item: 'Ride',
                    description: 'Ride Completion Charge',
                    price: `${Ammount} $`
                }]
            },
            action: [
                {
                    instructions: 'Invoice',
                    button: {
                        color: '#22BC66', // Optional: set the color of the button
                        text: 'View Bill',
                        link: 'http://localhost:4200/home/createRide'
                    }
                },
            ],

            outro: 'loking forword For you next Ride'
        }
    }

    let mail = mailgenerator.generate(response);

    let message = {
        from: 'ninjahathodi1015@gmail.com',
        to: toMail,
        subject: 'Ride Completed',
        html: mail
    }

    transporter.sendMail(message).then(() => {
       console.log('Mail send to Customer');
    }).catch(error => {
        console.log('Error while sending the mail to the Customer',error);
    })
}

module.exports = { sendEmail }