---
type: project
status: completed
created: 2026-08-08
due:
completed: 2026-08-09
updated:
  - 2026-08-09
tags:
  - project
  - obsidian
  - migration
  - personal-vault
  - system-architecture
skills:
  - Obsidian
  - YAML
  - File Management
  - Systems Architecture
people: []
---

---

type: project
status: completed
created: 2026-08-08
due:
completed: 2026-08-09
updated:

* 2026-08-09
  tags:
* project
* obsidian
* migration
* personal-vault
* system-architecture
  skills:
* Obsidian
* YAML
* File Management
* Systems Architecture
  people: []

---

# Personal-Vault Migration

## Overview

### Objective

Migrate the Obsidian journal from the nested vault structure:

`C:\Users\tipta\Documents\Personal-Vault\Journal`

to:

`C:\Users\tipta\Documents\Personal-Vault`

Establish `Personal-Vault` as the Obsidian vault root and create the foundation for a scalable PARA-inspired knowledge-management system.

### Scope

The migration included:

* Moving the Obsidian vault root from `Personal-Vault\Journal` to `Personal-Vault`.
* Moving `.obsidian` to the new vault root.
* Preserving existing journal entries.
* Establishing the PARA-inspired top-level structure.
* Establishing `00_Inbox`.
* Establishing `01 Projects - Active Tasks`.
* Establishing `02 Areas - Ongoing Responsibilities`.
* Establishing `03 Resources - Knowledge Library`.
* Establishing `04 Archives - Completed Work`.
* Establishing `05_Journal`.
* Establishing `99 System`.
* Establishing dedicated locations for Bases, templates, attachments, scripts and configuration.
* Reconfiguring Obsidian against the new vault root.
* Confirming existing community plugins remained available.
* Separating Obsidian Markdown templates from VS Code Markdown templates.
* Keeping source-code projects outside the Obsidian vault.

### Outcome

The migration was successfully completed.

`C:\Users\tipta\Documents\Personal-Vault` is now the Obsidian vault root, with `.obsidian` located directly beneath it.

The journal is now one component of the wider Personal-Vault system rather than being a separate nested vault.

The structure now provides the foundation for integrating:

```text
Projects
    ↓
Milestones
    ↓
Tasks / Subtasks
    ↓
Scheduled Work
    ↓
Daily Journal
    ↓
Completed Work / Project History
```

## Initiating

This section records what is required to start or properly undertake the project. Resources are treated as prerequisites rather than general reference material.

### Resources Needed

* [x] Existing Obsidian journal vault
* [x] Existing Personal-Vault directory
* [x] Existing `.obsidian` configuration
* [x] Existing journal entries
* [x] Git repository

### Prerequisites

* [x] Establish the new Personal-Vault root.
* [x] Preserve the existing journal data.
* [x] Confirm the existing Obsidian configuration can be moved.
* [x] Confirm development/source-code repositories can remain outside the vault.

### People

* [[Boss]]

## Due Date

**Project due:** Not specified

## Milestones

Milestones divide the project into meaningful stages. Tasks should be attached to the milestone they contribute to.

### Milestone 1 — Vault Migration

**Due:** 2026-08-08

* [x] Identify original vault location 📅 2026-08-08 ✅ 2026-08-09
* [x] Establish new Personal-Vault root 📅 2026-08-08 ✅ 2026-08-09
* [ ] Move `.obsidian` to Personal-Vault root 📅 2026-08-08
* [ ] Open Personal-Vault as the Obsidian vault 📅 2026-08-08

### Milestone 2 — Vault Structure

**Due:** 2026-08-08

* [x] Establish PARA-inspired folder structure 📅 2026-08-08 ✅ 2026-08-08
* [x] Establish `05_Journal` 📅 2026-08-08 ✅ 2026-08-08
* [x] Establish `99 System` 📅 2026-08-08 ✅ 2026-08-08
* [x] Establish Obsidian template location 📅 2026-08-08 ✅ 2026-08-08
* [x] Establish attachment location 📅 2026-08-08 ✅ 2026-08-08

### Milestone 3 — Obsidian Configuration

**Due:** 2026-08-09

* [x] Configure Daily Notes 📅 2026-08-09 ✅ 2026-08-09
* [x] Configure Templater 📅 2026-08-09 ✅ 2026-08-09
* [x] Configure File Update Tracker 📅 2026-08-09 ✅ 2026-08-09
* [x] Verify daily journal creation 📅 2026-08-09 ✅ 2026-08-09
* [x] Separate Obsidian and VS Code template systems 📅 2026-08-09 ✅ 2026-08-09

### Milestone 4 — Projects & Tasks Foundation

**Due:** 2026-08-09

* [x] Establish initial Projects & Tasks implementation 📅 2026-08-09 ✅ 2026-08-09
* [x] Verify task and subtask behaviour 📅 2026-08-09 ✅ 2026-08-09

### Milestone 5 — Migration Completion

**Due:** 2026-08-09

* [x] Verify Personal-Vault as the Obsidian vault 📅 2026-08-09 ✅ 2026-08-09
* [x] Verify existing plugins 📅 2026-08-09 ✅ 2026-08-09
* [x] Complete migration 📅 2026-08-09 ✅ 2026-08-09

## Tasks

Use this section for tasks that do not belong to a specific milestone, or for an overall project task list.

No additional standalone tasks.

## Skills

Skills required, developed, or improved during the project.

* [[Obsidian]]
* [[YAML]]
* [[File Management]]
* [[Systems Architecture]]

## Dependencies

Things that must happen before this project or part of the project can proceed.

* [x] Existing Personal-Vault directory available.
* [x] Existing Obsidian vault available.
* [x] Existing journal data preserved.
* [x] Git repository preserved.

## Problems & Troubleshooting

Record problems encountered, diagnosis, solutions and anything useful if the problem occurs again.

### Problem — Original nested vault

**Symptom:**

The Obsidian vault was located at:

`C:\Users\tipta\Documents\Personal-Vault\Journal`

while the wider Personal-Vault structure existed outside the vault.

**Cause:**

The journal had originally been created as the Obsidian vault before the wider Personal-Vault architecture was established.

**Solution:**

Moved the vault root to:

`C:\Users\tipta\Documents\Personal-Vault`

and moved `.obsidian` to the new root.

**Prevention / Lesson:**

The entire Personal-Vault should remain the Obsidian vault root.

### Problem — Daily Notes created an incorrect directory

**Symptom:**

Daily Notes initially created a new `01_Journal` directory rather than using the established journal location.

**Cause:**

Daily Notes had not yet been correctly configured for the new vault structure.

**Solution:**

Configured Daily Notes to use:

`05_Journal/05.1_Daily`

**Prevention / Lesson:**

Plugin paths should be checked after changing the vault root.

### Problem — Separate VS Code and Obsidian templates

**Symptom:**

Existing VS Code Markdown templates used VS Code-specific template syntax and were not suitable as Obsidian templates.

**Cause:**

The templates were created before Obsidian was installed.

**Solution:**

Obsidian templates were established separately under:

`99 System/99.02 Templates`

VS Code templates remain outside the Obsidian template system.

**Prevention / Lesson:**

Do not attempt to make one template system serve both applications when their template engines differ.

### Problem — Plugin configuration after vault migration

**Symptom:**

Existing community plugins were present but required configuration against the new vault structure.

**Cause:**

Plugin configuration had originally been associated with the nested `Journal` vault.

**Solution:**

The `.obsidian` directory was moved to the new vault root and the relevant plugins were reconfigured.

**Prevention / Lesson:**

After changing an Obsidian vault root, verify plugin paths individually.

## Notes

The migration established the structural foundation for the next phase of development.

Development/source-code repositories remain outside the Obsidian vault to prevent the knowledge base from becoming unnecessarily large or coupled to software repositories.

The Personal-Vault structure is PARA-inspired rather than a strict implementation of PARA.

## Project Log

Record significant project activity, decisions, changes and discoveries chronologically.

### 2026-08-08

* Migrated the Obsidian vault from `Personal-Vault\Journal` to `Personal-Vault`.
* Established the new Personal-Vault structure.
* Moved `.obsidian` to the new vault root.
* Reopened the vault successfully.
* Established the initial PARA-inspired structure.
* Established `05_Journal`.
* Established `99 System`.
* Established Obsidian template and attachment locations.
* Began configuring the Obsidian system.

### 2026-08-09

* Configured Daily Notes.
* Configured Templater.
* Configured File Update Tracker.
* Established the journal directory structure.
* Established the initial Projects & Tasks implementation.
* Verified daily journal creation.
* Verified task and subtask behaviour.
* Separated Obsidian and VS Code template systems.
* Verified the Personal-Vault as the Obsidian vault.
* Completed the migration project.

## Completion

### Completion Criteria

The project is complete when:

* [x] Personal-Vault is the Obsidian vault root.
* [x] `.obsidian` is located at the vault root.
* [x] Existing journal entries remain accessible.
* [x] PARA-inspired structure is established.
* [x] `05_Journal` is established.
* [x] `99 System` is established.
* [x] Obsidian templates are separated from VS Code templates.
* [x] Attachments have a dedicated system location.
* [x] Daily Notes is configured correctly.
* [x] Templater is configured correctly.
* [x] File Update Tracker is configured correctly.
* [x] Projects & Tasks foundation is established.
* [x] Task and subtask behaviour has been verified.

### Final Result

**Migration complete.**

The Personal-Vault is now the Obsidian vault root and provides the foundation for the next development phase:

**Projects & Tasks → Daily Journal integration.**

### Lessons Learned

* Keep the vault root at `Personal-Vault`.
* Keep development repositories outside the vault unless there is a specific reason to integrate them.
* Keep Obsidian system resources under `99 System`.
* Keep VS Code templates separate from Obsidian templates.
* Configure plugin paths explicitly after changing the vault root.
* Prefer Obsidian-native functionality and established plugins before introducing custom code.
* Keep project information in project files rather than duplicating it throughout daily journals.
* Use Tasks and Bases to surface project information into journals rather than creating duplicate records.
