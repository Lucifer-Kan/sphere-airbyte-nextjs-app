# AISF Hackathon Next.js app

(Notes updated May 2023)

This is the frontend app for the AISF Hackathon

## Getting Started

Install the dependencies by running:

```
yarn install
# or
npm install
```

Use node compatible version by running:

```
nvm use 16
```

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Default port is 3000
Run `npx next dev -p [port]` to run the server on the desired port

## Deploying to Staging/Production Environment

Follow these steps to deploy the Next.js app to a Staging/Production (preview) environment using the Vercel CLI:

1. Install the Vercel CLI globally if you haven't already:

```
npm install -g vercel
```

2. Make sure you're logged in to your Vercel account by running `vercel login` and following the instructions.

3. Select `Continue with Email` and press ENTER

4. Enter the email address of your Vercel account. Visit your inbox to verify the account.

5. Run the following command to deploy your app in staging environment. Every time you make changes, run this command to push to staging:

```
vercel
```

6. To create a production deployment, run

```
vercel --prod
```

## Connecting Frontend to Backend Locally

Follow these step to connect AISF Hackathon Next.js app(FE) with AISF Hackathon(BE) locally:

1. Run AISF Hackathon(BE) locally following the readme steps of backend app.

2. create a new .env file in the root directory if haven't already or update the existing one in frontend app with following env variable:

```
NEXT_PUBLIC_BACKEND_URL = "http://localhost:8000"
```
