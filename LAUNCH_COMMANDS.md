# ActivewearEtc Launch Commands

## 1. Create a clean standalone copy

From `C:\TireSearchEngine`:

```powershell
cd .\activewearetc-site
npm run prepare:export
robocopy .\export-ready C:\activewearetc /E
```

## 2. Initialize the new repository

```powershell
cd C:\activewearetc
git init
git add .
git commit -m "Initial ActivewearEtc standalone site"
```

## 3. Create the GitHub repository

```powershell
gh repo create activewearetc --private --source=. --remote=origin --push
```

## 4. Install dependencies and verify

```powershell
npm install
npm run check:security
npm run build
```

## 5. Create and link the Vercel project

```powershell
npx vercel
```

Use:
- framework: `Next.js`
- production domain: `activewearetc.com`
- optional redirect/canonical host: `www.activewearetc.com`

## 6. Add environment variables

```powershell
npx vercel env add ACTIVEWEAR_SITE_URL production
npx vercel env add ACTIVEWEAR_ANALYTICS_ID production
npx vercel env add ACTIVEWEAR_AFFILIATE_DEFAULT_SUBID production
npx vercel env add ACTIVEWEAR_CJ_DEVELOPER_KEY production
npx vercel env add ACTIVEWEAR_CJ_WEBSITE_ID production
npx vercel env add ACTIVEWEAR_AWIN_PUBLISHER_ID production
npx vercel env add ACTIVEWEAR_SHOPSTYLE_API_KEY production
```

## 7. Deploy production

```powershell
npx vercel --prod
```

## 8. Final live checks

```powershell
curl.exe https://activewearetc.com/robots.txt
curl.exe https://activewearetc.com/sitemap.xml
curl.exe https://activewearetc.com/about/advertiser-disclosure
```
