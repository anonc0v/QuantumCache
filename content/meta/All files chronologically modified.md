---
tags:
  - explorer-exclude
  - graph-exclude
  - backlinks-exclude
  - recents-exclude
title: All files chronologically modified
date created: 2024-07-20T22:16
date modified: 2024-08-27T01:40
---
---

Table below made with the help of [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) and [Obsidian Dataview Serializer](https://github.com/dsebastien/obsidian-dataview-serializer). The query:

```
TABLE 
file.folder as "Folder", dateformat(date-modified,"MMM d, yyyy") as "Modified" 
FROM -"tags"
SORT date-modified DESC 
WHERE file.name != this.file.name AND draft != "true"
```



Fun fact - if I set it up correctly, this page won't show up in Explorer, Graph, RecentNotes, TagList, or Backlinks! Also the folders view and the tags view. The changes are explained [[Hiding tags from various components|here]]. But it *will* show up in search, and also linked to "view more" on the RecentNotes component. If on mobile, the table looks cramped - sorry! To force an update, Command Palette --> Dataview serializer scan and serialize all dataview queries; also I added a Commander button.

Some hidden tags: anything with "exclude" basically

 #graph-exclude #backlinks-exclude #recents-exclude #explorer-exclude

[[index|🏡 Return to Homepage]]

### The table

<!-- QueryToSerialize: TABLE file.folder as "Folder", dateformat(date-modified,"MMM d, yyyy") as "Modified" SORT date-modified DESC WHERE file.name != this.file.name  AND draft != "true" -->
<!-- SerializedQuery: TABLE file.folder as "Folder", dateformat(date-modified,"MMM d, yyyy") as "Modified" SORT date-modified DESC WHERE file.name != this.file.name  AND draft != "true" -->

| File                                                                                                | Folder                      | Modified    |
| --------------------------------------------------------------------------------------------------- | --------------------------- | ----------- |
| [[Adhesion]]                                                    | CIRO/Prosthodontics II      | Nov 2, 2024 |
| [[Bonding Protocol]]                                                 | Dentistry                   | \-          |
| [[Chlorhexidine]]                                      | Dentistry/Dental Materials  | \-          |
| [[Dental Materials]]                                | Dentistry/Dental Materials  | \-          |
| [[Fluoride]]                                                | Dentistry/Dental Materials  | \-          |
| [[Glass Ionomer Cement (GIC)]]            | Dentistry/Dental Materials  | \-          |
| [[LOCAL ANESTHETICS]]                                               | Dentistry                   | \-          |
| [[Pharmacology]]                                            | Dentistry/Pharmacology      | \-          |
| [[Metabolic Syndrome]]                           | Dentistry/Systemic Diseases | \-          |
| [[Obsidian]]                                                                  | Obsidian                    | \-          |
| [[Quartz Setup]]                                                          | Obsidian                    | \-          |
| [[ESPANOL]]                                                                     | Spanish                     | \-          |
| [[Guia]]                                                                           | Spanish                     | \-          |
| [[Verbos Especiales]]                                                 | Spanish                     | \-          |
| [[Vocabulario]]                                                             | Spanish                     | \-          |
| [[Areas]]                                                                       | Templates                   | \-          |
| [[Dataview]]                                                                 | Templates                   | \-          |
| [[LeanProductivity Simple Meeting Template]] | Templates                   | \-          |
| [[Notes]]                                                                       | Templates                   | \-          |
| [[@tarnowEffectDistanceContact1992]]     | assets/Zotero/citekey       | \-          |
| [[Cuestonario de Salúd]]                                            | iSMILE                      | \-          |
| [[Fases de tratamiento]]                                            | iSMILE                      | \-          |
| [[REGISTROS FOR PEDO]]                                                | iSMILE                      | \-          |
| [[Vocab]]                                                                          | iSMILE                      | \-          |
<!-- SerializedQuery END -->
<!-- SerializedQuery: TABLE file.folder as "Folder", dateformat(date-modified,"MMM d, yyyy") as "Modified" FROM -"tags" SORT date-modified DESC WHERE file.name != this.file.name  AND draft != "true" -->d

| File                                                                                                | Folder                      | Modified    |
| --------------------------------------------------------------------------------------------------- | --------------------------- | ----------- |
| [[Adhesion]]                                                    | CIRO/Prosthodontics II      | Nov 2, 2024 |
| [[Vocab]]                                                                          | iSMILE                      | \-          |
| [[REGISTROS FOR PEDO]]                                                | iSMILE                      | \-          |
| [[Fases de tratamiento]]                                            | iSMILE                      | \-          |
| [[Cuestonario de Salúd]]                                            | iSMILE                      | \-          |
| [[@tarnowEffectDistanceContact1992]]     | assets/Zotero/citekey       | \-          |
| [[Notes]]                                                                       | Templates                   | \-          |
| [[LeanProductivity Simple Meeting Template]] | Templates                   | \-          |
| [[Dataview]]                                                                 | Templates                   | \-          |
| [[Areas]]                                                                       | Templates                   | \-          |
| [[Vocabulario]]                                                             | Spanish                     | \-          |
| [[Verbos Especiales]]                                                 | Spanish                     | \-          |
| [[Guia]]                                                                           | Spanish                     | \-          |
| [[ESPANOL]]                                                                     | Spanish                     | \-          |
| [[Quartz Setup]]                                                          | Obsidian                    | \-          |
| [[Obsidian]]                                                                  | Obsidian                    | \-          |
| [[Metabolic Syndrome]]                           | Dentistry/Systemic Diseases | \-          |
| [[Pharmacology]]                                            | Dentistry/Pharmacology      | \-          |
| [[LOCAL ANESTHETICS]]                                               | Dentistry                   | \-          |
| [[Glass Ionomer Cement (GIC)]]            | Dentistry/Dental Materials  | \-          |
| [[Fluoride]]                                                | Dentistry/Dental Materials  | \-          |
| [[Dental Materials]]                                | Dentistry/Dental Materials  | \-          |
| [[Chlorhexidine]]                                      | Dentistry/Dental Materials  | \-          |
| [[Bonding Protocol]]                                                 | Dentistry                   | \-          |
<!-- SerializedQuery END -->
<!-- SerializedQuery: TABLE file.folder as "Folder", dateformat(date-modified,"MMM d, yyyy") as "Modified" FROM -"tags" SORT date-modified DESC WHERE file.name != this.file.name  AND draft != "true" -->