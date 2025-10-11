# Internal Link Suggestions Prompt

## Input
- Article content (draft or published)
- Site structure (collections, products, other articles)
- Target keyword and related terms

## Prompt Template
```
Analyze the following article content and suggest 5-8 relevant internal links for 72 HRS earthquake preparedness site.

**Article Content:**
{ARTICLE_CONTENT}

**Available Site Structure:**
- Collections: /collections/earthquake-kits, /collections/72-hour-kits
- Products: [list top-selling earthquake kits]
- Articles: [list existing blog posts]
- Pages: /pages/faq, /pages/shipping

**Link Suggestion Criteria:**
1. **Relevance**: Links must be contextually relevant
2. **Value**: Links should help user journey
3. **Anchor Text**: Use descriptive, keyword-rich anchors
4. **Placement**: Natural placement within content
5. **Priority**: Focus on high-converting pages

**Output Format:**
For each suggested link:
- Anchor text: [descriptive text]
- Target URL: [full URL]
- Placement: [paragraph/section]
- Relevance score: [1-10]
- Reasoning: [why this link adds value]

**Quality Guidelines:**
- Avoid exact-match anchor text
- Ensure links add user value
- Consider conversion potential
- Maintain natural link flow
```

## Usage Notes
- Run for each article before publishing
- Editor approves/rejects suggestions
- Track link performance after implementation
- Update suggestions based on site structure changes
