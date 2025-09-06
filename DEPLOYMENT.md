# Deployment Guide

## 🚀 Quick Deployment to Netlify

### Method 1: Drag & Drop (Fastest)
1. Run `npm run build` to create the production build
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Drag the `build` folder to the Netlify deploy area
4. Your site will be live instantly!

### Method 2: Git Integration (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Deploy!

## 📧 Netlify Forms Setup

### Automatic Detection
Netlify will automatically detect your contact form because it has:
- `data-netlify="true"` attribute
- `name="contact"` attribute
- Hidden `form-name` field

### Form Notifications
1. Go to your Netlify site dashboard
2. Navigate to Forms section
3. Set up email notifications for new submissions
4. Configure spam filtering if needed

## 🔗 Zapier Email Automation

### Step 1: Create Zapier Account
1. Sign up at [Zapier.com](https://zapier.com)
2. Create a new Zap

### Step 2: Set Up Trigger
1. **App**: Netlify
2. **Event**: New Form Submission
3. **Form**: Select your contact form
4. Test the trigger

### Step 3: Set Up Action
1. **App**: Gmail/Outlook/SendGrid
2. **Event**: Send Email
3. **Template**: Create thank-you email template
4. **Variables**: Use form data (name, email, etc.)

### Step 4: Update Code
In `src/components/Contact.jsx`, uncomment and update the Zapier webhook section:

```javascript
// Replace YOUR_ZAPIER_WEBHOOK_URL with your actual webhook
await fetch('https://hooks.zapier.com/hooks/catch/YOUR_HOOK_ID/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message')
  })
});
```

## 🎯 Custom Domain Setup

### On Netlify
1. Go to Site Settings > Domain Management
2. Add your custom domain
3. Configure DNS settings
4. Enable HTTPS (automatic)

### DNS Configuration
Point your domain to Netlify:
- **A Record**: `75.2.60.5`
- **AAAA Record**: `2600:1f14:e22:d200::1`
- **CNAME**: `your-site-name.netlify.app`

## 🔧 Environment Variables

If you need environment variables:
1. Go to Site Settings > Environment Variables
2. Add your variables (API keys, etc.)
3. Access them in React with `process.env.REACT_APP_VARIABLE_NAME`

## 📊 Analytics Setup

### Google Analytics
1. Add tracking ID to environment variables
2. Install `react-ga4` package
3. Initialize in `src/index.js`

### Netlify Analytics
1. Enable in Site Settings
2. View traffic data in Netlify dashboard

## 🛡️ Security Headers

The `netlify.toml` file includes security configurations:
- HTTPS redirects
- Form spam protection
- SPA routing support

## 📱 Performance Optimization

### Automatic Optimizations
Netlify provides:
- Asset optimization
- Image compression
- CDN distribution
- Gzip compression

### Manual Optimizations
- Lazy load images
- Code splitting (already included with React)
- Bundle analysis: `npm run build -- --analyze`

## 🔍 Testing Before Deployment

### Local Testing
```bash
npm start          # Development server
npm run build      # Production build
npx serve build    # Test production build locally
```

### Form Testing
1. Use the included `test-form.html`
2. Deploy to Netlify
3. Submit test form
4. Check Netlify dashboard for submissions

## 🚨 Troubleshooting

### Common Issues

**Form not working:**
- Check `data-netlify="true"` attribute
- Ensure hidden `form-name` field exists
- Verify form is in the built HTML

**Build failures:**
- Check Node.js version (use 18+)
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and reinstall

**Assets not loading:**
- Ensure assets are in `public/` folder
- Use relative paths starting with `/`
- Check case sensitivity in file names

### Support Resources
- [Netlify Documentation](https://docs.netlify.com)
- [Zapier Help Center](https://help.zapier.com)
- [React Documentation](https://react.dev)

---

**Happy Deploying! 🎉**