import { NextApiRequest, NextApiResponse } from "next";

require("dotenv").config()

const sgMail = require("@sendgrid/mail")

const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env

sgMail.setApiKey(SG_API_KEY)


export default async function sendEmail(req: NextApiRequest, res: NextApiResponse){
  const { message, name, email } = req.body

  const msg = {
    to: email,
    from: FROM_EMAIL,
    subject: "Nextjs contact form",
    html: `<p><strong>Form: ${name}</strong></p> 
          <br/>
          <p><strong>Email: ${email}</strong></p>
          <br/>
          <p><strong>Text: ${message}</strong></p>
          `,
  };

  try {
    await sgMail.send(msg);
    res.json({success:true})
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error(error);
  }
};