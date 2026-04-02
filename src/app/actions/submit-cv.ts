"use server";

import nodemailer from "nodemailer";

export async function submitCVAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const role = formData.get("role") as string;
    const message = formData.get("message") as string;
    const cvFile = formData.get("cv") as File;

    if (!cvFile || cvFile.size === 0) {
        return { success: false, message: "CV file is required." };
    }

    const buffer = Buffer.from(await cvFile.arrayBuffer());

    // Generic SMTP Configuration (Optimized for GoDaddy)
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || "465"),
        secure: process.env.EMAIL_PORT === "465", // true for 465, false for others
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
        subject: `New Candidate Application: ${name} - ${role}`,
        text: `
      Full Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Target Role: ${role}
      Additional Message: 
      \n${message}
    `,
        attachments: [
            {
                filename: cvFile.name,
                content: buffer,
            },
        ],
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: "Application submitted successfully!" };
    } catch (error) {
        console.error("GoDaddy Email Error:", error);
        return { success: false, message: "Submission failed. Please try again later." };
    }
}
