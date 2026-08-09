---
name: YouTube History Scraper
parent: []
project: []
kind: project
status: active
priority: medium
created: 2026-06-18
updated:
  - 2026-08-09
due:
completed:
tags:
  - project
  - automation
  - youtube
  - javascript
  - scraper
  - history
skills:
  - JavaScript
  - Browser Automation
  - Data Extraction
  - Git
  - Obsidian
  - Systems Architecture
people: []
cover:
description: Extract YouTube watch history from the browser and convert it into structured records for analysis and Personal-Vault integration.
depends_on:
  - "[[Personal-Vault Migration]]"
blocked_by: []
---

# YouTube History Scraper

## Overview

### Objective

Maintain a reliable tool for extracting YouTube watch history from the browser and converting it into structured data suitable for long-term storage, analysis and integration with Personal-Vault.

### Scope

The project covers:

* Browser-based YouTube history extraction.
* Parsing video titles, channels and durations.
* Detecting YouTube history date boundaries.
* Handling changes to YouTube's page structure.
* Formatting extracted history into readable records.
* Maintaining the scraper and formatter as a Git-controlled project.
* Integrating useful output with Personal-Vault where appropriate.
* Supporting future journal and Bases views of YouTube activity.

The source code remains outside the Obsidian vault.

Current development location:

`C:\Users\tipta\source\automation\yt-history-scraper`

### Outcome

A maintainable YouTube history extraction system that produces consistent historical records and can provide useful information to the Personal-Vault journal.

The architecture is:

```text
YouTube History
      ↓
Browser Extractor
      ↓
JSON
      ↓
Log Formatter
      ↓
Structured History
      ↓
Personal-Vault
      ↓
Daily Journal / Bases
```

## Initiating

This section records what is required to start or properly undertake the project. Resources are treated as prerequisites rather than general reference material.

### Resources Needed

* [x] YouTube history page 📅 2026-06-18 ✅ 2026-06-18
* [x] Browser console access 📅 2026-06-18 ✅ 2026-06-18
* [x] Node.js development environment 📅 2026-06-18 ✅ 2026-06-18
* [x] VS Code development environment 📅 2026-06-18 ✅ 2026-06-18
* [x] Git repository 📅 2026-06-18 ✅ 2026-06-18
* [x] Personal-Vault available for integration 📅 2026-08-09 ✅ 2026-08-09

### Prerequisites

* [x] Establish source-code project directory 📅 2026-06-18 ✅ 2026-06-18
* [x] Establish Git repository 📅 2026-06-18 ✅ 2026-06-18
* [x] Establish browser extraction method 📅 2026-06-18 ✅ 2026-06-18
* [x] Establish JSON output 📅 2026-06-18 ✅ 2026-06-18
* [x] Establish log formatter 📅 2026-06-19 ✅ 2026-06-19

### People

* []

## Due Date

**Project due:**

## Milestones

### Milestone 1 — Browser Extraction

**Due:**

* [x] Create browser extraction script 📅 2026-06-18 ✅ 2026-06-18
* [x] Extract video titles 📅 2026-06-18 ✅ 2026-06-18
* [x] Extract channel information 📅 2026-06-18 ✅ 2026-06-18
* [x] Extract duration information 📅 2026-06-18 ✅ 2026-06-18
* [x] Extract history date information 📅 2026-06-18 ✅ 2026-06-18
* [x] Produce JSON output 📅 2026-06-18 ✅ 2026-06-18

### Milestone 2 — History Parsing

**Due:**

* [x] Detect explicit YouTube date headers 📅 2026-06-20 ✅ 2026-06-20
* [x] Fix date parsing when YouTube changed page structure 📅 2026-06-20 ✅ 2026-06-20
* [x] Preserve chronological ordering 📅 2026-06-20 ✅ 2026-06-20
* [x] Handle multiple history dates correctly 📅 2026-06-20 ✅ 2026-06-20

### Milestone 3 — Log Formatting

**Due:**

* [x] Create `log_formatter.js` 📅 2026-06-19 ✅ 2026-06-19
* [x] Convert JSON history into readable logs 📅 2026-06-19 ✅ 2026-06-19
* [x] Establish changelog format 📅 2026-06-20 ✅ 2026-06-20
* [x] Centralise generated logs 📅 2026-06-19 ✅ 2026-06-19
* [x] Verify formatted output 📅 2026-06-20 ✅ 2026-06-20

### Milestone 4 — Development Environment

**Due:**

* [x] Move project into source-code directory 📅 2026-06-19 ✅ 2026-06-19
* [x] Establish VS Code workflow 📅 2026-06-19 ✅ 2026-06-19
* [x] Establish Git workflow 📅 2026-06-19 ✅ 2026-06-19
* [x] Establish project README 📅 2026-06-20 ✅ 2026-06-20
* [x] Verify clean Git working tree 📅 2026-06-20 ✅ 2026-06-20

### Milestone 5 — Personal-Vault Integration

**Due:**

* [x] Establish Personal-Vault as the Obsidian vault 📅 2026-08-09 ✅ 2026-08-09
* [ ] Define YouTube history project properties 📅 2026-08-09
* [ ] Define journal integration 📅 2026-08-09
* [ ] Create Bases view for YouTube activity
* [ ] Test YouTube activity in daily journal
* [ ] Decide whether individual videos should become separate records

## Tasks

Use this section for tasks that do not belong to a specific milestone.

* [ ] Review scraper against current YouTube DOM
* [ ] Test extraction against current history
* [ ] Review formatter output
* [ ] Review generated log naming
* [ ] Update README
* [ ] Commit stable changes to Git
* [ ] Push stable changes to `origin/main`

## Skills

Skills required, developed, or improved during the project.

* [[JavaScript]]
* [[Browser Automation]]
* [[Data Extraction]]
* [[Git]]
* [[Obsidian]]
* [[Systems Architecture]]

## Dependencies

Things that must happen before this project or part of the project can proceed.

* [x] Browser access to YouTube history 📅 2026-06-18 ✅ 2026-06-18
* [x] Development environment available 📅 2026-06-18 ✅ 2026-06-18
* [x] Git repository available 📅 2026-06-18 ✅ 2026-06-18
* [x] Personal-Vault available for integration 📅 2026-08-09 ✅ 2026-08-09

## Problems & Troubleshooting

### YouTube Date Headers Changed

**Symptom:**

The scraper stopped correctly identifying the date associated with history entries after YouTube changed the structure/content of the history page.

**Cause:**

The scraper depended on the previous date-header representation.

**Solution:**

The date parsing logic was updated to recognise the explicit YouTube date information.

**Prevention / Lesson:**

Treat YouTube's DOM structure as unstable and keep extraction/parsing logic isolated so changes can be repaired without redesigning the whole project.

### Generated Log Location

**Symptom:**

Generated history files were becoming mixed with the source-code project.

**Cause:**

Output files were initially being created within or near the development project.

**Solution:**

Generated logs were moved to the dedicated logs location:

`C:\Users\tipta\logs\yt-history-scraper`

**Prevention / Lesson:**

Keep source code, generated data and operational logs separate.

## Notes

The source code should remain outside Personal-Vault.

The Personal-Vault should contain useful structured records or references rather than the development repository itself.

Current source repository:

`C:\Users\tipta\source\automation\yt-history-scraper`

Current log location:

`C:\Users\tipta\logs\yt-history-scraper`

The project should eventually expose useful YouTube activity through the Personal-Vault without duplicating the entire raw history unnecessarily.

## Project Log

Record significant project activity, decisions, changes and discoveries chronologically. Every entry must begin with `YYYY-MM-DD`. Newest entries first.

* **2026-08-09** — Began integrating the YouTube History Scraper with the Personal-Vault Projects & Tasks system.
* **2026-08-09** — Identified the need for YouTube activity to be surfaced through Personal-Vault and potentially Bases.
* **2026-06-20** — Fixed date parsing after changes to YouTube history date headers.
* **2026-06-20** — Established the project changelog format.
* **2026-06-19** — Moved development work into the source-code directory.
* **2026-06-19** — Centralised generated logs outside the source repository.
* **2026-06-19** — Created and developed the log formatter.
* **2026-06-18** — Created the browser-based YouTube history extraction workflow.
* **2026-06-18** — Established JSON extraction output.

## Completion

### Completion Criteria

The project is complete when:

* [ ] YouTube history can be extracted reliably.
* [ ] Date boundaries are parsed correctly.
* [ ] Video metadata is extracted consistently.
* [ ] JSON output is valid.
* [ ] Formatted logs are generated correctly.
* [ ] Source code and generated output remain separated.
* [ ] Git repository is clean and synchronised.
* [ ] Personal-Vault integration is defined.
* [ ] A useful YouTube activity Base exists.
* [ ] Daily journal integration has been tested.

### Final Result

*To be completed when the project is finished.*

### Lessons Learned

* YouTube's DOM and history-page structure can change without notice.
* Extraction, parsing and formatting should remain separate components.
* Source code and generated data should remain separate.
* Personal-Vault should consume useful structured information rather than becoming the storage location for the development repository.
