# Brief Generation Prompt

## Input
- Target keyword from `keyword-map.csv`
- SERP analysis (top 10 results)
- Competitor H2/H3 structure
- FAQ opportunities from "People Also Ask"

## Prompt Template
```
Create a content brief for the keyword "{TARGET_KEYWORD}" targeting US earthquake preparedness market.

**Context:**
- Target audience: US households preparing for earthquakes
- Brand: 72 HRS (earthquake kit supplier)
- Tone: Authoritative, helpful, US-English
- Sources: FEMA, USGS, Ready.gov, Red Cross

**Requirements:**
1. Analyze top 10 SERP results and extract:
   - Common H2/H3 structure
   - FAQ opportunities from "People Also Ask"
   - Content gaps we can fill

2. Create brief with:
   - Primary keyword: {TARGET_KEYWORD}
   - Secondary keywords: [3-5 related terms]
   - SERP outline: [H2/H3 structure based on analysis]
   - FAQ list: [6-10 questions with answers]
   - Internal link opportunities: [5-8 relevant pages]
   - Schema recommendations: [FAQPage, HowTo, Article]
   - Sources to cite: [FEMA, USGS, Ready.gov links]

3. Ensure E-E-A-T compliance:
   - Expert review needed for safety content
   - Legal disclaimers for medical advice
   - Authoritative sources only

**Output format:**
- Markdown file: `briefs/{slug}.md`
- Include word count target: 2000+ words
- Add content calendar integration notes
```

## Usage Notes
- Run for each keyword in `keyword-map.csv`
- Review brief before proceeding to draft
- Update internal link opportunities based on current site structure
