# Bajaj Health OS — Employee App Prototype

A working, clickable prototype of the employee health app. 10 screens, tappable bottom navigation.

## What this is
A React (Vite) project. It is ready to host. You do not need to write any code.

## How to get a shareable link

You have two easy hosting choices. Both are free and both read directly from GitHub.
Lovable can host from GitHub, but Netlify is the most reliable for a plain Vite project,
so both are described below. Pick one.

### Step 1 — put the code on GitHub (same for both)
1. Create a free account at github.com
2. Click the "+" at top right, then "New repository"
3. Name it "bajaj-health-app", keep it Public, click "Create repository"
4. On the next page click "uploading an existing file"
5. Drag in EVERY file and folder from this project (index.html, package.json,
   vite.config.js, netlify.toml, the src folder, etc). Do NOT upload node_modules or dist.
6. Click "Commit changes"

### Step 2a — host with Netlify (recommended, most reliable)
1. Create a free account at netlify.com and sign in with your GitHub login
2. Click "Add new site" then "Import an existing project"
3. Choose GitHub, then pick your bajaj-health-app repository
4. Netlify reads netlify.toml automatically. Build command: npm run build. Publish directory: dist
5. Click "Deploy". In about a minute you get a live link like bajaj-health-app.netlify.app

### Step 2b — host with Lovable (if you prefer)
1. Sign in to Lovable
2. Look for "Import from GitHub" / connect your GitHub account
3. Select the bajaj-health-app repository
4. Lovable installs and hosts it. Publish to get your link.
   Note: viewing/hosting an existing repo does not require build credits the way
   generating a new app from a prompt does.

## To run it on your own computer (optional)
1. Install Node.js from nodejs.org
2. Open a terminal in this folder
3. Run: npm install
4. Run: npm run dev
5. Open the local link it prints (usually http://localhost:5173)
