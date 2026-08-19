# Public Safety & Justice — Evidencentral

*Compiled from public sources, August 2026.*

## What it is

NICE's Public Safety & Justice line serves the full criminal-justice pipeline — **emergency communications, law enforcement, prosecutors, and courts** — with **30 years of experience** and **3,000+ customers**. [[nicepublicsafety.com — Evidencentral](https://www.nicepublicsafety.com/evidencentral)]

**Evidencentral** is the flagship cloud-based, AI-powered **digital evidence management** platform: it manages data from the moment an incident happens through case closure and prosecution, covering automated evidence collection, secure storage, and AI/analytics that streamline the whole process. [[nicepublicsafety.com](https://www.nicepublicsafety.com/evidencentral)]

## Scale

- Supports over **37 million active criminal cases** and **240 million evidence items**. [[nice.com — Evidencentral milestone press release](https://www.nice.com/press-releases/nices-evidencentral-surpasses-milestone-of-supporting-over-37-million-active-criminal-cases-and-240-million-evidence-items)]

## Related product

**NICE Investigate**: digital investigation and evidence management, described as helping investigators securely and electronically share evidence with prosecutors (e.g. emailing a secure link to a digital case file). [[policinginsight.com — NICE Investigate](https://policinginsight.com/feature/advertisement/nice-investigate-digital-investigation-and-evidence-management/)]

## Key workflow detail: chain of custody

The system **automatically tracks who accessed what and when**, to preserve chain of custody — this is a legal/evidentiary requirement, not a nice-to-have audit log. Reported time savings: **8–16 hours per investigator per week**. [[nicepublicsafety.com — DEMS guide](https://www.nicepublicsafety.com/resources/digital-evidence-management-system-dems-guide)]

## Why this matters for design work

- Every screen touching evidence is implicitly a **legal record**. Any design decision that could obscure who-did-what-when (bulk actions without individual attribution, edits that don't version, ambiguous timestamps) is a real risk here, not a cosmetic one.
- The stated value proposition is **time saved per investigator per week** — a concrete, quotable metric. When proposing a workflow change in this space, framing the benefit in "hours saved per investigator" terms matches how NICE already sells this product line.
- Investigators are moving evidence **out** to other parties (prosecutors, courts) as a core job — sharing/permissions/audit-trail UI is not a secondary feature here, it's central to the product's reason for existing.

## Who's actually using this

- **911/emergency communications staff**: earliest point of data capture — likely time-pressured, incident-driven UI needs (not covered in depth by available public sources beyond the pipeline description above).
- **Law-enforcement investigators**: primary daily users — collecting, organizing, and building a case file from evidence across many sources (video, documents, etc.).
- **Prosecutors and court staff**: downstream consumers of the case file — need reliable, permissioned access to what an investigator shared, without needing investigator-level tooling.
