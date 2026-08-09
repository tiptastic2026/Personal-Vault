---
name: Projects & Tasks Implementation
parent: []
project: []
kind: project
status: active
priority: 3
created: 2026-08-09
updated:
  - 2026-08-09 03:16
due:
completed:
tags:
  - project
  - obsidian
  - tasks
  - bases
  - productivity
skills:
  - Obsidian
  - Bases
  - Tasks
  - YAML
  - Systems Architecture
people: []
cover:
description: Implement and validate the project, milestone, deliverable and task system and integrate it with the daily journal.
depends_on:
  - "[[Personal-Vault Migration]]"
blocked_by: []
---

# Projects & Tasks Implementation

## Overview

### Objective

Implement a reliable project and task management system within Personal-Vault.

The system will connect projects, milestones, deliverables, tasks and the daily journal while keeping project information in its source project files.

### Scope

The project includes:

- Standardising work-item properties.
    
- Defining the project hierarchy.
    
- Creating project, milestone, deliverable and idea templates.
    
- Configuring the Obsidian Tasks workflow.
    
- Integrating Tasks with the daily journal.
    
- Creating Bases views for different work-item types.
    
- Testing the complete workflow.
    
- Establishing the system as the standard method for managing projects and tasks.
    

### Outcome

A functioning project-management system where:

```text
Idea
  ↓
Project
  ↓
Milestone
  ↓
Deliverable
  ↓
Tasks / Subtasks
  ↓
Daily Journal
  ↓
Completion / History
```

The project file remains the source of truth.

The daily journal and Bases provide operational views of that information.

## Initiating

This section records what is required to start or properly undertake the project. Resources are treated as prerequisites rather than general reference material.

### Resources Needed

-  Personal-Vault Migration completed 📅 2026-08-09 ✅ 2026-08-09
    
-  Personal-Vault established as the Obsidian vault 📅 2026-08-09 ✅ 2026-08-09
    
-  Obsidian Tasks plugin available 📅 2026-08-09 ✅ 2026-08-09
    
-  Obsidian Bases available 📅 2026-08-09 ✅ 2026-08-09
    
-  Templater available 📅 2026-08-09 ✅ 2026-08-09
    
-  Daily Journal established 📅 2026-08-09 ✅ 2026-08-09
    

### Prerequisites

-  Complete Personal-Vault migration 📅 2026-08-09 ✅ 2026-08-09
    
-  Establish `01 Projects` 📅 2026-08-09 ✅ 2026-08-09
    
-  Establish `99 System/99.02 Templates` 📅 2026-08-09 ✅ 2026-08-09
    
-  Configure Daily Notes 📅 2026-08-09 ✅ 2026-08-09
    
-  Configure Templater 📅 2026-08-09 ✅ 2026-08-09
    

### People

- []
    

## Due Date

**Project due:**

## Milestones

Milestones divide the project into meaningful stages. Tasks should be attached to the milestone they contribute to.

### Milestone 1 — Work Item Architecture

**Due:**

-  Finalise common work-item properties 📅 2026-08-09
    
-  Finalise `kind` values 📅 2026-08-09
    
-  Finalise `parent` and `project` relationships 📅 2026-08-09
    
-  Define status values
    
-  Define priority values
    

### Milestone 2 — Project Templates

**Due:**

-  Finalise Project template
    
-  Create Milestone template
    
-  Create Deliverable template
    
-  Create Idea template
    
-  Test template-generated properties
    
-  Test template-generated content
    

### Milestone 3 — Tasks Integration

**Due:**

-  Configure Tasks workflow
    
-  Test task due dates
    
-  Test task scheduled dates
    
-  Test task completion dates
    
-  Test subtasks
    
-  Surface scheduled tasks in daily journal
    
-  Surface completed tasks in daily journal
    
-  Verify completed task counts
    

### Milestone 4 — Bases

**Due:**

-  Create Work Items Base
    
-  Create Projects view
    
-  Create Ideas view
    
-  Create Milestones view
    
-  Create Deliverables view
    
-  Create Active Work view
    
-  Create Completed Work view
    
-  Test filtering by `kind`
    
-  Test filtering by `project`
    
-  Test filtering by `parent`
    
-  Test filtering by `status`
    

### Milestone 5 — End-to-End Testing

**Due:**

-  Create test project
    
-  Create test milestone
    
-  Create test deliverable
    
-  Add tasks and subtasks
    
-  Add due dates
    
-  Add scheduled dates
    
-  Complete tasks
    
-  Verify completion dates
    
-  Verify daily journal views
    
-  Verify Bases views
    
-  Verify project relationships
    
-  Verify completed project workflow
    

## Tasks

Use this section for tasks that do not belong to a specific milestone, or for an overall project task list.

-  Review overall system after milestone completion
    
-  Document final workflow
    
-  Update README with final Projects & Tasks architecture
    
-  Commit stable implementation to Git
    

## Skills

Skills required, developed, or improved during the project.

- [[Obsidian]]
    
- [[Bases]]
    
- [[Tasks]]
    
- [[YAML]]
    
- [[Templater]]
    
- [[Systems Architecture]]
    

## Dependencies

Things that must happen before this project or part of the project can proceed.

-  [[Personal-Vault Migration]] completed 📅 2026-08-09 ✅ 2026-08-09
    
-  Personal-Vault established 📅 2026-08-09 ✅ 2026-08-09
    
-  Daily Journal established 📅 2026-08-09 ✅ 2026-08-09
    
-  Tasks plugin available 📅 2026-08-09 ✅ 2026-08-09
    
-  Bases available 📅 2026-08-09 ✅ 2026-08-09
    

## Problems & Troubleshooting

Record problems encountered, diagnosis, solutions and anything useful if the problem occurs again.

### Problem

**Symptom:**

**Cause:**

**Solution:**

**Prevention / Lesson:**

## Notes

The project-management system should remain deliberately simple until the core workflow has been proven.

Avoid adding automation merely because it is technically possible.

The project file remains the source of truth. Bases and the daily journal are views over the underlying information.

## Project Log

Record significant project activity, decisions, changes and discoveries chronologically. Every entry must begin with `YYYY-MM-DD`. Newest entries first.

- **2026-08-09** — Established the Projects & Tasks implementation as the next active project following completion of the Personal-Vault migration.
    
- **2026-08-09** — Defined the work-item hierarchy: `Idea → Project → Milestone → Deliverable → Tasks`.
    
- **2026-08-09** — Defined the common property model.
    
- **2026-08-09** — Established the requirement for separate Bases views.
    
- **2026-08-09** — Established the requirement for daily journal task integration.
    
- **2026-08-09** — Confirmed that tasks should retain due and completion dates.
    
- **2026-08-09** — Confirmed that project information should not be duplicated in daily journals.
    

## Completion

### Completion Criteria

The project is complete when:

-  Ideas, projects, milestones and deliverables use the common property model.
    
-  `parent` and `project` relationships work correctly.
    
-  Tasks can be attached to the appropriate work item.
    
-  Tasks support due dates.
    
-  Tasks support scheduled dates.
    
-  Tasks retain completion dates.
    
-  Subtasks work correctly.
    
-  Daily journals show today's scheduled tasks.
    
-  Daily journals show tasks completed today.
    
-  Bases provide separate views for each work-item kind.
    
-  Active and completed work can be filtered correctly.
    
-  A complete project can be created and managed from start to completion.
    
-  Final workflow is documented.
    
-  Stable implementation is committed to Git.
    

### Final Result

_To be completed when the project is finished._

### Lessons Learned

_To be completed when the project is finished._