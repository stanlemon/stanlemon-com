---
layout: post
title: Why Symfony 2.5 is important
date: 2014-06-16T19:16-04:00
categories:
  - Developer
permalink: /2014/06/16/why-symfony-2-5-is-important/
---
[Symfony 2.5 was released on June 1](http://symfony.com/blog/symfony-2-5-0-released). I've been following blogs and listening to podcasts about the release and there are a lot of really awesome additions in this release. But there is one feature in particular that I don't believe is getting enough attention and deserves some.

Back in April I wrote about my frustration with [Symfony & Absolute Paths](/2014/04/13/symfony-and-absolute-paths/). I was excited to see in May that this concern found [itself into an official GitHub issue and PR](https://github.com/symfony/symfony/pull/10894) and that it might get resolved in a future release of Symfony.  Well it has, and burried under the notes for 2.5 RC1 is this, "bug #10894 \[HttpKernel\] removed absolute paths from the generated container (fabpot)".

Quite frankly, this is **huge**!  After my post in April I hacked together what I was calling a _PathlessKernel_ to work around this issue.  I basically regex'ed out the application root from the container. In my opinion this was an inelegant solution and thus I chose not to share it. The fix in #10894 is far superior and allows for the regenerating of cache in a CI environment before deployment without all of the path chaos previously created when dumping the container.

This is a big win for Symfony as it makes an application build artifact truly portable!
