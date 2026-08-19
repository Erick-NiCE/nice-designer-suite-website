# NICE Ltd — company overview

*Compiled from public sources, August 2026. Figures are the latest publicly reported at compile time — verify against nice.com/company/investors before quoting a number in anything customer-facing.*

## History

- Founded in **1986** in Israel as **Neptune Intelligence Computer Engineering (NICE)**; renamed **NICE Systems Ltd** on October 14, 1991. [[Wikipedia — NICE Ltd.](https://en.wikipedia.org/wiki/NICE_Ltd.)]
- Listed on **NASDAQ in 1996**. [[Wikipedia — NICE Ltd.](https://en.wikipedia.org/wiki/NICE_Ltd.)]
- Started in digital recording of voice interactions for telecom/contact-center environments — capturing, storing, and analyzing calls. That recording/analytics core is the ancestor of today's CX and compliance product lines. [[dcf-model.com — NICE history](https://dcf-model.com/blogs/history/nice-history-mission-ownership)]
- The brand today is styled **NiCE** / **NICE** interchangeably in its own marketing (stock ticker: **NICE**, NASDAQ).

## What the company does today

NICE describes itself as delivering "extraordinary customer experiences," fighting financial crime, and ensuring public safety — its three public-facing pillars. [[financecharts.com — NICE profile](https://www.financecharts.com/stocks/NICE/profile)]

## Business segments

NICE reports financials under **two primary reportable segments**:

1. **Customer Engagement** — CXone Mpower and related CX/contact-center software. This is the larger segment; CXone contributes roughly **three-quarters of total revenue**. [[dcf-model.com](https://dcf-model.com/blogs/history/nice-history-mission-ownership)]
2. **Financial Crime and Compliance** — NICE Actimize (AML, fraud, financial-crime case management).

Public Safety & Justice (Evidencentral) is marketed as its own line (nicepublicsafety.com) but rolls up financially under the broader portfolio rather than being reported as a third standalone top-level segment in the same breakdown. Treat "Public Safety" as a distinct *product/customer* line even where the financial reporting groups it elsewhere — don't assume the segment split maps 1:1 onto how customers or designers should think about the product lines.

## Scale (as of compile time, August 2026)

- **~$2.945B** annual revenue for FY2025, up from ~$2.735B in FY2024. [[financecharts.com — NICE revenue](https://www.financecharts.com/stocks/NICE/income-statement/revenue-annual)]
- Q1 2025: cloud revenue **$526.3M** (+12% YoY); total revenue **$700.2M** (+6% YoY). [[dcf-model.com](https://dcf-model.com/blogs/history/nice-history-mission-ownership)]
- **25,000+** global business customers, including **85 of the Fortune 100**. [[Tracxn — NiCE company profile](https://tracxn.com/d/companies/nice/__SIcXtRn9WC9BwkLTrVeSgKJNOFcri7oRYcljtzW4RG8)]
- **8,500+ employees** across **30+ countries**. [[Tracxn — NiCE company profile](https://tracxn.com/d/companies/nice/__SIcXtRn9WC9BwkLTrVeSgKJNOFcri7oRYcljtzW4RG8)]
- HQ reported as **Hoboken, NJ, US** (with major R&D presence in Israel, reflecting its founding roots). [[Tracxn](https://tracxn.com/d/companies/nice/__SIcXtRn9WC9BwkLTrVeSgKJNOFcri7oRYcljtzW4RG8)]
- Daily scale: NICE software manages **120M+ customer interactions/day** and monitors **3B+ financial transactions/day**. [[Tracxn](https://tracxn.com/d/companies/nice/__SIcXtRn9WC9BwkLTrVeSgKJNOFcri7oRYcljtzW4RG8)]
- Business model: primarily **software subscriptions and cloud services**, plus support/setup/consulting — a recurring-revenue model tied to usage over time. [[dcf-model.com](https://dcf-model.com/blogs/history/nice-history-mission-ownership)]

## Why this matters for design work

- NICE is **enterprise B2B software**, sold to large orgs (contact centers, banks, government agencies) — not a consumer product. Design decisions should assume trained daily users operating at volume and under time/compliance pressure, not first-time consumer onboarding.
- The **cloud-first shift** (cloud revenue growing faster than total revenue) means new design work should default to the cloud/CXone Mpower-era patterns, not legacy on-prem UI conventions.
- Scale numbers (millions of interactions/transactions per day) are a useful gut-check for any dashboard or list-view design: assume the real data volume is large, and design for filtering/search/triage, not for browsing a short list.
