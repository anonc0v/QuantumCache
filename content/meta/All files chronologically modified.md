---
tags:
  - explorer-exclude
  - graph-exclude
  - backlinks-exclude
  - recents-exclude
title: All files chronologically modified
date created: 2024-07-20T22:16
date modified: 2024-11-10T10:55
created: 2024-11-09T18:51
updated: 2024-11-09T19:56
modified: 2024-11-09T19:56
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

<!-- QueryToSerialize: TABLE file.folder as "Folder", dateformat(date-modified,"MMMM D") as "Modified" SORT date-modified DESC WHERE file.name != this.file.name  AND draft != "true" -->
<!-- SerializedQuery: TABLE file.folder as "Folder", dateformat(date-modified,"MMMM D") as "Modified" SORT date-modified DESC WHERE file.name != this.file.name  AND draft != "true" -->

| File                                                                                                                                           | Folder                                | Modified            |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------- |
| [[Fases de tratamiento]]                                                                                       | iSMILE                                | November 11/10/2024 |
| [[REGISTROS FOR PEDO]]                                                                                           | iSMILE                                | November 11/10/2024 |
| [[Vocab]]                                                                                                                     | iSMILE                                | November 11/10/2024 |
| [[Fase I compre]]                                                                                                     | iSMILE                                | November 11/9/2024  |
| [[Cuestionario de Salúd]]                                                                                     | iSMILE                                | November 11/9/2024  |
| [[Bonding Protocol]]                                                                                            | Dentistry                             | November 11/9/2024  |
| [[Untitled.md\|Untitled]]                                                                                                                      |                                       | November 11/9/2024  |
| [[Untitled 1]]                                                                                                                  |                                       | November 11/9/2024  |
| [[Ortho Exam]]                                                                                                             | CIRO                                  | November 11/9/2024  |
| [[Cementation protocol]]                                                                       | CIRO/Prosthodontics II                | November 11/9/2024  |
| [[index]]                                                                                                                            |                                       | November 11/9/2024  |
| [[Adhesion]]                                                                                               | CIRO/Prosthodontics II                | November 11/9/2024  |
| [[Prostho Exam Review]]                                                                         | CIRO/Prosthodontics II                | November 11/9/2024  |
| [[Exam notes]]                                                                                              | CIRO/Prosthodontics                   | November 11/9/2024  |
| [[Frases]]                                                                                                                  | Spanish                               | November 11/9/2024  |
| [[Verbos]]                                                                                                                  | Spanish                               | November 11/9/2024  |
| [[Spanish]]                                                                                                                | Spanish                               | November 11/9/2024  |
| [[Areas]]                                                                                                                  | Templates                             | November 11/9/2024  |
| [[implants]]                                                                                                                 | CIRO                                  | November 11/8/2024  |
| [[CIRO/Untitled.md\|Untitled]]                                                                                                                 | CIRO                                  | November 11/8/2024  |
| [[LOCAL ANESTHETICS]]                                                                                          | Dentistry                             | November 11/8/2024  |
| [[Obsidian]]                                                                                                             | Obsidian                              | November 11/8/2024  |
| [[Quartz Setup]]                                                                                                     | Obsidian                              | November 11/8/2024  |
| [[Verbos Especiales]]                                                                                            | Spanish                               | November 11/8/2024  |
| [[Vocabulario]]                                                                                                        | Spanish                               | November 11/8/2024  |
| [[ESPANOL]]                                                                                                                | Spanish                               | November 11/8/2024  |
| [[Guia]]                                                                                                                      | Spanish                               | November 11/8/2024  |
| [[Notes]]                                                                                                                  | Templates                             | November 11/6/2024  |
| [[CIRO/Case Presentation/Asthma.md\|Asthma]]                                                                                                   | CIRO/Case Presentation                | November 11/4/2024  |
| [[CIRO/Case Presentation/Diabetes.md\|Diabetes]]                                                                                               | CIRO/Case Presentation                | November 11/4/2024  |
| [[Autoimmune Diseases]]                                                          | CIRO/Case Presentation/Dr Diana Dubey | November 11/4/2024  |
| [[Diana Exam]]                                                                            | CIRO/Case Presentation/Dr Diana Dubey | November 11/4/2024  |
| [[Cancer]]                                                                                         | CIRO/Case Presentation/Dr Emilio      | November 11/4/2024  |
| [[Coronary heart disease]]                                                         | CIRO/Case Presentation/Dr Emilio      | November 11/4/2024  |
| [[Osteoporosis]]                                                                             | CIRO/Case Presentation/Dr Emilio      | November 11/4/2024  |
| [[CIRO/Case Presentation/Dr Juan Pablo/Asthma.md\|Asthma]]                                                                                     | CIRO/Case Presentation/Dr Juan Pablo  | November 11/4/2024  |
| [[CIRO/Case Presentation/Dr Juan Pablo/Diabetes.md\|Diabetes]]                                                                                 | CIRO/Case Presentation/Dr Juan Pablo  | November 11/4/2024  |
| [[CIRO/Case Presentation/Dr Juan Pablo/Hemophilia.md\|Hemophilia]]                                                                             | CIRO/Case Presentation/Dr Juan Pablo  | November 11/4/2024  |
| [[CIRO/Case Presentation/Dr Juan Pablo/Hypertension.md\|Hypertension]]                                                                         | CIRO/Case Presentation/Dr Juan Pablo  | November 11/4/2024  |
| [[CIRO/Case Presentation/Dr Juan Pablo/Pregnancy.md\|Pregnancy]]                                                                               | CIRO/Case Presentation/Dr Juan Pablo  | November 11/4/2024  |
| [[CIRO/Case Presentation/Hemophilia.md\|Hemophilia]]                                                                                           | CIRO/Case Presentation                | November 11/4/2024  |
| [[CIRO/Case Presentation/Hypertension.md\|Hypertension]]                                                                                       | CIRO/Case Presentation                | November 11/4/2024  |
| [[CIRO/Case Presentation/Pregnancy.md\|Pregnancy]]                                                                                             | CIRO/Case Presentation                | November 11/4/2024  |
| [[Dr. Emilio]]                                                                                        | CIRO/Case Presentation II             | November 11/4/2024  |
| [[Dr. Juan Pablo]]                                                                                | CIRO/Case Presentation II             | November 11/4/2024  |
| [[Syphilis, Pregnancy]]                                                                      | CIRO/Case Presentation II             | November 11/4/2024  |
| [[ADEX Endodontics]]                                                                                    | CIRO/Endo II ADEX                     | November 11/4/2024  |
| [[Dr Ruben]]                                                                                                    | CIRO/Endo II ADEX                     | November 11/4/2024  |
| [[Classification]]                                                                                           | CIRO/Operative                        | November 11/4/2024  |
| [[Oxygen Inhibited Layer]]                                                                    | CIRO/Operative/exam 3                 | November 11/4/2024  |
| [[Alveoloplasty]]                                                                                          | CIRO/Oral Surgery                     | November 11/4/2024  |
| [[OS EXAM]]                                                                                                      | CIRO/Oral Surgery                     | November 11/4/2024  |
| [[OS Ex1]]                                                                                                        | CIRO/Oral Surgery                     | November 11/4/2024  |
| [[OS Exam 2 Review]]                                                                                    | CIRO/Oral Surgery                     | November 11/4/2024  |
| [[OS]]                                                                                                                | CIRO/Oral Surgery                     | November 11/4/2024  |
| [[Odontogenic Infections]]                                                                        | CIRO/Oral Surgery                     | November 11/4/2024  |
| [[Anesthetic Technique & Odontogenic Infections]]                   | CIRO/Oral Surgery/exam 2              | November 11/4/2024  |
| [[Antiresorptive Drugs-Related Osteonecrosis of the Jaws]] | CIRO/Oral Surgery/exam 2              | November 11/4/2024  |
| [[Fascial Space Infections]]                                                             | CIRO/Oral Surgery/exam 2              | November 11/4/2024  |
| [[Odontogenic Infections 1]]                                                             | CIRO/Oral Surgery/exam 2              | November 11/4/2024  |
| [[Odontogenic infections 3]]                                                             | CIRO/Oral Surgery/exam 2              | November 11/4/2024  |
| [[Odontogenic infections part 2]]                                                   | CIRO/Oral Surgery/exam 2              | November 11/4/2024  |
| [[Collagen Fiber]]                                                                                               | CIRO/PERIO                            | November 11/4/2024  |
| [[Critical Probing Depth]]                                                                               | CIRO/PERIO                            | November 11/4/2024  |
| [[Coronal Advanced Flap]]                                                                          | CIRO/PERIO/Exam 2                     | November 11/4/2024  |
| [[Gingival Grafts]]                                                                                      | CIRO/PERIO/Exam 2                     | November 11/4/2024  |
| [[Local Oral Chemotherapeutic Agents]]                                                | CIRO/PERIO/Exam 2                     | November 11/4/2024  |
| [[Patterns of Bone Resorption]]                                                              | CIRO/PERIO/Exam 2                     | November 11/4/2024  |
| [[CIRO/PERIO/Exam 2/Untitled.md\|Untitled]]                                                                                                    | CIRO/PERIO/Exam 2                     | November 11/4/2024  |
| [[Periodontal Biology]]                                                                                     | CIRO/PERIO                            | November 11/4/2024  |
| [[Pedo Exam 2 Topics]]                                                                                     | CIRO/Pedo II                          | November 11/4/2024  |
| [[Pedodontics II]]                                                                                             | CIRO/Pedo II                          | November 11/4/2024  |
| [[Removable Prosthodontics]]                                                                  | CIRO/Prosthodontics                   | November 11/4/2024  |
| [[Rests]]                                                                                                        | CIRO/Prosthodontics                   | November 11/4/2024  |
| [[Metabolic Syndrome]]                                                                      | Dentistry/Systemic Diseases           | October 10/12/2024  |
| [[LeanProductivity Simple Meeting Template]]                                            | Templates                             | October 10/12/2024  |
| [[Chlorhexidine]]                                                                                 | Dentistry/Dental Materials            | June 6/26/2024      |
| [[Dental Materials]]                                                                           | Dentistry/Dental Materials            | June 6/26/2024      |
| [[Fluoride]]                                                                                           | Dentistry/Dental Materials            | June 6/26/2024      |
| [[Glass Ionomer Cement (GIC)]]                                                       | Dentistry/Dental Materials            | June 6/26/2024      |
| [[Pharmacology]]                                                                                       | Dentistry/Pharmacology                | June 6/26/2024      |
| [[@tarnowEffectDistanceContact1992]]                                                | assets/Zotero/citekey                 | May 5/13/2024       |
| [[Dataview]]                                                                                                            | Templates                             | April 4/7/2024      |
<!-- SerializedQuery END -->
<!-- SerializedQuery: TABLE file.folder as "Folder", dateformat(date-modified,"MMM d, yyyy") as "Modified" FROM -"tags" SORT date-modified DESC WHERE file.name != this.file.name  AND draft != "true" -->