---
name:
parent:
project:
kind:
status:
priority:
created: <% tp.date.now("YYYY-MM-DD") %>
updated: []
due:
completed:
tags: []
skills: []
people: []
cover:
description:
depends_on: []
blocked_by: []

---
# Project Title

## Overview

### Objective

Describe what the project is intended to achieve.

### Scope

Define what is included in the project and, where useful, what is explicitly excluded.

### Outcome

Describe the intended final result.

## Initiating

This section records what is required to start or properly undertake the project. Resources and prerequisites are treated as **tracked project tasks**, not general reference material.

### Resources Needed

Resources required to undertake the project.

Each resource requirement should be a tracked task with a scheduled date and, when obtained, an actual completion date.
-  Resource required 📅 YYYY-MM-DD
    

### Prerequisites

Conditions or actions that must be completed before the project or a project stage can proceed.

-  Prerequisite 📅 YYYY-MM-DD
    

### People

People involved in, responsible for, consulted during, or otherwise relevant to the project.

- [[Person]]
    

## Due Date

**Project due:** YYYY-MM-DD

## Milestones

Milestones divide the project into meaningful stages. Tasks should be attached to the milestone they contribute to.

### Milestone 1 — [Name]

**Due:** YYYY-MM-DD

-  Task 📅 YYYY-MM-DD
    
    -  Subtask 📅 YYYY-MM-DD
        
    -  Subtask 📅 YYYY-MM-DD
        

### Milestone 2 — [Name]

**Due:** YYYY-MM-DD

-  Task 📅 YYYY-MM-DD
    
    -  Subtask 📅 YYYY-MM-DD
        
    -  Subtask 📅 YYYY-MM-DD
        

## Tasks

Use this section for tasks that do not belong to a specific milestone, or for an overall project task list.

All project tasks use the following date convention:

- `📅 YYYY-MM-DD` — scheduled/due date.
    
- `✅ YYYY-MM-DD` — actual completion date.
    

The same convention applies to subtasks.

-  Task 📅 YYYY-MM-DD
    
    -  Subtask 📅 YYYY-MM-DD
        
    -  Subtask 📅 YYYY-MM-DD
        

## Skills

Skills required, developed, or improved during the project.

- [[Skill]]
    

## Dependencies

Things that must happen before this project or part of the project can proceed.

Dependencies that require action are tracked as Tasks.

-  Dependency 📅 YYYY-MM-DD
    

## Problems & Troubleshooting

Record problems encountered, diagnosis, solutions and anything useful if the problem occurs again.

### Problem

**Symptom:**

**Cause:**

**Solution:**

**Prevention / Lesson:**

## Notes

General project notes that do not belong in another section.

## Project Log

Record significant project activity, decisions, changes and discoveries chronologically.

Every entry must begin with `YYYY-MM-DD`. Newest entries first.

YYYY-MM-DD — DESC TEXT HERE

## Project Log

Record significant project activity, decisions, changes and discoveries chronologically.

Every entry must begin with `YYYY-MM-DD`. Newest entries first.

YYYY-MM-DD — DESC TEXT HERE

## Activity

```dataview
LIST
FROM "_Journal/05.1_Daily"
WHERE contains(file.outlinks, this.file.link)
SORT file.name DESC
```

## Completion

### Completion Criteria

The project is complete when the following criteria have been satisfied.

Actionable completion criteria are tracked as Tasks and use the same scheduled/completion date convention.

-  Completion criterion 📅 YYYY-MM-DD
    

### Final Result

Describe the actual result achieved.

### Lessons Learned

Record useful lessons, decisions, problems avoided, and information that should influence future projects