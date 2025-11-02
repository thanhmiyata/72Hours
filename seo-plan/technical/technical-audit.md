---
title: Technical SEO Audit – 72hours.com (Shopify)
scope: US-English, focus on "earthquake kit"
---

## 1) Crawl & Indexation
- [ ] Check robots.txt (allow core pages; disallow search/cart/account)
- [ ] Verify sitemaps in GSC; ensure collections/products/blogs included
- [ ] Review Index Coverage: Errors/Warnings/Excluded (export in GSC)
- [ ] Faceted URLs noindexed/canonicalized (filters, params)
- [ ] Pagination handling (collections?page=) – canonical to page 1 if needed

## 2) Canonicalization
- [ ] Product variants canonical to main PDP
- [ ] Avoid duplicate content across collections/tags

## 3) Structured Data (JSON-LD)
- [ ] Organization + Website + BreadcrumbList
- [ ] Product (price, availability, SKU, GTIN, AggregateRating, Review)
- [ ] Article for blog posts; FAQPage where applicable
- [ ] Validate in Rich Results Test

## 4) Metadata & Content
- [ ] Title/Meta templated and unique per page type
- [ ] One H1 per page; headings consistent with intent
- [ ] Image alt text descriptive; large images in WebP if possible

## 5) Performance (CWV)
- [ ] LCP target <2.5s (optimize hero image, critical CSS)
- [ ] CLS <0.1 (reserve media dimensions)
- [ ] INP <200ms (defer non-critical JS, reduce app bloat)

## 6) Internal Linking
- [ ] Breadcrumbs consistent
- [ ] Related products/collections modules
- [ ] Blog → collection/product contextual links

## 7) 404s & Redirects
- [ ] Map 404s to best 301 destination
- [ ] Remove redirect chains

## Findings & Evidence
- Notes:
  - 404 report: không khả dụng (no native export/app report cung cấp)
  - URL Redirects: chưa có dữ liệu export (user xác nhận không có)
  - Đã nhận: GSC Search Results (Queries/Pages 16m), Crawl Stats CSV, Sitemaps URLs (txt)
  - Đã nhận: Semrush (Site Audit issues CSV, Organic Research PDFs, Backlink CSVs, Keyword list CSV)
  - Đã nhận: Shopify (theme notes, apps screenshot); blog/pages xuất tạm qua ảnh
- Screenshots/links to exports:
  - seo-plan/exports/gsc/
  - seo-plan/exports/semrush/
  - seo-plan/exports/shopify/

## Summary & Next Steps
- P0 (0–2 weeks):
  - Chuẩn hoá canonical cho PDP variants; noindex search/cart/account/facets
  - Kiểm tra robots/sitemaps; submit lại sitemaps, xử lý lỗi Indexing nổi bật
  - Tối ưu LCP hero (nén/preload), defer JS không quan trọng
  - Thiết lập schema tối thiểu: Organization, Breadcrumb, Product trên PDP
- P1 (2–6 weeks):
  - Canonical pagination collections?page=; alt text + WebP; responsive srcset
  - Củng cố internal links (related, breadcrumbs), 404→301 nếu phát hiện từ GSC/Semrush
- P2 (6–12 weeks):
  - Tối ưu INP/CLS sâu, audit app; mở rộng schema FAQ/HowTo cho guides


