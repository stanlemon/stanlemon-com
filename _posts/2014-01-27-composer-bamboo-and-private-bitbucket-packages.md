---
layout: post
title: Composer, Bamboo and private Bitbucket packages
date: 2014-01-27T21:28-05:00
categories:
  - Developer
permalink: /2014/01/27/composer-bamboo-and-private-bitbucket-packages/
---
I use Atlassian's [Bamboo](http://www.atlassian.com/software/bamboo) for continuous integration on a lot of projects. I'm a huge fan, it's a solid product with a lot of flexibility and the OnDemand service coupled with EC2 instances and custom EBS volume make for a really robust cloud based solution to continuous integration. Almost every project I put into Bamboo involves a call to load [composer](https://getcomposer.org) and install dependencies. Many of the projects I dabble with belong to other people and so they're locked down with some form of authentication and not normally in [Packagist](http://packagist.org). In the past this has created some challenges with installing my composer dependencies, but this past weekend I think I finally found a tolerable solution to my dilemma.

In addition to being a big fan of Atlassian's Bamboo I also really like Atlassian [Bitbucket](http://bitbucket.org). I became a heavy Bitbucket user back before Atlassian bought the product because I was a heavy Mercurial user and it was the only hosted solution available. When they were bought and added _git_ I kept using them because they offer **free** private repositories, whereas competitor GitHub does not. I've had problems when I develop a private package and then want to use it in an application. My workaround up until this weekend was to create a "deployment" user and give them access to my private repository, finally including it's username/password on my vas url in the repository block of my composer.json. This is all sorts of ugly and I have never been satisfied with it. In addition to not being safe or secure it also chews up one of the sacred five users you can team up with on a private repository.

So this weekend I set out to find a different approach to private Bitbucket packages in composer. One that wasn't so ugly and didn't make me feel so insecure about my setup.

BitBucket (and GitHub for that matter) have this concept of a deployment key. It's a private/public ssh key combination that grants read-only access to your repository without chewing up a user account to do so.  It's specifically geared toward the problem I was trying to solve. In my case Bamboo executes it's tasks as the 'bamboo' user.  The trick is getting the private portion of your deployment key into a place that Bamboo can use it.  Bamboo OnDemand creates EC2 instances when it needs to run a build and then terminates it after its done.  This is great because it keeps costs low and it means you don't have to worry about a machine getting gunked up with stuff between builds. It also means there's no shared state between runs, so sticking a private key on your EC2 instance only helps you for a little while.  But wait a minute... what if I set that up with a task in my job when it runs?

I wound up creating an initial task to setup my private deployment key like this:

\[gist\]https://gist.github.com/stanlemon/8661196\[/gist\]

Fortunately Bamboo lets you lock down your user's ability to see these sort of things and the logs don't show anything indicating what's going on, which makes it relatively secure - at least seemingly more so than sticking a plain text password in my composer.json file.

Now if you're familiar with Bamboo at all you know that the initial repository setup does not allow you to clone using ssh. This is limited only to the Java implementation of git that Bamboo uses to poll the repository. The default EC2 images ship with a full first class git, and so that means if you declare your package in the repositories block like "_git@bitbucket.org:team/project.git_" it'll use the aforementioned key and load just fine.

Life is a lot easier with an on-premise install of Bamboo where your disk persists between builds and you can set that key up permanently, but for those of us living in the cloud this will do the trick. You can use this approach on-premise too though and you can even use it with Jenkins if that's your preferred continuous integration implementation.
