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

%% note to self it's finicky with spaces so i was having some trouble but turns out it's bc i had an extra space at the end %%

<!-- QueryToSerialize: TABLE file.folder as "Folder", dateformat(date-modified,"MMM d, yyyy") as "Modified" FROM -"tags" SORT date-modified DESC WHERE file.name != this.file.name  AND draft != "true" -->
<!-- SerializedQuery: TABLE file.folder as "Folder", dateformat(date-modified,"MMM d, yyyy") as "Modified" FROM -"tags" SORT date-modified DESC WHERE file.name != this.file.name  AND draft != "true" -->

| File                                                                                                                                           | Folder                                | Modified |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------- |
| [[@tarnowEffectDistanceContact1992]]                                                | assets/Zotero/citekey                 | \-       |
| [[Metabolic Syndrome]]                                                                      | Dentistry/Systemic Diseases           | \-       |
| [[Pharmacology]]                                                                                       | Dentistry/Pharmacology                | \-       |
| [[Glass Ionomer Cement (GIC)]]                                                       | Dentistry/Dental Materials            | \-       |
| [[Fluoride]]                                                                                           | Dentistry/Dental Materials            | \-       |
| [[Dental Materials]]                                                                           | Dentistry/Dental Materials            | \-       |
| [[Chlorhexidine]]                                                                                 | Dentistry/Dental Materials            | \-       |
| [[Prostho Exam Review]]                                                                         | CIRO/Prosthodontics II                | \-       |
| [[Adhesion]]                                                                                               | CIRO/Prosthodontics II                | \-       |
| [[Rests]]                                                                                                        | CIRO/Prosthodontics                   | \-       |
| [[Removable Prosthodontics]]                                                                  | CIRO/Prosthodontics                   | \-       |
| [[Exam notes]]                                                                                              | CIRO/Prosthodontics                   | \-       |
| [[Pedodontics II]]                                                                                             | CIRO/Pedo II                          | \-       |
| [[Pedo Exam 2 Topics]]                                                                                     | CIRO/Pedo II                          | \-       |
| [[Periodontal Biology]]                                                                                     | CIRO/PERIO                            | \-       |
| [[CIRO/PERIO/Exam 2/Untitled.md\|Untitled]]                                                                                                    | CIRO/PERIO/Exam 2                     | \-       |
| [[Patterns of Bone Resorption]]                                                              | CIRO/PERIO/Exam 2                     | \-       |
| [[Local Oral Chemotherapeutic Agents]]                                                | CIRO/PERIO/Exam 2                     | \-       |
| [[Gingival Grafts]]                                                                                      | CIRO/PERIO/Exam 2                     | \-       |
| [[Coronal Advanced Flap]]                                                                          | CIRO/PERIO/Exam 2                     | \-       |
| [[Critical Probing Depth]]                                                                               | CIRO/PERIO                            | \-       |
| [[Collagen Fiber]]                                                                                               | CIRO/PERIO                            | \-       |
| [[Odontogenic infections part 2]]                                                   | CIRO/Oral Surgery/exam 2              | \-       |
| [[Odontogenic infections 3]]                                                             | CIRO/Oral Surgery/exam 2              | \-       |
| [[Fascial Space Infections]]                                                             | CIRO/Oral Surgery/exam 2              | \-       |
| [[Odontogenic Infections 1]]                                                             | CIRO/Oral Surgery/exam 2              | \-       |
| [[Antiresorptive Drugs-Related Osteonecrosis of the Jaws]] | CIRO/Oral Surgery/exam 2              | \-       |
| [[Anesthetic Technique & Odontogenic Infections]]                   | CIRO/Oral Surgery/exam 2              | \-       |
| [[Odontogenic Infections]]                                                                        | CIRO/Oral Surgery                     | \-       |
| [[OS]]                                                                                                                | CIRO/Oral Surgery                     | \-       |
| [[OS Exam 2 Review]]                                                                                    | CIRO/Oral Surgery                     | \-       |
| [[OS Ex1]]                                                                                                        | CIRO/Oral Surgery                     | \-       |
| [[OS EXAM]]                                                                                                      | CIRO/Oral Surgery                     | \-       |
| [[Alveoloplasty]]                                                                                          | CIRO/Oral Surgery                     | \-       |
| [[Oxygen Inhibited Layer]]                                                                    | CIRO/Operative/exam 3                 | \-       |
| [[Classification]]                                                                                           | CIRO/Operative                        | \-       |
| [[Dr Ruben]]                                                                                                    | CIRO/Endo II ADEX                     | \-       |
| [[ADEX Endodontics]]                                                                                    | CIRO/Endo II ADEX                     | \-       |
| [[Syphilis, Pregnancy]]                                                                      | CIRO/Case Presentation II             | \-       |
| [[Dr. Juan Pablo]]                                                                                | CIRO/Case Presentation II             | \-       |
| [[Dr. Emilio]]                                                                                        | CIRO/Case Presentation II             | \-       |
| [[CIRO/Case Presentation/Pregnancy.md\|Pregnancy]]                                                                                             | CIRO/Case Presentation                | \-       |
| [[CIRO/Case Presentation/Hypertension.md\|Hypertension]]                                                                                       | CIRO/Case Presentation                | \-       |
| [[CIRO/Case Presentation/Hemophilia.md\|Hemophilia]]                                                                                           | CIRO/Case Presentation                | \-       |
| [[CIRO/Case Presentation/Dr Juan Pablo/Pregnancy.md\|Pregnancy]]                                                                               | CIRO/Case Presentation/Dr Juan Pablo  | \-       |
| [[CIRO/Case Presentation/Dr Juan Pablo/Hypertension.md\|Hypertension]]                                                                         | CIRO/Case Presentation/Dr Juan Pablo  | \-       |
| [[CIRO/Case Presentation/Dr Juan Pablo/Hemophilia.md\|Hemophilia]]                                                                             | CIRO/Case Presentation/Dr Juan Pablo  | \-       |
| [[CIRO/Case Presentation/Dr Juan Pablo/Diabetes.md\|Diabetes]]                                                                                 | CIRO/Case Presentation/Dr Juan Pablo  | \-       |
| [[CIRO/Case Presentation/Dr Juan Pablo/Asthma.md\|Asthma]]                                                                                     | CIRO/Case Presentation/Dr Juan Pablo  | \-       |
| [[Osteoporosis]]                                                                             | CIRO/Case Presentation/Dr Emilio      | \-       |
| [[Coronary heart disease]]                                                         | CIRO/Case Presentation/Dr Emilio      | \-       |
| [[Cancer]]                                                                                         | CIRO/Case Presentation/Dr Emilio      | \-       |
| [[Diana Exam]]                                                                            | CIRO/Case Presentation/Dr Diana Dubey | \-       |
| [[Autoimmune Diseases]]                                                          | CIRO/Case Presentation/Dr Diana Dubey | \-       |
| [[CIRO/Case Presentation/Diabetes.md\|Diabetes]]                                                                                               | CIRO/Case Presentation                | \-       |
| [[CIRO/Case Presentation/Asthma.md\|Asthma]]                                                                                                   | CIRO/Case Presentation                | \-       |
<!-- SerializedQuery END -->
<!-- SerializedQuery: TABLE file.folder as "Folder", dateformat(date-modified,"MMM d, yyyy") as "Modified" FROM -"tags" SORT date-modified DESC WHERE file.name != this.file.name  AND draft != "true" -->

| File                                                                                                                                           | Folder                     | Modified     |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------ |
| [[Quartz customization log]]                                                                                      |                            | Sep 15, 2024 |
| [[Quartz Snippets]]                                                                                                        |                            | Sep 15, 2024 |
| [[Obsidian plugin list]]                                                                                         | meta                       | Sep 15, 2024 |
| [[hobbies/cool things online/index.md\|index]]                                                                                                 | hobbies/cool things online | Sep 15, 2024 |
| [[OSINT]]                                                                                                                    | hobbies                    | Sep 15, 2024 |
| [[brat-ify your python plots - Nicole Kerrison]]                   | hobbies/cool things online | Sep 15, 2024 |
| [[Code tester]]                                                                                                           | meta                       | Sep 13, 2024 |
| [[Quartz Cheatsheet]]                                                                                                    |                            | Sep 13, 2024 |
| [[Subtitles tracker]]                                                                                               | meta                       | Sep 12, 2024 |
| [[Command for the type of shell]]                                                                   | rgb tech                   | Sep 12, 2024 |
| [[Auto Hot Key]]                                                                                                     | rgb tech                   | Sep 12, 2024 |
| [[Infinite boredom]]                                                                                                      |                            | Sep 4, 2024  |
| [[Squad Busters by Supercell]]                                                                          | hobbies                    | Sep 4, 2024  |
| [[Reading list]]                                                                                                    | book club                  | Sep 4, 2024  |
| [[Tesla's AI slash inference chips]]                                             | semiconductors and chips   | Sep 4, 2024  |
| [[Cool other websites]]                                                                                                |                            | Sep 4, 2024  |
| [[To plan a fish tank]]                                                                                        | hobbies                    | Sep 4, 2024  |
| [[Misc trip planning tips]]                                                                                    | tbd                        | Aug 27, 2024 |
| [[Map]]                                                                                                                           | meta                       | Aug 27, 2024 |
| [[About robots.txt and crawlers]]                                                                            |                            | Aug 27, 2024 |
| [[Permalinks tracker]]                                                                                             | meta                       | Aug 27, 2024 |
| [[Dataview reference]]                                                                                              | tbd                        | Aug 27, 2024 |
| [[index.md\|index]]                                                                                                                            |                            | Aug 26, 2024 |
| [[Avoiding getting doxxed]]                                                                               | thoughts                   | Aug 26, 2024 |
| [[Mac setup notes]]                                                                                               | mac tech                   | Aug 21, 2024 |
| [[how I use gpt to help with programming]]                                                      | tbd                        | Aug 21, 2024 |
| [[blog ideas]]                                                                                                              | tbd                        | Aug 21, 2024 |
| [[Setting up a second computer to contribute to the quartz thing]] | rgb tech                   | Aug 6, 2024  |
| [[Kicad setup]]                                                                                                       | rgb tech                   | Aug 6, 2024  |
| [[SMBus, the Smart battery system, and more]]                           | semiconductors and chips   | Aug 5, 2024  |
| [[To import a previous pile]]                                                                           | rgb tech                   | Aug 2, 2024  |
| [[Uninstalling OneDrive]]                                                                                   | rgb tech                   | Aug 2, 2024  |
| [[Keepass setup]]                                                                                                   | rgb tech                   | Aug 2, 2024  |
| [[Cloning a repo at a specific commit]]                                                            | tbd                        | Aug 1, 2024  |
| [[Custom domains]]                                                                                                 | rgb tech                   | Aug 1, 2024  |
| [[create cname for subdomain]]                                                                         | mac tech                   | Aug 1, 2024  |
| [[mac tech/index.md\|index]]                                                                                                                   | mac tech                   | Aug 1, 2024  |
| [[tbd/index.md\|index]]                                                                                                                        | tbd                        | Aug 1, 2024  |
| [[Scrollbars and styling]]                                                                                      | tbd                        | Aug 1, 2024  |
| [[How to work on each site]]                                                                                 | meta                       | Jul 31, 2024 |
| [[Old sites]]                                                                                                                | tbd                        | Jul 31, 2024 |
| [[Setting up bratify aka Svelte apps]]                                                              | tbd                        | Jul 23, 2024 |
| [[Download raw source from Github idea]]                                                          | tbd                        | Jul 23, 2024 |
| [[How do virtual environments compare to conda environments]]           | rgb tech                   | Jul 23, 2024 |
| [[Hiding tags from various components]]                                                           | meta                       | Jul 23, 2024 |
| [[GitHub secrets]]                                                                                                      | tbd                        | Jul 21, 2024 |
| [[Installing yarn]]                                                                                               | rgb tech                   | Jul 11, 2024 |
| [[rgb tech/index.md\|index]]                                                                                                                   | rgb tech                   | Jul 9, 2024  |
| [[book club/index.md\|index]]                                                                                                                  | book club                  | Jul 9, 2024  |
| [[Setting up conda anaconda]]                                                                           | rgb tech                   | Jul 5, 2024  |
| [[Things to reinstall after a hard reset of the laptop]]                     | rgb tech                   | Jul 4, 2024  |
| [[Setting up Github]]                                                                                           | rgb tech                   | Jun 25, 2024 |
| [[Setting up WSL]]                                                                                                 | rgb tech                   | Jun 25, 2024 |
| [[House of Leaves 🍂]]                                                                                        | book club                  | Jun 25, 2024 |
| [[Obsidian Plugin Wishlist]]                                                                                  | tbd                        | Jun 25, 2024 |
| [[semiconductors and chips/index.md\|index]]                                                                                                   | semiconductors and chips   | Jun 25, 2024 |
| [[BIST - built-in self test]]                                                           | semiconductors and chips   | Jun 8, 2024  |
| [[adguard home]]                                                                                                     | mac tech                   | Jun 8, 2024  |
| [[change origin of your git repo]]                                                                 | mac tech                   | Jun 7, 2024  |
| [[colima]]                                                                                                                 | mac tech                   | Jun 7, 2024  |
<!-- SerializedQuery END -->