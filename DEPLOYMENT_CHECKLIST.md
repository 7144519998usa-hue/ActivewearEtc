# ActivewearEtc Deployment Checklist

## Repository

- Create a new GitHub repository named `activewearetc`.
- Push only the contents of `activewearetc-site`.
- Do not include TireSearchEngine `.vercel`, `.env.local`, build logs, product feeds, or private data.
- Confirm `.env.example` is present and no real secrets are committed.

## Environment

Create new environment variables for ActivewearEtc only:

- `ACTIVEWEAR_SITE_URL`
- `ACTIVEWEAR_ANALYTICS_ID`
- `ACTIVEWEAR_AFFILIATE_DEFAULT_SUBID`
- `ACTIVEWEAR_CJ_DEVELOPER_KEY`
- `ACTIVEWEAR_CJ_WEBSITE_ID`
- `ACTIVEWEAR_AWIN_PUBLISHER_ID`
- `ACTIVEWEAR_SHOPSTYLE_API_KEY`

Do not reuse `TSE_*`, tire retailer, LiFePO4, EV-market, beauty, omega-3, or sleep-tech environment values.

## Vercel

- Create a new Vercel project connected only to the `activewearetc` repository.
- Set the framework to Next.js.
- Set production domain to `activewearetc.com` and `www.activewearetc.com`.
- Add only ActivewearEtc environment variables.
- Confirm the Vercel project is not linked to TireSearchEngine.

## Build Checks

Run before deployment:

```bash
npm run check:security
npm run build
```

Expected result:

- ActivewearEtc guardrail passes.
- Next build completes.
- Routes are activewear-only.
- No tire, LiFePO4, EV-market, omega-3, beauty, or sleep/apnea public routes exist.

## Compliance Checks

- Affiliate disclosure page is live.
- Editorial policy page is live.
- Product ranking methodology page is live.
- Price and availability disclaimer page is live.
- Image attribution policy page is live.
- Product pages do not claim fake reviews or unsupported testing.
- Product image sources are licensed, feed-approved, or properly attributed.
- Price and availability disclaimers are visible near commercial modules.

## Launch Checks

- `sitemap.xml` returns activewear-only URLs.
- `sitemap_index.xml` returns segmented activewear sitemaps.
- `robots.txt` points to the ActivewearEtc sitemap.
- Homepage metadata uses ActivewearEtc branding.
- Navigation uses ActivewearEtc routes only.
- Affiliate outbound links use sponsored disclosure handling once real merchant links are connected.
