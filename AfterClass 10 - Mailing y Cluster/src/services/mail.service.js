import config from '../config/enviroment.config'

export default class MailingService{
  constructor() {
    this.client = nodemailer.createTransport({
      service: config.MAIL_SERVICE,
      port: 587,
      auth: {
        user: config.MAIL_USER,
        pass: config.MAIL_PASS
      }
    });
  }

  async sendMail({from, to, subject, html, attachments = []}) {
    const mailOptions = {
      from,
      to,
      subject,
      html,
      attachments
    };
    const result = await this.client.sendMail(mailOptions);
    console.log(result);

    return result;
  }

}