# ActivewearEtc

Standalone Next.js project for `activewearetc.com`.

## Purpose

ActivewearEtc is a publisher-grade activewear discovery and comparison site. It is separate from TireSearchEngine and should not import tire, LiFePO4, EV, omega-3, beauty, or sleep/apnea code.

## Local Commands

```bash
npm run dev
npm run check:security
npm run build
npm run prepare:export
```

## Deployment Notes

Create a new GitHub repository for this folder only, then connect that repository to a new Vercel project for `activewearetc.com`. Do not reuse the TireSearchEngine Vercel project binding.

Deployment helpers included:

- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
- [LAUNCH_COMMANDS.md](LAUNCH_COMMANDS.md)

## Included Compliance Pages

- `/about/advertiser-disclosure`
- `/about/editorial-policy`
- `/about/how-we-rank-products`
- `/about/price-and-availability`
- `/about/image-attribution-policy`

## Repo Handoff

When this folder is moved into its own repository:

1. Run `npm install`
2. Copy `.env.example` to `.env.local`
3. Fill only ActivewearEtc-specific environment variables
4. Run `npm run check:security`
5. Run `npm run build`

To generate a clean handoff copy inside this workspace first:

```bash
npm run prepare:export
```
