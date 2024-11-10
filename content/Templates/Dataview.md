---
created: 2024-04-07T23:09
updated: 2024-04-07T23:09
modified: 2024-04-07T23:09
---
```dataview
list
from [[]] and #class
```


```dataview
table Status, Deadline
from [[]] and #project
where contains(Status, "status square - red, yellow, green")
```


```dataview
table Status, Deadline, Area
from #project AND !"Templates"
sort Deadling asc
```