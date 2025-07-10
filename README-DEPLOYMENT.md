# Deployment Guide - Vivek Pillai Portfolio

## Railway Deployment

### Prerequisites
1. Railway account (https://railway.app)
2. Gmail account with App Password generated
3. GitHub repository with your code

### Environment Variables
Set these environment variables in Railway:

```
NODE_ENV=production
EMAIL_USER=pillaivivek16@gmail.com
EMAIL_PASS=your_gmail_app_password
```

### Deployment Steps

1. **Connect Repository**
   - Link your GitHub repository to Railway
   - Railway will automatically detect the Node.js project

2. **Set Environment Variables**
   - Go to your project settings in Railway
   - Add the environment variables listed above
   - Make sure EMAIL_PASS is your Gmail App Password (not regular password)

3. **Deploy**
   - Railway will automatically build and deploy using the configuration in `railway.json`
   - The build process will run `npm run build`
   - The app will start with `npm start`

### Gmail App Password Setup

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Generate an App Password for "Mail"
4. Use this 16-character password as EMAIL_PASS

### Features After Deployment

- **Contact Form**: Sends emails directly to pillaivivek16@gmail.com
- **Professional Portfolio**: Showcases skills, projects, and experience
- **Responsive Design**: Works on all devices
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Friendly**: Proper meta tags and structured content

### Monitoring

- Railway provides built-in monitoring and logs
- Check deployment logs if there are any issues
- Contact form submissions will arrive in your Gmail inbox

### Custom Domain (Optional)

You can add a custom domain in Railway settings:
1. Go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Support

For deployment issues:
- Check Railway logs for error messages
- Verify environment variables are set correctly
- Ensure Gmail App Password is valid and active