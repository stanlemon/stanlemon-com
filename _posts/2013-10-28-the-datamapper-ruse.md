---
layout: post
title: The DataMapper Ruse
date: 2013-10-28T23:01-04:00
categories:
  - Developer
permalink: /2013/10/28/the-datamapper-ruse/
---
There were some great articles today about ORMs, specifically "[Is ORM abstraction a pipe dream?](http://programmingarehard.com/2013/10/21/is-orm-abstraction-a-pipe-dream.html)" by David Adam and then "[Publish Your Failure; or, The Way Of All Frameworks](http://paul-m-jones.com/archives/4757)" by Paul Jones (the man who led me to good BBQ in Memphis).

I've been thinking about ORMs a lot lately and I've been wanting to write something about what I consider to be the DataMapper farce. I should be clear up front, I'm big Doctrine 2 fan.  **BIG.** It's my ORM of choice every single time, or maybe it was... On principal I love Doctrine 2. My days as a Java developer made me grow fond of Hibernate and with time I've come to really appreciate object hydration via the DataMapper pattern alongside the Repository pattern.  What I've appreciated most is the fact that I can write a model with no implicit dependencies, meaning my class "Foo" does not extend _ActiveFoo_ or _QueryFoo_ or _BaseFoo_ or _FooTable_ or _GatewayFoo_ or _FooPeer_ or _MagicHotSauceFoo_, it simply stands on it's own.  In the case of Doctrine 2 my model usually gets some love from annotations or maybe Yaml if I'm looking to spice up my day.

Here's the thing I've been contemplating though and why I think this notion of portability is fundamentally a ruse (_for now_). In the PHP universe what other library provides a DataMapper implementation that would allow you to freely move from Doctrine 2? If I choose to write stand alone models I am either stuck doing some sort of hydration myself (_all kinds of time consuming icky_) or I am using Doctrine 2.  So this idea that ActiveRecord locks you in and Doctrine 2 doesn't, is, well simply not true...  Short of a viable alternative Doctrine 2 has a monopoly on the DataMapper pattern, making it as 'locked in' as using Propel or any other ActiveRecord-styled ORM.

Now don't get me wrong...  This doesn't change the fact that I will likely continue to gravitate toward's Doctrine 2.  I am going to hang tight and hope for some healthy competition that will allow me to write my models portable enough to swap in Doctrine 2 for odd days of the week and LibraryX for even days.
