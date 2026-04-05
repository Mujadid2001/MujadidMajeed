# Contact Form Setup - Quick Start

I've set up a complete email contact form system for your portfolio. Here's what was done:

## What's New ✨

### Frontend
- **ContactSection.tsx** - Updated with a beautiful, animated contact form
- Form validation for name, email, subject, and message
- Success/error notifications with icons
- Loading state with spinner animation
- Responsive design matching your portfolio theme

### Backend
- **server.js** - New Node.js/Express server to handle email sending
- Uses Nodemailer with Gmail SMTP
- Validates all form inputs
- Professional HTML email formatting
- Error handling and logging

### Configuration
- **.env.example** - Template for environment variables
- **package.json** - Updated with new scripts and dependencies
- **vite.config.ts** - API proxy configuration for development

## Installation & Setup

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Get Gmail App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and your device type
3. Copy the generated 16-character password

### 3️⃣ Create `.env` File
Create `.env` in your project root:
```env
EMAIL_USER=mujadid2001@gmail.com
EMAIL_PASSWORD=your_16_character_app_password_here
PORT=3001
NODE_ENV=development
```

### 4️⃣ Run the Application

**Start both servers together:**
```bash
npm run dev:all
```

Or **in separate terminals:**
- Terminal 1: `npm run dev` (frontend)
- Terminal 2: `npm run dev:server` (backend)

### 5️⃣ Test It Out
1. Open http://localhost:8080
2. Scroll to the Contact section
3. Fill out and send a test message
4. Check mujadid2001@gmail.com for the message

## Available Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start frontend only (Vite) |
| `npm run dev:server` | Start backend only (Express) |
| `npm run dev:all` | Start frontend + backend together |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Files Created/Modified

### Created
- `server.js` - Backend email server
- `.env.example` - Environment template
- `EMAIL_SETUP.md` - Detailed setup guide

### Modified
- `src/components/ContactSection.tsx` - Added form with submissions
- `package.json` - Added scripts and dependencies
- `vite.config.ts` - Added API proxy

## Features

✅ Beautiful form with Tailwind + Framer Motion
✅ Real-time validation
✅ Professional email formatting
✅ Error handling and user feedback
✅ Responsive design
✅ Loading states
✅ Success/error notifications

## Important Notes

⚠️ **Never commit .env file** - It's in `.gitignore`
⚠️ Use Gmail App Password, not your regular password
⚠️ Both frontend and backend must be running for email to work
ℹ️ For production, you'll need to deploy the backend separately

## Troubleshooting

If emails aren't being sent:
1. Check `.env` file has correct values
2. Verify Gmail App Password is correct
3. Check if 2FA is enabled on Gmail account
4. Look at server console for error messages
5. Ensure both servers are running (http://localhost:8080 and http://localhost:3001)

## Next Steps

For production deployment:
1. Deploy backend to Heroku, Railway, or similar
2. Update API endpoint in ContactSection
3. Set environment variables on your hosting platform
4. Test email functionality in production

See `EMAIL_SETUP.md` for more detailed information!
