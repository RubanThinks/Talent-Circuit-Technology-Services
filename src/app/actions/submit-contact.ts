"use server";

import nodemailer from "nodemailer";

export async function submitContactAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const type = formData.get("type") as string;
    const message = formData.get("message") as string;

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || "465"),
        secure: process.env.EMAIL_PORT === "465",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
        subject: `New Inquiry from ${name} (${type})`,
        text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Inquiry Type: ${type}
      Message: 
      \n${message}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("GoDaddy Contact Email Error:", error);
        return { success: false };
    }
}
