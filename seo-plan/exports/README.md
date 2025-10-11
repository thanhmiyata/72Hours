# Exports directory

Put all SEO data exports here, organized by source. Use CSV where possible.

## Subfolders
- `gsc/` – Google Search Console (Search Results, Indexing, CWV, Crawl Stats)
- `ga4/` – Google Analytics 4 (Landing Pages, Acquisition, Site Search, Geo)
- `semrush/` – Semrush (Site Audit, Positions, Pages, Cannibalization, Backlinks, Gap)
- `shopify/` – Shopify (Products/Collections/Blogs URLs, Redirects, 404 report)

## Naming convention
`{source}-{report}-{yyyymmdd}-{range}.csv`
- Examples:
  - `gsc-search-results-queries-20251010-16mo.csv`
  - `ga4-landing-pages-20251010-12mo.csv`
  - `semrush-site-audit-issues-20251010.csv`
  - `shopify-products-urls-20251010.csv`

## Notes
- Prefer US-only filters where relevant; include a column for country if mixed.
- For brand vs non-brand, include a `brand_segment` column or separate files.
- If files exceed size limits, split by month: `...-202501.csv`, `...-202502.csv`.
