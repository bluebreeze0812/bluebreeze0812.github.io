---
layout:     post
title:      How to make the vscode title bar show full file path
date:       2019-07-03 22:46:09 +0800
author:     Leo
categories: Learn
tags:       Misc
---

> “I know that the path is displayed when I hover on the filename on the tab just above the code, but this means mucking about with the mouse when I am keyboarding, and is therefore a real nuisance.” —  [https://github.com/Microsoft/vscode/issues/12625](https://github.com/Microsoft/vscode/issues/12625)

# Code:

`_“window.title”_: “${activeEditorLong}${separator}${rootName}”`

## How To:

1.  Open Settings: hit:  `Command`+  `,`
2.  Search for “title”
3.  In the input replace  `activeEditorShort`  with  `activeEditorLong`
4.  Save.

## Result:

<img src="https://miro.medium.com/max/1563/1*d_aEH_PBxsVIB_JOCxG0Pg.png" style="width: 1100px;">
