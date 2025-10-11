# AI Workflows (Human-in-the-loop)

## Brief → Draft → Review → Publish
- Input: `keyword-map.csv` row → create `briefs/{slug}.md`
- Brief includes: SERP outline, H2/H3, FAQs, sources (FEMA/USGS/Ready.gov)
- Draft: AI generates first draft; human editor fact-checks and adds citations
- QA: check E-E-A-T, YMYL, tone US-English, plagiarism, schema opportunities
- Publish: add internal links, images with alt, run schema validation

## Internal Link Suggestions
- Use vector similarity to suggest 5–8 internal links; editor approves

## Programmatic Pages Guardrails
- Create only when offering unique value (geo/audience/variant)
- Manual review for duplication and UX; throttle releases; monitor GSC

## Measurement
- Track non-brand clicks/impressions (GSC) and revenue by landing (GA4)
