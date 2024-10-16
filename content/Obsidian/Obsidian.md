## Useful Community Plugins:
- Dataview
- Templater
- Calendar - click on date to generate new note
- Folder Notes
- Minimal theme settings - for Minimal theme
- Hider - for Minimal theme
## Core Plugins
- Daily Notes - set new file location as "daily" folder in settings
## Shortcuts #shortcuts

^773f79

- open note to the right, so that note appears splitscreen = option + cmd + click link 
- make checklist = cmd + L; custom: cmd + ENTER
- Switch between bulet and checklist = cmd + ]
- switch between reading view and source mode = cmd + E 
## Appearance
Minimal theme + Minimal theme settings + Hider

## Linking
Linking to a Note:
- ``[[name of note]]``
Linking to a header in a note
- `[[nameofnote#nameofheader]] - use #, ##, etc. corresponding to header, subheader, etc. 
Linking to a specific part of your note
- `[[nameofnote^text present in part of note]]
- [[2023-12-18#^832cce]]  
Links to a note or folder but the text is customized
- `[nameofnote or folder|nameofcustomtext]`
-`[[Repertoire|names of pianists]]`
- [[Repertoire|names of pianists]]
Link to external URL
- `[customtext](URL)`
- [Lionne gmail](https:www.gmail.com)
Embedding a note
- add a ! in front of any of the above brackets to embed that note or specific section of your note
Callouts
```
> [!NOTE] Hide Contents of Callout
> Contents are located here.  Just add a - after the brackets above: [!NOTE]-
> Hide function demonstrated below
 
```
> [!NOTE]- Callout via Command Pallate
> - alternative to using code: cmd + P to invoke the command pallate and search for Callout to "insert Callout"
> - !WARNING, !NOTE, !QUESTION will change the icon of the callout

Footnotes: [^sample]
```
[^nameoftext]
then copy paste to bottom of page like this:
[^nameoftext:apa format or whatever] 
this will appear at the bottom and ur footnotes will be labeled with a number as a superscript
```

## Formatting text
`**bold**`
- **bold**
`*italic*`
- *italicized*
`~~strikethrough~~
- ~~strikethrough~~
`2x=highlight=2x` 
- ==highlight==
`>write quote` 
> quote about anything 
>  things stand out
`---separate a whole section`
---

1 backtick - insert a line of code without "live-previewing"

3 Backticks  - display a block of code without "live-previewing"
	``` type in several lines of code without it "live-previewing"
	```

[^sample]: whatever I want



Searching:
- X Y; will search for notes with both X and Y 
- X OR Y; notes with one or the other
- "X Y"; exactly as is
- X -Y; will search for notes with X but not Y
- X Y path:name of folder; search X Y in certain folder; add a -before path to exclude certain folders
- X Y #tag; search for X or and Y with a certain tag
- embed search in note: 
  ```type "query" by itself no quotes
  type in search
```