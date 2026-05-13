# Amazon Product Image Feed TODO

ActivewearEtc is ready to show real product images when approved Amazon Associates image URLs are available.

Do not scrape, download, copy, rehost, or manually save Amazon product images.

Use only approved Amazon Associates sources:
- Amazon Product Advertising API
- Amazon Creators API
- Amazon Data Feeds
- Amazon-served image/embed URLs explicitly approved for this Associates account

Add the approved `asin` and `imageUrl` values to `app/lib/activewearData.js` for these featured homepage products first:

| Product | Current URL | Required fields |
| --- | --- | --- |
| Nike One High-Waisted Leggings | `/product/nike/one-high-waisted-leggings` | `asin`, `imageUrl` |
| lululemon Align High-Rise Pant | `/product/lululemon/align-high-rise-pant` | `asin`, `imageUrl` |
| Adidas Ultimate Running Shorts | `/product/adidas/ultimate-running-shorts` | `asin`, `imageUrl` |
| Nike Leggings for Running | `/product/nike/leggings-for-running-amazon-options` | `asin`, `imageUrl` |
| Nike Leggings for Yoga | `/product/nike/leggings-for-yoga-amazon-options` | `asin`, `imageUrl` |
| Nike Leggings for Gym Workouts | `/product/nike/leggings-for-gym-workouts-amazon-options` | `asin`, `imageUrl` |

Once those fields are populated, product cards and product detail pages will automatically render the real Amazon-served images.
