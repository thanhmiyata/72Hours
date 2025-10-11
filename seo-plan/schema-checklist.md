## Schema Checklist (JSON-LD)

Required schemas by page type:

- Home/About:
  - Organization, WebSite, BreadcrumbList
- Collection:
  - ItemList (products), BreadcrumbList
- Product (PDP):
  - Product (name, description, image, brand, sku, gtin*, offers{price, priceCurrency, availability}, aggregateRating, review)
  - BreadcrumbList
- Blog Article:
  - Article (or BlogPosting), BreadcrumbList
- FAQ pages/sections:
  - FAQPage with Question/AcceptedAnswer
- How-to guides (when suitable):
  - HowTo with steps and materials

Validation steps:
- Test with Rich Results Test for each template
- Ensure only one Product entity per PDP; avoid duplicate injections from apps
- Keep prices/availability in sync with Shopify data

References to implement in Shopify (examples only):

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "72 HRS Earthquake Kit (4-Person)",
  "image": ["https://example.com/image.jpg"],
  "description": "Comprehensive earthquake preparedness kit...",
  "sku": "SKU-123",
  "brand": {"@type": "Brand", "name": "72 HRS"},
  "offers": {"@type": "Offer", "price": "199.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock"},
  "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "256"}
}
```

Keep snippets minimal and accurate; remove unused fields.


