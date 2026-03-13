---
name: new-investment
description: Add a new portfolio company to the holdings JSON after researching the startup
user_invocable: true
---

# New Investment Skill

You are helping add a new portfolio company investment to the holdings data file at `src/app/holdings/data/companies.json`.

## Step 1: Gather initial info from the user

If the user has not already mentioned it, use the `AskUserQuestion` tool to ask:

> Is this company in stealth mode, or has the funding/investment been publicly announced? Also, please share the company name (or category if stealth) and any details you have (website URL, founder names, etc.).

Wait for the user's response before proceeding.

## Step 2: Research the company

Use the `Agent` tool to launch a research sub-agent (subagent_type: "general-purpose") with the following prompt:

> Research the startup "[COMPANY NAME]" thoroughly. I need:
> 1. **What they do**: A clear explanation of the product/service, target market, and value proposition
> 2. **Founders**: Full names of all founders
> 3. **Founder LinkedIn URLs**: Find the LinkedIn profile URL for each founder
> 4. **Founder headshot/avatar image URLs**: For each founder, try to find a direct URL to their profile photo (from LinkedIn, the company website, Twitter/X, or press pages). Provide the URL if found.
> 5. **Company logo image URL**: Find a direct URL to the company logo (from the company website favicon, press kit, GitHub org avatar, Crunchbase, or social media). Provide the URL if found.
> 6. **Company website URL**
> 7. **Location**: City and country of HQ
> 8. **Year founded**
> 9. **Funding details**: Any announced rounds, amounts, lead investors, notable angels
> 10. **Tags/categories**: What industry verticals and categories describe this company (e.g., "AI", "Developer Tools", "B2B", "SaaS"). If the company is part of an accelerator like Y Combinator, include the batch (e.g., "Y Combinator S24")
> 11. **Notable facts**: Awards, traction metrics, acquisitions, partnerships
>
> Use WebSearch and WebFetch to find this information from the company website, Crunchbase, TechCrunch, LinkedIn, and other sources. Be thorough and verify information across multiple sources.

## Step 3: Build the company entry

Based on the research (or user-provided info for stealth companies), construct a JSON object matching the schema.

### For public (non-stealth) companies:

```json
{
  "slug": "company-name-lowercase-hyphenated",
  "title": "Company Name",
  "label": "Active",
  "href": "https://companywebsite.com",
  "logo": "/avatars/company-name.jpg",
  "summary": "One-line tagline/description (keep concise, under ~80 chars)",
  "description": [
    "First paragraph: What the company does, its product, target market, and value proposition.",
    "Second paragraph: Key features, technology, traction, or differentiators.",
    "Third paragraph: Funding details, notable investors, accelerator participation, and other highlights."
  ],
  "founded": "2024",
  "location": "City, Country",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "founders": [
    {
      "name": "Founder Name",
      "avatar": "/avatars/founder-name.jpg",
      "linkedin": "https://www.linkedin.com/in/founder-slug/"
    }
  ]
}
```

### For stealth companies:

```json
{
  "slug": "stealth-category-description",
  "title": "Category description",
  "label": "Stealth",
  "stealth": true,
  "stealthCategory": "Category description company",
  "summary": "Brief summary of what the company does without revealing identity",
  "description": "",
  "tags": ["Tag1", "Tag2"]
}
```

## Step 4: Download and process avatar images

The avatar directory is `public/holdings/avatars/`. All images should be 256x256 PNG files.

For **each** image needed (company logo + each founder avatar):

1. If the research sub-agent found a direct image URL, attempt to download it using `curl -L -o <temp_path> "<url>"` via the Bash tool. Save to a temp location first (e.g., `/tmp/avatar-download.jpg`).
2. If the download succeeds and the file is a valid image (check with `file /tmp/avatar-download.jpg`), process it:
   ```bash
   sips -s format png -z 256 256 /tmp/avatar-download.jpg --out public/holdings/avatars/<target-name>.png
   ```
   This resizes to 256x256 and converts to PNG format.
3. If the download fails or the URL wasn't found, **do not** set the `logo` or `avatar` field in the JSON. Instead, track which images are missing to tell the user later.

### Target file names:
- Company logo: `public/holdings/avatars/{slug}.png`
- Founder avatars: `public/holdings/avatars/{firstname-lastname}.png`

### Important:
- Always use `sips` (macOS built-in) for image processing — it's always available
- The `-z 256 256` flag resizes to exactly 256x256 pixels
- The `-s format png` flag converts to PNG
- Clean up temp files after processing with `rm /tmp/avatar-download.*`
- If the downloaded file is already a PNG, still run it through `sips` to ensure correct dimensions

## Step 5: Add to the JSON file

1. Read the current `src/app/holdings/data/companies.json` file
2. Add the new company entry to the **beginning** of the array (newest investments first)
3. Use the `Edit` tool to insert the new entry after the opening `[` bracket
4. Ensure valid JSON with proper formatting (2-space indentation, consistent with existing entries)
5. Only include `logo` and `avatar` fields for images that were successfully downloaded and processed

## Step 6: Confirm with user

Show the user a summary of what was added:
- Company name and summary
- Founders (with LinkedIn links)
- Tags
- Whether it was added as stealth or public
- Which avatar images were successfully downloaded and processed
- Which avatar images are **missing** and need to be manually added by the user to `public/holdings/avatars/` (list the expected filenames)

## Important notes

- The `description` field should be an array of 3 paragraph strings for public companies, or an empty string `""` for stealth companies
- The `summary` should be a concise one-liner (like a tagline)
- Avatar images live in `public/holdings/avatars/` and are referenced in the JSON as `/avatars/{name}.png`
- Founder avatar paths follow the pattern `/avatars/firstname-lastname.png` (all lowercase, hyphenated)
- Company logo paths follow the pattern `/avatars/company-slug.png`
- All avatar images should be 256x256 PNG files, processed with `sips`
- Only include `logo`/`avatar` fields in the JSON if the image file was actually downloaded — never reference a file that doesn't exist
- Keep the writing style consistent with existing entries - professional, factual, third-person
- For the `label` field, use "Active" for current investments, "Stealth" for unannounced ones
- Tags should be title-cased and include relevant categories
