import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
// Using Gmail - you need to generate an App Password
// See: https://myaccount.google.com/apppasswords
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'mujadid2001@gmail.com',
    pass: process.env.EMAIL_PASSWORD, // Use App Password, not your regular password
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email transporter is ready:', success);
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Log the incoming message for debugging/tracking
    console.log(`\n📬 New message received from: ${name} (${email})`);
    console.log(`   Subject: ${subject}`);

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'mujadid2001@gmail.com',
      to: process.env.EMAIL_USER || 'mujadid2001@gmail.com',
      replyTo: email,
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00ffff; border-bottom: 2px solid #00ffff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #1a1a1a; border: 1px solid #333; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>

          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #555; white-space: pre-wrap; word-wrap: break-word;">
              ${message}
            </p>
          </div>

          <div style="border-top: 1px solid #ddd; padding-top: 15px; margin-top: 30px; font-size: 12px; color: #999;">
            <p>This is an automated email sent from your portfolio contact form.</p>
            <p>Reply to: ${email}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    console.log(`✅ Email forwarded to: ${process.env.EMAIL_USER || 'mujadid2001@gmail.com'}`);
    console.log(`📧 Client email (reply-to): ${email}\n`);

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✓ Email server running on http://localhost:${PORT}`);
  console.log(`\n📧 Make sure your .env file has:`);
  console.log(`   EMAIL_USER=mujadid2001@gmail.com`);
  console.log(`   EMAIL_PASSWORD=your_app_password_here`);
  console.log(`\nℹ️  To get Gmail App Password:`);
  console.log(`   1. Go to https://myaccount.google.com/apppasswords`);
  console.log(`   2. Select "Mail" and "Windows Computer" (or your device)`);
  console.log(`   3. Copy the generated 16-character password\n`);
});
