# EmailJS Setup Guide for AI Camp Registration Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. **Copy the Template ID** - you'll need this later
4. Use this template content:

### Template Subject:
```
New AI Camp Registration: {{kid_name}}
```

### Template Body:
```
New AI Camp Registration Received!

CHILD INFORMATION:
- Name: {{kid_name}}
- Age: {{kid_age}}
- Selected Time: {{time_selection}}

PARENT/GUARDIAN INFORMATION:
- Name: {{parent_name}}
- Email: {{parent_email}}
- Phone: {{parent_phone}}

ADDITIONAL DETAILS:
- Device Access: {{device_access}}
- Special Needs/Allergies: {{special_needs}}

Registration submitted on: {{submission_date}}

---
This registration was submitted through the AI Camp website.
```

5. Save the template

## Step 4: Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your "Public Key" (also called User ID)
3. **Copy this key** - you'll need it in the next step

## Step 5: Update Your Website Code
Replace the placeholder values in your `script.js` file:

1. **Line 3**: Replace `"YOUR_PUBLIC_KEY"` with your actual public key
2. **Line 32**: Replace `"YOUR_SERVICE_ID"` with your service ID
3. **Line 32**: Replace `"YOUR_TEMPLATE_ID"` with your template ID

**Example:**
```javascript
// Replace this line:
emailjs.init("YOUR_PUBLIC_KEY");
// With something like:
emailjs.init("user_abc123xyz789");

// Replace this line:
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
// With something like:
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## Step 6: Test Your Form
1. Upload your updated website
2. Fill out the registration form
3. Submit it
4. Check your email inbox for the registration details

## Free Tier Limits
- **200 emails per month** (plenty for most use cases)
- **50 KB per email**
- **50 requests per hour**

## Troubleshooting
- **Form not sending?** Check browser console for errors
- **Not receiving emails?** Check your spam folder
- **Getting 403 errors?** Make sure your public key is correct
- **Template not working?** Verify template ID and variable names match

## Security Note
Your EmailJS public key will be visible in your website's source code. This is normal and safe - EmailJS public keys are designed to be public. You can restrict which domains can use your service in the EmailJS dashboard under "Settings" → "Security".

## Next Steps
Once everything is working, you might want to:
1. Set up email autoresponders for parents
2. Create a backup email address to receive submissions
3. Set up webhooks for additional integrations

Your AI Camp registration form is now fully functional with EmailJS! 🎉