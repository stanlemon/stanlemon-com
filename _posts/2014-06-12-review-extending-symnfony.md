---
layout: post
title: 'Review: Extending Symnfony'
date: 2014-06-12T15:38-04:00
categories:
  - Developer
permalink: /2014/06/12/review-extending-symnfony/
---
[Extending Symnfony](http://www.packtpub.com/extending-symfony-2-web-application-framework/book) by Sébastien Armand is a tutorial-style introduction to a variety of the ways that you can extend a Symfony 2 full stack installation. I’m a big fan of Symfony 2 and I’ve done a fair amount of app building with it, so I was interested in Armand’s book and seeing what new things I could discover about hooking into sf2.

The book is filled with code samples, far more than you’ll find in most other technical books. Most of these code samples are also complete, which anyone who has traversed the official Symfony 2 cookbooks will greatly appreciate. Unfortunately, these code samples sometimes cross pages in inconvenient ways, and none of them include syntax highlighting which can make it hard to read at times.

Armand tackles six (sort of eight) areas of Symfony 2 development where developers can tap in and extend existing functionality of Symfony 2. First and foremost he kicks off his tutorials with covering service definitions and listeners. These topics seem like they could have been separate chapters to me, but nonetheless he does a good job of giving real world examples of how to tie these things in. He especially does well with event listeners - the secret weapon of the Symfony 2 stack (in my opinion anyhow).

Armand’s approach to extending symfony is project-based, meaning that through the book you’re working on building an app that handles some details for meet ups between users. You can think of it like the old Symfony 1 Askeet tutorial. This is a huge advantage of Armand’s book over other Symfony 2 texts you’ll find in the wild. Actual applications create context and drive home the concepts. As an added bonus, in this book you are NOT building yet another task manager!

The Security chapter covers some of the more difficult areas of Symfony 2. Anyone who has dealt with Security in sf2 knows that, while extremely powerful, it can also be extremely challenging. Armand’s examples are helpful, especially as he tackles an OAuth implementation. Armand uses the Friends of Symfony UserBundle to get going, but unfortunately didn’t cover with too much depth getting started with this super handy bundle. The examples in the book are priceless, but I look forward to future revisions that cover the new SimpleAuth implementation in Symfony 2. The only other thing I wished Armand would have covered was securing an api with tokens and a custom user provider for doing this. He shows how a cookie can be used with an event listener, but truthfully there are better ways of tackling this problem in Symfony 2 that are more consistent with its security model.

One of the most valuable chapters in this book is the Doctrine chapter. Doctrine 2’s official documentation lacks a lot of context. By being a project-based tutorial, Armand actually shows you how to write a custom data type, custom DQL function, and a custom filter, rather than stumble through the Doctrine 2 docs and hope you got close. This chapter in and of itself is a valuable resource for those times when you need to do these things.

The final chapter discusses bundles briefly. This is one area of the book I felt could have been fleshed out a bit more. Armand covers the basics, but part of me felt like this chapter almost belonged at the beginning of the book instead of the tail end. The other thing that was missing from this chapter was bundle inheritance which, while a tricky subject, is a huge part of extending a Symfony 2 application.

All in all I think this is a solid book on tapping into some of the more powerful features of Symfony 2 and it’s counterpart Doctrine 2. The book is at times a little oddly organized, but the code samples and tip are worthy any web developers time. If you’re looking to dive into some of the things in the book’s table of contents get yourself a copy and profit from Armand’s tutorials and extensive code samples.
