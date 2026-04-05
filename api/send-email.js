/**
 * Vercel Serverless Function - Send Email using Resend
 * This endpoint handles contact form submissions and sends emails
 */

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Send email using Resend
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mujadid2001@gmail.com',
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Message from ${name}</h2>
          <p style="color: #666;"><strong>From:</strong> ${email}</p>
          <p style="color: #666;"><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    console.log('📧 Email sent successfully:', response.data?.id);
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
