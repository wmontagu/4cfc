# 4CFC - College Resources Website

## Overview

4CFC (For College Students, From College Students) is a resource website designed to help students navigate the college application process and college life. The site provides worksheets, guidance materials, and real stories from current college students.

## Website Structure

- **Home**: Main landing page with overview of resources
- **About**: Information about 4CFC's mission
- **College Collage**: Real stories and advice from current college students
- **Planning Worksheet**: Tools to organize the college application process
- **Resources**: Additional references and guidance materials

## Project Structure

- `/src/app/` - Next.js pages and layouts
  - `page.tsx` - Homepage
  - `about/page.tsx` - About page
  - `college-collage/page.tsx` - College Collage page
  - `resources/page.tsx` - Resources page
  - `planning-worksheet/page.tsx` - Planning Worksheet page
  - `globals.css` - Global styles
  - `layout.tsx` - Root layout (includes navbar and footer)

- `/src/components/` - Reusable components
  - `Navbar.tsx` - Navigation bar component
  - `SearchModal.tsx` - Search functionality

## Setup Instructions

### Prerequisites

1. **Install Node.js and npm**
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node -v` and `npm -v` in a terminal/command prompt

2. **Install project dependencies**

   ```bash
   # Navigate to the project directory
   cd path/to/4cfc
   # Install dependencies
   npm install
   ```

## Running the Website

1. **Start the development server**

   ```bash
   npm run dev
   ```

2. **View the website**
   - Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Deploying to Production

1. **Build the production version**

   ```bash
   npm run build
   ```

2. **Deploy to hosting service**
   - Push your code to GitHub
   - Code should show up automatically in deployment on Vercel.

## Custom Domain Setup with Namecheap

### Information Needed from Buyer

If you've purchased a domain on Namecheap and want to use it for this website, please provide:

1. **Domain Name**: The exact domain purchased (e.g., example.com)
2. **Namecheap Account Access**: Either:
   - Temporary login credentials to your Namecheap account, or
   - Permission to send you DNS configuration records to add manually

### Configuration Steps (For Developer)

1. **Set up hosting platform** Vercel:
   - In your Vercel dashboard, go to the project settings
   - Find "Domains" or "Custom Domains" section
   - Add the purchased domain
   - The platform will provide DNS records (typically CNAME and A records)

2. **Configure Namecheap DNS**:
   - Log in to Namecheap
   - Navigate to "Domain List" → select domain → "Manage"
   - Go to "Advanced DNS" tab
   - Remove default records
   - Add the host records provided by the hosting platform:
     - Typically an A record pointing to your hosting IP
     - A CNAME record for the "www" subdomain
   - Save changes (may take 24-48 hours to propagate)

## Troubleshooting - Clearing Cache

If you encounter issues with outdated or cached files, you can clear the Next.js cache by running:

1. **Clear Next.js build cache**

   ```bash
   # Stop the development server first (Ctrl+C), then:
   npm run clean
   ```

   If the above command isn't available in your package.json, use:

   ```bash
   # Remove the .next directory
   rm -rf .next
   ```

2. **Clear npm cache (if having dependency issues)**

   ```bash
   npm cache clean --force
   ```

3. **Reinstall dependencies (if needed)**

   ```bash
   rm -rf node_modules
   # Or on Windows:
   # rd /s /q node_modules

   # Then reinstall
   npm install
   ```

## Technologies Used

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon components

## Browser Compatibility

The website is designed to work with modern browsers like Chrome, Firefox, Safari, and Edge.

## README and Comments rewritten by AI to better understand code and help with debugging.
