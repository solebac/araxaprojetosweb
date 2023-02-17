const mailer = require("nodemailer");

module.exports = (
  nome,
  email,
  msg,
  telefone,
  radioEmail,
  radioTelefone,
  radioWhatsapp,
  receber
) => {
  const smtpTransport = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "solebacfrs@gmail.com",
      pass: "ghmuyvnmpitzamop",
    },
    tls: { rejectUnauthorized: false },
  });

  const mail = {
    from: "solebacfrs@gmail.com",
    to: email,
    subject: `${nome} te enviou uma mensagem`,
    text: msg,
    html: "<b>Opcionalmente, pode enviar como HTML</b>",
  };

  return new Promise((resolve, reject) => {
    smtpTransport
      .sendMail(mail)
      .then((response) => {
        smtpTransport.close();
        return resolve(response);
      })
      .catch((error) => {
        smtpTransport.close();
        return reject(error);
      });
  });
};
