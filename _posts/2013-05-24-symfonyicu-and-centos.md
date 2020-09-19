---
layout: post
title: Symfony\ICU and CentOS
date: 2013-05-24T05:00-04:00
categories:
  - Developer
permalink: /2013/05/24/symfonyicu-and-centos/
---
I use CentOS for most of my development environments and I also use it in a number of production scenarios as well.  Where I don't use it I am most likely running something else RHEL based, like Amazon Linux over on AWS.  All of these distributions use an older version of the ICU library, 4.2 to be specific. Symfony has a component called ICU, which has a check for 4.4 or greater.  In my situation I don't need ICU, I just need composer to install it so I can move on with development. Running composer.phar install on the [symfony-standard](https://github.com/symfony/symfony-standard) caused me problems with lib-ICU compatibility.  _So what to do?_

Well, [this Pull Request](https://github.com/symfony/symfony/pull/7386) provided me with a lot of helpful information in figuring out what to do.  The solution I went with was to change my composer.json and added this to it:

>  "symfony/icu": "1.0.\*@dev",

This will use an older version of the ICU library that doesn't necessitate an updated lib-ICU.  It's less then ideal, but it'll get composer.phar to install the standard edition packages so you can get to work.
