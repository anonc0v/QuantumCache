---
tags: []
aliases:
  - CSS Snippets
date created: 2024-11-11 11:53
date modified: 2024-11-11 20:19
---

# CSS Snippets

## Bold Color

```
.theme-dark {
	--bold-weight: 700;
    --bold-color: #08FF08;
    --italic-weight: 600;
    --italic-color: #08FF08;

/*
.theme-light {
    --bold-color: var(--color-orange);
}

.theme-dark {
    --bold-color: var(--color-orange);
}
/*
```

## Header Border
```
.markdown-preview-view h1,
.HyperMD-header-1{

 border-top-style: solid !important;
    border-width: 1.5px !important;
    border-color: rgba(149, 135, 107, 1) !important; 

}


/* ***GRADIENT LINES EFFECT delete this entirely***
    position: relative;
    padding-top: 10px; /* Optional: adjust padding to create space 
}

.markdown-preview-view h1::before,
.HyperMD-header-1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5px; /* Thickness of the line */
    width: 100%;
    background: linear-gradient(to right, rgba(75,255,221,1), rgba(255,100,155,1), rgba(255,200,202,0.8));
}
*/

 
/*
    content: "";
    position: absolute;
    top: -5px; 
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: radial-gradient(circle, rgba(75,255,221,1) 0%, rgba(255,100,155,1) 53%, rgba(255,200,202,0.8) 100%);
    z-index: -1; /* Place the gradient behind the content */
    border-radius: 8px; /* Optional, for rounded corners */

*/
```

## Header Colors:

```
/******* HEADING COLORS *******/
.markdown-preview-view h1,
.cm-header-1
{
  color: rgba(191,97,106,255);
}

.markdown-preview-view h2,
.cm-header-2
{
  color: rgba(163,190,140,255);
}

.markdown-preview-view h3,
.cm-header-3
{
  color: rgba(143,188,186,255);
}

.markdown-preview-view h4,
.cm-header-4
{
  color: rgba(128,161,193,255);
}

.markdown-preview-view h5,
.cm-header-5
{
  color: rgba(235,203,139,255);
}

.markdown-preview-view h6,
.cm-header-6
{
  color: rgb(125,88,87);
}
```