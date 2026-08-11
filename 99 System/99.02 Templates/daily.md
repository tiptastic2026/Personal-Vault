---
created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
date: <% moment(tp.file.title.substring(0, 10), "YYYY-MM-DD").format("YYYY-MM-DD") %>
updated: []
tags:
  - journal
mood: 0
energy: 0
sleep: 0
exercise:
reading:
project:
weather:
location:
medicine:
faith:
---
  
<%*
const rawTitle = tp.file.title;
const dateStr = rawTitle.substring(0, 10);

const yesterdayDate = moment(dateStr, "YYYY-MM-DD").subtract(1, "days");
const tomorrowDate = moment(dateStr, "YYYY-MM-DD").add(1, "days");

tR += `<< [[05_Journal/05.1_Daily/${yesterdayDate.format("YYYY-MM-DD")}|Yesterday ${yesterdayDate.format("ddd")}]] | [[05_Journal/05.1_Daily/${tomorrowDate.format("YYYY-MM-DD")}|Tomorrow ${tomorrowDate.format("ddd")}]] >>\n\n`; -%>

# <% moment(dateStr, "YYYY-MM-DD").format("YYYY-MM-DD ddd") %>

## Today's Focus
**Focus On Today**
- TEXT

**Religious Focus**
- TEXT

## Daily Review

**What was hard today:** 
- TEXT

**What was good today:** 
- TEXT

**I'm proud that:** 
- TEXT

**I'm grateful that:** 
- TEXT

**Top moments of today:**
- TEXT

## End of day checklist
-

## Preview for Tomorrow
-

## Wins and completed tasks
### Today's Tasks

```tasks
not done
scheduled on <% tp.file.title %>
sort by priority
sort by scheduled
```

### Tasks Completed Today

```tasks
done on <% tp.file.title %>
sort by priority
```

## Files Updated Today

```base
views:
  - type: table
    name: Files Updated
    filters:
      and:
        - updated.contains("<% tp.file.title %>")
    order:
      - file.name
      - file.mtime
    sort:
      - property: file.mtime
        direction: ASC


```

## Journal / Log
- WriteHere

## Activity Log

> **Activity Log — How to use**
> - **Text:** Briefly describe what was done, decided, created, fixed, or discovered.
> - **Time:** Optional. Use `[HH:MM]` when the time is useful; omit it otherwise.
> - **category:** Classifies the activity (e.g. `System`, `Setup`, `Design`, `Development`, `Research`).
> - **project:** Link the activity to an existing project. Omit for general/unassigned activity.
> - **status:** Records the current state, normally `complete` for finished work.
> - **Idea:** Use a nested `> *Idea:*` line when the activity identifies a possible future project or idea rather than completed project work.
>
> **Format:** `- [HH:MM] Description. [category:: Category] [project:: [[Project Name]]] [status:: complete]`
>
> Keep entries concise. Add the newest activity at the bottom of the log.

EXAMPLE TEXT...
- Started building the Activity Log system. [category:: System] [status:: complete] 
  > *Idea:* Activity Log System
- Created the first project note. [project:: [Daily Journal System](<Daily Journal System>)] [category:: Setup] [status:: complete]

## YouTube Videos Watched Today
- 