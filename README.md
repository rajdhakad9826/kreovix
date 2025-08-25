# kreovix

A modern, responsive video editing agency website built with React and TypeScript.


## Live Demo
[https://kreovix.vercel.app](https://kreovix.vercel.app)

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

![EmailJS](https://img.shields.io/badge/EmailJS-integration-success?style=flat)

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)


## Installation

```bash
# Clone this repository
git clone https://github.com/your-username/kreovix.git

# Navigate into the project directory
cd kreovix

# Install the dependencies
npm install

# Start the development server
npm run dev

# The application will open on the port: 3000 - go to http://localhost:3000
```

## Environment Variables

This project uses environment variables to connect to EmailJS.  
To set it up locally:

1. Rename the `.env.example` file to `.env`.
2. Replace the placeholder values with your actual EmailJS credentials.

### .env format

```env

VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
