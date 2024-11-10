---
tags: 
title: Untitled
date created: November 9th 2024, 1:43:20 pm
date modified: November 9th 2024, 6:51:21 pm
created: 2024-11-09T13:43
updated: 2024-11-09T18:51
modified: 2024-11-09T18:51
---

```dataview
TABLE Links, 
  Links.Status as "Status",  
  map(Links, (l) => dateformat(l.file.mtime, "dd.MM.yyyy - HH:mm")) AS "Last modified" 
FROM [[Home]]
FLATTEN list(filter(file.inlinks, (o) => !contains(o.file.folder, "Calendar/Journal"))) as Links
SORT file.name ASC
```

