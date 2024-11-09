---
tags: 
title: Untitled
date created: Sa, November 9th 2024, 1:40:12 pm
date modified: Sa, November 9th 2024, 1:43:20 pm
---

```dataview
TABLE Links, 
  Links.Status as "Status",  
  map(Links, (l) => dateformat(l.file.mtime, "dd.MM.yyyy - HH:mm")) AS "Last modified" 
FROM [[Home]]
FLATTEN list(filter(file.inlinks, (o) => !contains(o.file.folder, "Calendar/Journal"))) as Links
SORT file.name ASC
```

