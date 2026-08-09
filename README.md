---
updated:
  - 2026-08-09 02:30
---

  

# Personal Vault: The Boss Omni-Protocol

  

## 1. Vault Architecture

  

The Obsidian vault root is:

  

`C:\Users\tipta\Documents\Personal-Vault`

  

The vault uses a PARA-inspired structure:

  

- `00_Inbox` — Unprocessed items and temporary capture.

- `01 Projects - Active Tasks` — Time-bound projects and active work.

- `02 Areas - Ongoing Responsibilities` — Ongoing responsibilities.

- `03 Resources - Knowledge Library` — Reference and research material.

- `04 Archives - Completed Work` — Completed or inactive work.

- `05_Journal` — Daily, weekly and monthly journals.

- `99 System` — Obsidian templates, Bases, attachments, scripts and configuration.

  

Obsidian configuration is stored in:

  

`.obsidian`

  

Development/source-code repositories remain outside the vault unless there is a specific reason to integrate them.

  

---

  

## 2. Projects & Tasks

  

The project system uses a common work-item structure.

  

### Work Item Types

  

The `kind` property identifies the type of work item:

  

- `idea` — Potential future work.

- `project` — Major time-bound body of work.

- `milestone` — Meaningful stage within a project.

- `deliverable` — Concrete output produced by a milestone or project.

  

### Work Item Hierarchy

  

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

```

  

Work items use:

  

```yaml

name:

parent:

project:

kind:

status:

priority:

created:

updated:

due:

completed:

tags: []

skills: []

people: []

cover:

description:

depends_on: []

blocked_by: []

```

  

### Parent

  

`parent` identifies the immediate parent work item.

  

### Project

  

`project` identifies the top-level project to which the work item belongs.

  

This allows Bases to find all milestones and deliverables belonging to a project without recursively following the hierarchy.

  

---

  

## 3. Tasks

  

Tasks are managed using the Obsidian Tasks plugin.

  

Tasks may contain:

  

- Due dates.

- Scheduled dates.

- Completion dates.

- Priorities.

- Subtasks.

- Project or milestone context.

  

Example:

  

```markdown

- [ ] Configure Daily Notes 📅 2026-08-09

```

  

Completed tasks retain their completion date:

  

```markdown

- [x] Configure Daily Notes 📅 2026-08-09 ✅ 2026-08-09

```

  

Tasks remain in their project, milestone or deliverable context.

  

The daily journal surfaces scheduled and completed tasks rather than duplicating them.

  

---

  

## 4. Daily Journal Integration

  

Daily journals are stored under:

  

`05_Journal/05.1_Daily`

  

Daily notes use the filename:

  

```text

YYYY-MM-DD.md

```

  

The daily journal provides views of:

  

- Tasks scheduled for today.

- Tasks completed today.

- Files updated today.

- Daily journal activity.

- YouTube videos watched.

- Daily review and reflection.

  

The journal is an operational view of activity rather than the primary storage location for project information.

  

---

  

## 5. Templates

  

Obsidian templates are stored under:

  

`99 System/99.02 Templates`

  

Current template categories include:

  

- Daily journal.

- Projects.

- Meetings.

- Other Obsidian note types as required.

  

VS Code Markdown templates are maintained separately from the Obsidian vault.

  

They are not intended to share template syntax with Obsidian.

  

---

  

## 6. Attachments

  

Obsidian attachments are intended to be stored under:

  

`99 System/99.03 Attachments`

  

This provides a controlled location for images and other supporting files.

  

Attachments should not be unnecessarily scattered throughout the vault.

  

---

  

## 7. Bases

  

Bases provide structured views over work items and other vault data.

  

The primary work-item Base is:

  

`99 System/99.01 Bases/Work Items.base`

  

Views can be separated by:

  

- Projects.

- Ideas.

- Milestones.

- Deliverables.

- Active work.

- Completed work.

  

The underlying Markdown files remain the source of truth.

  

Bases provide views; they do not replace the source files.

  

---

  

## 8. Linking & Taxonomy

  

### People

  

People are linked using:

  

```text

[[Full Name]]

```

  

People records are stored under:

  

`03 Resources - Knowledge Library/People`

  

### Dates

  

Daily journals use:

  

```text

[[YYYY-MM-DD]]

```

  

### Tags

  

Tags are used for broad classification.

  

Examples:

  

```text

#project

#obsidian

#theology

#technology

```

  

Structured project metadata such as `kind`, `status`, `priority`, `skills` and `people` should generally be stored as properties rather than encoded into tags.

  

---

  

## 9. Workflow Protocol

  

### New Work

  

1. Capture the idea or requirement.

2. Create the appropriate work item.

3. Set its `kind`.

4. Set its `parent` and `project` where applicable.

5. Set status, priority and due date.

6. Define prerequisites and dependencies.

7. Create milestones where appropriate.

8. Create deliverables under milestones.

9. Add Tasks and Subtasks.

10. Work from the project while using the daily journal as the operational view.

  

### During Work

  

1. Update tasks as work progresses.

2. Record problems and troubleshooting in the relevant project.

3. Record significant decisions in the Project Log.

4. Update the `updated` property.

5. Use the daily journal to review scheduled and completed work.

  

### Completion

  

1. Complete outstanding tasks.

2. Record actual completion dates.

3. Confirm completion criteria.

4. Record the final result.

5. Record lessons learned.

6. Set the work item's status to `completed`.

7. Move/archive the project when appropriate.

  

---

  

# 10. Next Steps

  

The following are the immediate implementation priorities.

  

### Projects & Tasks

  

- [ ] Finalise the Project template.

- [ ] Finalise Milestone template.

- [ ] Finalise Deliverable template.

- [ ] Finalise Idea template.

- [ ] Standardise work-item properties.

- [ ] Establish project → milestone → deliverable → task workflow.

- [ ] Test task scheduling and completion dates.

- [ ] Test project and milestone relationships.

  

### Bases

  

- [ ] Build the Work Items Base.

- [ ] Create Projects view.

- [ ] Create Ideas view.

- [ ] Create Milestones view.

- [ ] Create Deliverables view.

- [ ] Create Active Work view.

- [ ] Create Completed Work view.

- [ ] Test filtering by `project`, `parent`, `kind` and `status`.

  

### Daily Journal

  

- [ ] Add today's scheduled Tasks query.

- [ ] Add today's completed Tasks query.

- [ ] Integrate project activity into the daily journal.

- [ ] Verify File Update Tracker integration.

- [ ] Verify updated files are surfaced correctly.

- [ ] Test the complete Project → Task → Daily Journal workflow.

  

### System Configuration

  

- [ ] Finalise Templater configuration.

- [ ] Finalise Daily Notes configuration.

- [ ] Finalise File Update Tracker configuration.

- [ ] Configure attachment handling.

- [ ] Review `.gitignore`.

- [ ] Commit the stable vault configuration to Git.

  

---

  

# 11. Nice to Have

  

These features are useful but should **not** be implemented until the core system is stable.

  

### Dashboard

  

- [ ] Build a main Personal-Vault dashboard.

- [ ] Show active projects.

- [ ] Show overdue tasks.

- [ ] Show today's tasks.

- [ ] Show upcoming deadlines.

- [ ] Show recently completed work.

  

### Project Intelligence

  

- [ ] Project progress indicators.

- [ ] Automatic milestone completion tracking.

- [ ] Automatic project completion percentage.

- [ ] Dependency visualisation.

- [ ] Blocked-work view.

- [ ] Projects grouped by priority.

- [ ] Projects grouped by skill.

  

### Journal Intelligence

  

- [ ] Weekly task summary.

- [ ] Monthly task summary.

- [ ] Completed-project summary.

- [ ] Automatic project activity history.

- [ ] Historical views of files updated over time.

  

### Automation

  

- [ ] QuickAdd commands for creating work items.

- [ ] Automated project/milestone linking.

- [ ] Automated property population.

- [ ] Automated archive workflow.

- [ ] Additional Templater automation where it provides genuine value.

  

### Knowledge Management

  

- [ ] Improve People database.

- [ ] Improve Skills database.

- [ ] Improve Resource classification.

- [ ] Add structured research workflows.

- [ ] Develop specialist Bases for knowledge areas.

  

### Visualisation

  

- [ ] Project dependency views.

- [ ] Timeline/Gantt-style project views.

- [ ] Project dashboards.

- [ ] Calendar-based project views.

  

---

  

# 12. Git

  

The Personal-Vault is maintained as a Git repository.

  

Normal workflow:

  

```bash

git status

git add .

git status

git commit -m "Describe the change"

git push

```

  

Git tracks the vault structure, Markdown files, templates, Bases and relevant Obsidian configuration.

  

Frequently changing workspace/session state should not be committed unless deliberately required.

  

---

  

# 13. Architecture Principles

  

- Keep `Personal-Vault` as the Obsidian vault root.

- Keep the journal inside the vault rather than making it a separate vault.

- Keep system resources under `99 System`.

- Keep VS Code templates separate from Obsidian templates.

- Keep development/source-code repositories outside the vault unless integration is justified.

- Keep project information in project files.

- Keep tasks with the work they belong to.

- Surface work into the daily journal instead of duplicating project information.

- Use Bases for views rather than duplicating data.

- Use properties for structured metadata.

- Use tags for broad classification.

- Prefer established Obsidian functionality and plugins before adding custom code.

- Do not add automation merely because it is possible; add it when it removes a real recurring manual task.

- Stabilise the data model before building advanced dashboards and automation.

  

---

  

# 14. Current Development Phase

  

**Current phase: Projects & Tasks Implementation**

  

The Personal-Vault migration has been completed.

  

The current development objective is to establish a reliable system connecting:

  

```text

Ideas

  ↓

Projects

  ↓

Milestones

  ↓

Deliverables

  ↓

Tasks

  ↓

Daily Journal

  ↓

Completion / History

```

  

The core architecture should be stabilised before implementing the Nice to Have features.

  

---

  

*Maintained via: Boss Protocol*