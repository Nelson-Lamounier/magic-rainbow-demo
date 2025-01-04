import { NextResponse } from "next/server";
import AWS from "aws-sdk";

// Configure AWS SES
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION, // Example: 'us-east-1'
});

const ses = new AWS.SES();

export async function POST(req: Request) {
  try {
    const { name, email, message, phone } = await req.json();

    // Validation
    if (!name || !email || !message || !phone) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Email params for AWS SES
    const params = {
      Source: "lamounierincolor@gmail.com", // Replace with your SES verified email
      Destination: {
        ToAddresses: ["lamounier_88@hotmail.com"], // Replace with your recipient's email
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission: ${name}`,
        },
        Body: {
          Text: {
            Data: `You have received a new message:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
          },
        },
      },
    };

    // Send email using AWS SES
    await ses.sendEmail(params).promise();

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}