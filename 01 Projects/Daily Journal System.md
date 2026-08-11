---
name: Daily Journal System
parent:
project:
kind:
status: Completed
priority:
created: 2026-08-11
updated:
  - 2026-08-11 18:36
due: 2026-08-11
completed: 2026-08-11
tags:
skills: []
people: []
cover:
description: Structured daily journaling and activity logging system using inline properties, project links, ideas, and Dataview aggregation.
depends_on: []
blocked_by: []
---

# Daily Journal System

## Overview

### Objective

Build a structured daily journaling and activity logging system in Obsidian that records daily activities inline while allowing activities to be associated with existing projects.

### Scope
 
- Add an Activity Log section to daily journal notes.
- Record activities with timestamps and inline properties.
- Use `Project::` links to associate activities with existing projects.
- Use `Idea::` for potential projects that do not yet exist.
- Aggregate project-related activity back into the relevant project note.
- Establish the structure as a reusable daily-note and project-note system.

### Outcome

A working daily Activity Log system where activities remain in the daily journal as the source of truth, existing projects are referenced through Obsidian links, new project ideas remain distinct, and project pages can automatically display related daily activity.

## Initiating

This section records what is required to start or properly undertake the project. Resources and prerequisites are treated as tracked project tasks, not general reference material.

### Resources Needed

No additional resources required.

### Prerequisites

- [x] Existing Obsidian vault structure 📅 2026-08-11
- [x] Daily journal template 📅 2026-08-11
- [x] Project template 📅 2026-08-11
- [x] Dataview community plugin 📅 2026-08-11

### People

Not applicable.

## Due Date

**Project due:** 2026-08-11

## Milestones

### Milestone 1 — Daily Activity Log

**Due:** 2026-08-11

- [x] Add Activity Log section to daily template 📅 2026-08-11
- [x] Define timestamp and inline-property structure 📅 2026-08-11

### Milestone 2 — Project Integration

**Due:** 2026-08-11

- [x] Establish `Project::` links for existing projects 📅 2026-08-11
- [x] Establish `Idea::` handling for projects not yet created 📅 2026-08-11
- [x] Test project activity aggregation using Daily Journal System 📅 2026-08-11

## Tasks

- [x] Create Activity Log section in daily template 📅 2026-08-11
- [x] Create test project using the project template 📅 2026-08-11
- [x] Test project links from the daily journal 📅 2026-08-11
- [x] Create automatic project Activity view 📅 2026-08-11
- [x] Verify existing project activity is displayed correctly 📅 2026-08-11

## Skills

- Obsidian Bases
- Dataview
- Dataview queries
- Obsidian inline properties
- Obsidian internal links

## Dependencies

No outstanding dependencies.

## Problems & Troubleshooting

### Problem — Initial Base approach could not aggregate individual inline Activity Log entries

**Symptom:**

A Base could identify daily-note files but could not provide the required one-row-per-activity aggregation from inline list items.

**Cause:**

Bases operates primarily at the file/property level rather than treating individual Markdown list items as independent database records.

**Solution:**

Use Obsidian links for the project relationship and Dataview's `file.lists` with `FLATTEN` to aggregate individual Activity Log list items.

**Prevention / Lesson:**

Use Bases for file/project-level database views and Dataview where list-item-level aggregation is required.

## Notes

The daily journal remains the source of truth for activity history.

Existing projects are referenced using:

`Project:: [[Project Name]]`

Potential projects that do not yet have project notes are recorded using:

`Idea:: Project Name`

The project page automatically displays activities associated with it through the Dataview Activity view.

## Project Log

2026-08-11 — Designed and implemented the daily Activity Log structure.

2026-08-11 — Added `Project::` links for associating activities with existing projects.

2026-08-11 — Established `Idea::` for potential projects that do not yet exist.

2026-08-11 — Tested project activity aggregation using Daily Journal System.

2026-08-11 — Confirmed Dataview can identify individual list items associated with a project.

2026-08-11 — Completed proof of concept and closed project.

## Activity

```dataview
TABLE
    item.text AS "Activity",
    item.category AS "Category"
FROM "05_Journal/05.1_Daily"
FLATTEN file.lists AS item
WHERE item.project = [[Daily Journal System]]
SORT file.name DESC
```

## Completion

### Completion Criteria

- [x]  Activity Log added to the daily journal template 📅 2026-08-11
- [x]  Existing projects can be linked from daily activities 📅 2026-08-11
- [x]  New project ideas can be recorded without creating project notes 📅 2026-08-11
- [x]  Project activity can be automatically aggregated from daily notes 📅 2026-08-11
- [x]  Proof of concept tested successfully with Daily Journal System 📅 2026-08-11

### Final Result

The Daily Journal System proof of concept was successfully implemented and tested. Daily activities can now be recorded inline, associated with existing projects through links, or recorded as new project ideas. Project pages can automatically display their associated daily activity.

### Lessons Learned

- Keep daily activity records in the daily journal rather than duplicating them in project files.
- Use Obsidian links as the relationship between daily activities and established projects.
- Keep new project ideas separate until a project note is actually created.
- Use Dataview for list-item-level aggregation and Bases for file-level project management.
- Test the simplest native data structure before adding additional automation or parsing.