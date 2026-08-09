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
- FocusOnToday
- ReligiousFocus

## Daily Review

- I'm proud that...

- I'm grateful that...

- Top moments of today...

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

## YouTube Videos Watched Today
- 