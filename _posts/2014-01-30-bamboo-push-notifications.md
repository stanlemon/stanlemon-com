---
layout: post
title: Bamboo Push Notifications
date: 2014-01-30T23:20-05:00
categories:
  - Developer
permalink: /2014/01/30/bamboo-push-notifications/
---
For awhile now I've wished that [Bamboo](http://atlassian.com/software/bamboo) had an app, or something that could deliver a push notification when a build starts or finishes. Sure there is email, but that means my build notifications will get lost in all of the other junk I am quietly ignoring in my inbox.  What I want is a targeted notification for my builds. So I got to thinking, why not leverage [Pushover](http://pushover.net)?

I decided to setup some inline script tasks on one of my bamboo plans using the following code (supply your credentials accordingly), in order to give Bamboo push notifications.

https://gist.github.com/stanlemon/8726494

Of course you can kick this up a notch by changing the message, using additional variables and throwing other notifications in at very stages of your build plans.
