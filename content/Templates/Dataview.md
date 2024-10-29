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