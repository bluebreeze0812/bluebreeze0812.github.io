---
layout:     post
title:      How to Make Arc Theme Topbar Transparent
date:       2019-05-10 20:37:28 +0800
author:     Leo
categories: Tips
tags:       Tips Linux
---
To make the top bar fully transparent in Gnome's arguably most popular theme, Arc, It would only require a couple of changes in the gnome shell css:

`/usr/share/themes/Arc/gnome-shell/gnome-shell.css`
change this
```css
#panel {
  font-weight: bold;
  height: 2.1em;
  min-height: 27px;
  background-gradient-direction: none;
  background-color: transparent;
  border-bottom-width: 0;
  border-image: url("common-assets/panel/panel.svg") 1 1 1 1; }
```

to
```css
#panel {
  font-weight: bold;
  height: 2.1em;
  min-height: 27px;
  background-gradient-direction: none;
  background-color: transparent;
  border-bottom-width: 0;
  border-image: none; }
#panel.solid {
  border-image: url("common-assets/panel/panel.svg") 1 1 1 1; }
```

and this
```css
#panel:overview {
  border-image: url("common-assets/panel/panel-overview.svg") 1 1 1 1; }
```

to
```css
#panel:overview {
  border-image: none; }
```

Then restart the gnome shell, or simply press `F2` then type in `rt` to refresh the application.

------
Another approach:

Open Terminal and run the following command first to allow custom alpha values for Ubuntu dock


```
gsettings set org.gnome.shell.extensions.dash-to-dock customize-alphas true

```

Then run the following to set the minimum alpha value (i.e. when a window is  _not_  maximised or touching the top-bar or dock)


```
gsettings set org.gnome.shell.extensions.dash-to-dock min-alpha 0

```

Finally, if you want, run the following to set the maximum alpha value (i.e. when a window is maximised)


```
gsettings set org.gnome.shell.extensions.dash-to-dock max-alpha 0

```

Then log out and log in again.
