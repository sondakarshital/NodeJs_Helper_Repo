try {
  const sgMail = require("@sendgrid/mail");
  sgMail.send({
    to: "s@gmail.com",
    from: "s@gmail.com",
    subject: "This is my first mail",
    text: "I hope you will get this",
  });
} catch (e) {
  console.log("error ", e);
}
