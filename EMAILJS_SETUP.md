# EmailJS Setup Guide for AI Camp Registration Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

### Option A: Use Your Existing Email
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Use your existing email address
5. Follow the setup instructions for your provider
6. **Copy the Service ID** - you'll need this later

### Option B: Create a Dedicated Email (Recommended)
1. Create a new email address specifically for AI Camp registrations:
   - `aicamp.registrations@gmail.com`
   - `terrence.aicamp@gmail.com`
   - Or any name you prefer
2. In your EmailJS dashboard, go to "Email Services"
3. Click "Add New Service"
4. Choose your email provider and connect this new email
5. Follow the setup instructions for your provider
6. **Copy the Service ID** - you'll need this later

**Benefits of a dedicated email:**
- All registrations in one place
- Easy to share with assistants or partners
- Professional appearance
- Separate from personal email

## Step 3: Create Email Templates

### Template 1: Notification Email (for you to receive registrations)
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. **Copy the Template ID** - you'll need this later
4. Use this template content:

**Template Subject:**
```
New AI Camp Registration: {{kid_name}}
```

**Template Body:**
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

### Template 2: Confirmation Email (sent to parents)
1. Click "Create New Template" again
2. **Copy this Template ID** too - you'll need both IDs
3. Use this template content:

**Template Subject:**
```
AI Camp Registration Confirmed - {{kid_name}}
```

**Template Body:**
```
Hi {{to_name}},

Thanks for registering {{kid_name}} for AI Camp! 🎉

REGISTRATION DETAILS:
- Child's Name: {{kid_name}}
- Selected Time: {{time_selection}}
- Registration Date: {{submission_date}}

WHAT'S NEXT:
- You'll receive a follow-up email with location details closer to the event
- Please make sure {{kid_name}} brings their device (laptop/phone) if possible
- If you have any questions, just reply to this email

We're excited to have {{kid_name}} join us for an amazing AI adventure!

Best regards,
Terrence Breschi
AI Camp Organizer

---
AI Camp - Where kids learn to build with AI
Saturday, July 12th at Plover Hill Studios
```

4. **Important:** In the email template settings, set the "To Email" field to: `{{to_email}}`
5. Save the template

## Step 4: Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your "Public Key" (also called User ID)
3. **Copy this key** - you'll need it in the next step

## Step 5: Update Your Website Code
Replace the placeholder values in your `script.js` file:

1. **Line 3**: Replace `"YOUR_PUBLIC_KEY"` with your actual public key
2. **Line 32**: Replace `"YOUR_SERVICE_ID"` with your service ID (same for both emails)
3. **Line 32**: Replace `"YOUR_TEMPLATE_ID"` with your notification template ID
4. **Line 42**: Replace `"YOUR_CONFIRMATION_TEMPLATE_ID"` with your confirmation template ID

**Example:**
```javascript
// Replace this line:
emailjs.init("YOUR_PUBLIC_KEY");
// With something like:
emailjs.init("user_abc123xyz789");

// Replace these lines:
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
// and
return emailjs.send('YOUR_SERVICE_ID', 'YOUR_CONFIRMATION_TEMPLATE_ID', parentTemplateParams);

// With something like:
emailjs.send('service_abc123', 'template_xyz789', templateParams)
// and
return emailjs.send('service_abc123', 'template_confirm456', parentTemplateParams);
```

## Step 6: Test Your Form
1. Upload your updated website
2. Fill out the registration form with a real email address
3. Submit it
4. Check both:
   - **Your registration email** (where you'll receive the detailed notification)
   - **The parent's email** (they'll receive a confirmation)

## 📧 **What Happens When Someone Registers:**

### You'll receive a detailed notification:
```
Subject: New AI Camp Registration: Pixel Pete

New AI Camp Registration Received!

CHILD INFORMATION:
- Name: Pixel Pete
- Age: 12
- Selected Time: Morning Session (9 to 11 a.m.)

PARENT/GUARDIAN INFORMATION:
- Name: John Smith
- Email: john@email.com
- Phone: 555-123-4567

ADDITIONAL DETAILS:
- Device Access: laptop
- Special Needs/Allergies: None specified

Registration submitted on: 1/15/2025, 2:30:15 PM
```

### The parent will receive a confirmation:
```
Subject: AI Camp Registration Confirmed - Pixel Pete

Hi John Smith,

Thanks for registering Pixel Pete for AI Camp! 🎉

REGISTRATION DETAILS:
- Child's Name: Pixel Pete
- Selected Time: Morning Session (9 to 11 a.m.)
- Registration Date: 1/15/2025, 2:30:15 PM

WHAT'S NEXT:
- You'll receive a follow-up email with location details closer to the event
- Please make sure Pixel Pete brings their device (laptop/phone) if possible
- If you have any questions, just reply to this email

We're excited to have Pixel Pete join us for an amazing AI adventure!

Best regards,
Terrence Breschi
AI Camp Organizer
```

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