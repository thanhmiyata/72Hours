# AI Workflows (Human-in-the-loop)

## Content Creation Process

### 1. Brief Generation (AI-Assisted)
**Input**: `keyword-map.csv` row + SERP analysis
**Process**:
- AI analyzes top 10 SERP results for target keyword
- Extracts H2/H3 structure from competitors
- Identifies FAQ opportunities from "People Also Ask"
- Suggests sources: FEMA, USGS, Ready.gov, Red Cross
**Output**: `briefs/{slug}.md` with:
  - Primary/secondary keywords
  - SERP outline (H2/H3 structure)
  - FAQ list (6-10 questions)
  - Internal link opportunities
  - Schema recommendations

### 2. Draft Creation (AI + Human Review)
**Process**:
- AI generates first draft using brief
- Human editor fact-checks safety/medical content
- Add FEMA/USGS citations and disclaimers
- Verify E-E-A-T compliance
**Quality Gates**:
- Expert review for YMYL content
- Legal disclaimers for safety advice
- US-English tone consistency
- Plagiarism check

### 3. Publishing Workflow
**Pre-publish**:
- Add internal links (5-8 suggestions via vector similarity)
- Optimize images with alt text
- Run schema validation (Rich Results Test)
- Final editorial review
**Post-publish**:
- Monitor GSC for indexing
- Track CTR improvements
- Update internal linking

## Internal Link Suggestions (AI-Assisted)
**Process**:
- Vector similarity analysis of content corpus
- Suggest 5-8 relevant internal links per article
- Editor approves/rejects suggestions
- Track link performance

## Programmatic Pages Guardrails
**Scope**:
- Audience variants: 2-person, 4-person, family
- Use-case variants: car, home, office
- Geo variants: California, Los Angeles (only if unique value)
**Safety Measures**:
- Uniqueness check vs existing pages
- Human editorial review required
- Throttle releases (max 2-3 per week)
- Monitor GSC for thin content flags

## Quality Assurance Checklist
- [ ] Expert review for safety content
- [ ] FEMA/USGS source citations
- [ ] Legal disclaimers included
- [ ] US-English tone verified
- [ ] Schema validation passed
- [ ] Internal links added
- [ ] Images optimized with alt text

## Measurement & Optimization
**Weekly Tracking**:
- GSC non-brand clicks/impressions
- CTR improvements per keyword
- Content performance metrics
**Monthly Review**:
- Top performing content analysis
- Internal link effectiveness
- Schema implementation success
- Content refresh opportunities
