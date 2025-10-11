# Technical Fix Plan (P0/P1/P2)

## P0 (0–2 tuần)
- Robots/sitemaps
  - Rà `robots.txt` không chặn pages quan trọng; giữ disallow cho `/search`, `/cart`, `/account`.
  - Kiểm tra và submit lại tất cả sitemaps trong GSC; xử lý lỗi đọc sitemap nếu có.
- Indexing (dựa GSC not-indexing list)
  - Ưu tiên xử lý các URL có impression/click tiềm năng nhưng “Discovered – currently not indexed”/“Crawled – not indexed”: cải thiện nội dung mỏng, hợp nhất trùng lặp, liên kết nội bộ tới trang đó.
  - Loại bỏ tham số/filter khỏi index (add `noindex` hoặc canonical đúng trang chuẩn).
- Canonical/duplicates
  - PDP variants canonical về sản phẩm chính; tránh index URL biến thể không cần thiết.
  - Xác minh chỉ một canonical trên mỗi trang, không mâu thuẫn giữa theme/app.
- CWV – LCP/critical path
  - Nén/resize hero, chuyển WebP, preload ảnh hero; inline critical CSS cho hero fold.
  - Defer/async các script app không cần thiết ở above-the-fold (theo Crawl Stats & Site Audit).
- Schema nền tảng
  - Thêm/giữ tối thiểu: `Organization`, `BreadcrumbList`, `Product` trên PDP.
  - Gỡ trùng lặp schema do nhiều app tiêm đồng thời.
- 404/Redirects
  - Chưa có 404/redirect log: thêm liên kết “Report a broken link” ở trang 404 và liên kết về collections chủ lực; tạm thời không tạo redirect hàng loạt.

## P1 (2–6 tuần)
- Pagination/Collections
  - Thiết lập canonical cho `collections?page=` (về page 1 hoặc self-canonical nếu phù hợp), tránh index trang lọc.
- Media & Accessibility
  - Alt text mô tả cho ảnh sản phẩm/chính; chuyển listing image sang WebP; thêm `srcset`/sizes.
- Internal linking
  - Bật module “Related products/collections” theo cluster “earthquake kit”.
  - Duy trì breadcrumbs nhất quán trên toàn site.
- On-page & CTR
  - Áp dụng `templates/metadata-templates.csv` cho Home/Collections/PDP.
  - Tối ưu Title/Meta cho queries có impression cao/CTR thấp trong GSC (earthquake kit, 72 hour kit...).
- 404/Redirects
  - Khi phát hiện 404 từ GSC/Semrush: tạo 301 tới trang tương ứng; loại bỏ chuỗi redirect nếu có.

## P2 (6–12 tuần)
- Hiệu năng nâng cao
  - Giảm INP qua tối ưu event handlers, trì hoãn slider/carousel nặng; audit app để gỡ app thừa.
- Metadata/Schema mở rộng
  - Lặp lại A/B Title/Meta theo CTR thực tế; thêm `FAQPage` cho trang hướng dẫn/collection.
- Nội dung hỗ trợ (ít bài hiện tại)
  - Tạo 2–3 bài pillar: “earthquake preparedness checklist”, “what to put in an earthquake kit”, “FEMA 72 hour list” với schema phù hợp; liên kết tới collections/PDP.
- Geo/programmatic (nếu có năng lực nội dung)
  - Triển khai landing giá trị thực cho California/Los Angeles khi có khác biệt thực sự về nhu cầu/quy định; tránh trùng lặp nội dung.

### Ghi chú triển khai Shopify
- Ưu tiên chỉnh trong theme (liquid) thay vì app nặng
- Test trên staging; đo CWV bằng PageSpeed và báo cáo CWV trong GSC
