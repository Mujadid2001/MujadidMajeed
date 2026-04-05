# Contact Form Email Setup Guide

Your portfolio now has a fully functional contact form with email integration! Follow these steps to get it working:

## Step 1: Get Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled
3. Once enabled, go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select "Mail" and "Windows Computer" (or your device type)
5. Google will generate a **16-character password**
6. Copy this password - you'll need it next

## Step 2: Create Environment File

1. In the project root directory, create a file named `.env` (next to `package.json`)
2. Add the following content:

```env
EMAIL_USER=mujadid2001@gmail.com
EMAIL_PASSWORD=your_16_character_app_password_here
PORT=3001
NODE_ENV=development
```

Replace `your_16_character_app_password_here` with the password you generated in Step 1.

**Important:** Do NOT use your regular Gmail password. Use only the 16-character App Password.

## Step 3: Install Dependencies

Run this command to install all required packages:

```bash
npm install
```

## Step 4: Start the Application

You have two options:

### Option A: Run Frontend and Backend Separately (2 terminals)

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend (new terminal):**
```bash
npm run dev:server
```

### Option B: Run Both Together (1 terminal)

```bash
npm run dev:all
```

## Step 5: Test the Contact Form

1. Open [http://localhost:8080](http://localhost:8080) in your browser
2. Scroll to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email (mujadid2001@gmail.com) for the message

## Troubleshooting

### "Error sending email" message appears

**Issue 1: Gmail blocked the connection**
- Sign in to your Gmail account
- You might see a security alert - allow the connection

**Issue 2: App Password is incorrect**
- Verify you're using the 16-character App Password, not your regular password
- Regenerate it if you're unsure

**Issue 3: Server not running**
- Make sure both the frontend (vite) and backend (server.js) are running
- Check that port 3001 is not in use

**Issue 4: 2-Step Verification not enabled**
- App Passwords only work if 2-Step Verification is enabled on your Google account
- Enable it first, then generate the App Password

### Check Backend Logs

The backend server will show logs like:
```
✓ Email server running on http://localhost:3001
📧 Make sure your .env file has:
   EMAIL_USER=mujadid2001@gmail.com
   EMAIL_PASSWORD=your_app_password_here
```

If you see errors, check the detailed messages in the console.

## Email Features

- ✅ Form validation on both frontend and backend
- ✅ Professional HTML email formatting
- ✅ Reply-To header set to client's email
- ✅ Error handling with user-friendly messages
- ✅ Loading state during submission
- ✅ Success/error notifications

## Security Notes

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **App Password is safer** - Uses a single-use password instead of your main Gmail password
3. **CORS enabled** - Backend accepts requests from your frontend
4. **Email validation** - Both frontend and backend validate email addresses

## Support

If emails aren't being sent:
1. Verify your `.env` file has correct values
2. Check Google Account for security alerts
3. Ensure both frontend and backend servers are running
4. Look at the browser console and backend logs for specific errors
