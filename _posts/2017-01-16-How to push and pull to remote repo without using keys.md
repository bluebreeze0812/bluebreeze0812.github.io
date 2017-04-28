---
layout:     post
title:      How to push and pull to remote repo without using password
date:       2017-01-16 18:50:00 +0800
author:     Stack Overflow
categories: Learn
tags:       Git Linux shell
---
If you have configured SSH key to your Github account and are still getting the password prompt, make sure your repo URL is in the form

	git@github.com:username/reponame.git
	
as opposed to

	https://github.com/username/reponame.git
	
To see your repo URL, run:

	git remote show origin
	
You can change the URL with:

	git remote set-url origin git@github.com:username/reponame.git

