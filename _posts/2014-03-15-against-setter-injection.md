---
layout: post
title: Against Setter Injection
date: 2014-03-15T09:25-04:00
categories:
  - Developer
permalink: /2014/03/15/against-setter-injection/
---
I recently read Richard Miller's post  [Avoiding Setter Injection](http://richardmiller.co.uk/2014/03/12/avoiding-setter-injection/) and I in large part agree with his sentiments. My conversion to constructor injection over setter injection is a fairly recent one and when I was initially deliberating the differences I found a lot of explanations online with little concrete code to show why this practice is less productive to good object oriented design. I thought I would try to illustrate with some concrete code examples I agree with Miller that ultimately constructor injection is a more worthy approach and why you should avoid using setter injection whenever possible.

First, let's consider two interfaces _FooService_ and _FooNotifier. FooService_ will use a _FooNotifier_ which contains a method _notify()._ We have two implementations of _FooNotifier_ the _BarNotifier_ and the _BazNotifier._  Fundamentally they do two completely different things, though they agree to the same contract.  Here's what these things look like:

\[gist\]https://gist.github.com/stanlemon/d0748c96775995275074\[/gist\]

Now let's take a look at our constructor injection implementation _FooServiceConstruct_:

\[gist\]https://gist.github.com/stanlemon/a1968eedabb808fa5985\[/gist\]

And also our setter injection implementation _FooServiceSetter_:

\[gist\]https://gist.github.com/stanlemon/4ca097db323de8c7faba\[/gist\]

The argument goes that with constructor injection you create an object with all of it's dependencies. This means that you minimize side effects caused by the dependency not being injected, or worse changing on you after your object has been created. It makes your object fundamentally more predictable. Think of it this way, this is the only way that we can use our _FooServiceConstruct_:

\[gist\]https://gist.github.com/stanlemon/f2cf4b13562fa1fa3f74\[/gist\]

But with _FooServiceSetter w_e can actually do a couple of things with that implementation...

\[gist\]https://gist.github.com/stanlemon/bcd6e243a4baa5d7b0f5\[/gist\]

You'll see that we can create a _FooService_ that either does not work or that can have it's internal behavior completely changed out from under us.  Neither of these options is good. The alternative is that with constructor injection we have an object that stands on it's own, the functionality of which cannot be changed in runtime after it has been instantiated. If you want to avoid buggy software, make your objects predictable.

This is a simple example, but it illustrates the nature of an object that uses setter injection. It creates the potential for volatility in your object that you don't want to occur.  Now I'm not saying you should never inject via setter. There may be times that you actually want the behavior I've illustrated, however I think you will find that most of the time you simply don't want that. Subsequently as a general rule I inject by constructor unless compelled otherwise during the design of my software. I make it the exception, not the rule when writing objects.
