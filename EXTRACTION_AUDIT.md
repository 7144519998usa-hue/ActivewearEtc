# ActivewearEtc Extraction Audit

## Audit Result

The current TireSearchEngine root did not contain a surviving live ActivewearEtc application. No ActivewearEtc routes, components, catalog data, images, schemas, sitemaps, metadata files, or environment variables were found to move directly.

The only direct activewear reference found in the TireSearchEngine app was a quarantined off-surface prefix:

- `app/lib/siteConfig.js`: `/activewear-university`

That entry is not ActivewearEtc implementation code and should not be moved.

## Files Moved

No existing ActivewearEtc-specific files were moved from TireSearchEngine.

## Generic Systems Recreated

This project recreates clean, activewear-specific versions of reusable patterns:

- Affiliate disclosure system
- Product comparison cards
- Category hub pages
- Collection page schema
- Organization and WebSite schema
- Sitemap index and segmented sitemap routes
- Internal navigation
- Compliance pages
- Product detail route pattern

## Mixed TireSearchEngine Files Not Copied

The following TireSearchEngine files are useful as architectural reference only and were not copied verbatim:

- `app/lib/siteConfig.js`
- `app/lib/siteSurface.js`
- `app/lib/pageRegistry.js`
- `app/lib/pageEligibility.js`
- `app/lib/sitemapData.js`
- `app/components/CatalogHubPage.jsx`
- `app/components/CatalogLandingPage.jsx`
- `app/components/AffiliateLink.jsx`
- `app/components/AffiliateDisclosure.jsx`

They contain tire, energy, ops, or legacy route assumptions and should remain out of the ActivewearEtc repo unless rewritten.

## Unrelated Files Excluded

The following were excluded:

- Tire routes and tire data
- Commercial truck routes and lead-gen systems
- LiFePO4 and energy route files
- EV-market data and apps
- TheOmega3, Lipflower, and Apneatronics references
- Tire retailer feeds, Tire Rack scripts, SimpleTire scripts, and Priority Tire scripts
- Tire-specific public assets
- Existing TireSearchEngine Vercel project binding
- Existing TireSearchEngine Supabase secrets

## Activewear Taxonomy Installed

The project now includes activewear taxonomy for:

- leggings
- sports bras
- workout tops
- running shorts
- joggers
- hoodies
- compression wear
- yoga wear
- gym clothes
- athleisure
- plus-size activewear
- men's activewear
- women's activewear
- running shoes
- training shoes
- workout accessories
- moisture-wicking clothing
- sustainable activewear
- budget activewear
- premium activewear

## Verification

Current verification:

- `npm run check:security` passes in `activewearetc-site`
- `npm run build` passes in `activewearetc-site`
- TireSearchEngine managed build was run separately from the root and completed through the existing wrapper path

## Remaining Production Work

Before production launch:

- Replace sample product data with real merchant feeds or approved manual catalog data
- Add licensed or feed-approved product images
- Connect a separate analytics property
- Connect a separate affiliate account configuration
- Create a separate GitHub repository for this folder
- Create a separate Vercel project for `activewearetc.com`
- Add real domain DNS and production environment variables
