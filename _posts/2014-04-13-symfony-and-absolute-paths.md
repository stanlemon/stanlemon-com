---
layout: post
title: Symfony & Absolute Paths
date: 2014-04-13T13:19-04:00
categories:
  - Developer
permalink: /2014/04/13/symfony-and-absolute-paths/
---
My love affair with [Symfony](http://symfony.com) 2 has hit a rocky spot. I have an atomic deployment system for a Symfony 2 app that I've been working on.  Basically it works like this... The app gets built on my CI server, [Bamboo](https://www.atlassian.com/software/bamboo). That build results in an artifact, a tarball of the entire application.  This tarball is intended to represent the final product, meaning tests have all been run - they passed - and any compilation steps have been executed.  But I've got a problem.  It comes when I try to warm the cache or more generally if I run any Symfony console command on the build system before the artifact is made. This includes things like installing [Assetic](http://symfony.com/doc/current/cookbook/assetic/index.html) dependencies.  To work around my problem I've been making sure my 'cache' folder is empty before I build the tarball.  I wind up crossing my fingers on the deploy step and trusting that things will work themselves out when the cache is warmed and the container is compiled on the application server.  This is a horrible solute.  It's one I'm forced to deal with because of the way Symfony 2 dumps it's dependency injection container.  The container dump compiles references to _%kernel.root\_dir%_ which is an absolute path to the application root. That path is different on my CI server than it is on my production application server. If I compile the container on the CI server I wind up with a dump file that has the wrong absolute paths, resulting in a non-function app.

Some may want to question not doing the build on the application server if this is a problem. That may work for some people, but I think it's wrong to assume it's going to be possible in every deployment scenario.  There are simply a lot of regulated industries where building on the application server simply is not going to pass an audit. In my experience both in the PCI and Hippa worlds this simply wouldn't have worked.  You may disagree, but the reality is when you get into sorts of regulated environments you are playing by someone else's rules, even if they're silly rules. Furthermore, this solution does not scale.  It works for small clusters, but there's a point at which it simply is too long to roll that sort of deployment process out across a datacenter.  I've spent a fair amount of time solving software problems in these sort of regulated environments, so now I am admittedly wired to consider such things even when they're not being mandated by a regulatory body.  My build system involves Bamboo and [Ansible](http://www.ansible.com/).  Out of this system a singular artifact of the application is produced for deployment. It's a clean system and I can pull the artifact down from the CI server at any point and work with the exact distribution that will hit my application server at any time. Well, identical so long as the cache is not built. Here lies my beef with the way Symfony works.

As I mentioned, this has been a bit of a pain with Assetic.  Until recently I was able to avoid it for the most part. Assetic can be a great tool, especially during development, but much of it can be circumvented with more front end centric tools like Grunt. Recently though I started playing around with the [SpBowerBundle](https://github.com/Spea/SpBowerBundle) to manage front end assets and hit this problem again.  In principle I really like what SpBowerBundle brings to the table.  It's an awesome union of front end and back end dependency management into a nice clean integrated system.  However, this time I just couldn't make it work.  This is no fault of the Bundle's, as I eluded to earlier, I consider this a flaw in the way the container is compiled.

In general I am a huge fan of Symfony 2. I love the design and architecture of the system, and the flexibility to build a truly componetized app is unique in the PHP-stratosphere right now. This doesn't seem to me like it should be an issue, yet it is. It also seems to me like more people should be wrestling with this, but I'm not finding the blog articles on it or any workarounds for that matter.  Truthfully I suspect the problem could be resolved by delegating the string replacement of _%kernel.root\_dir%_ to a method call, like _getRootDir()_ which could then return the magic constant _\_\_DIR\_\__ and we could use absolutely paths without having to hardcode them.