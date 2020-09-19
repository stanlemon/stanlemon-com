---
layout: post
title: Aura.Sql & Existing PDO connections
date: 2014-04-16T18:51-04:00
categories:
  - Developer
permalink: /2014/04/16/aura-sql-and-existing-pdo-connections/
---
I'm pretty excited about a contribution I recently made to [Aura.Sql](http://github.com/auraphp/Aura.Sql).  For those not familiar with [Aura](http://auraphp.com), it's the brain child of [Paul M Jones](http://paul-m-jones.com/archives/4757) (a decent dude despite his hate for design patterns starting with the letter F) and strives to be a set of standalone components with no outside dependencies and 100% test coverage. Aura.Sql v2 is also known as ExtendedPdo, and it's a drop in replacement for PDO.  The idea is it gives you some extra giddy up in your database tooling, via lazy connections, short hand helpers and a basic profiler. I've found this especially helpful on a couple of projects where I have a bunch of technical debt and an antiquated ORM.  The problem is database connections are expensive and opening up a new one via ExtendedPdo is not always feasible.  My contribution to this project was the ability to decorate or wrap an existing PDO instance so that you could pull the raw connection from another system and use it without reconnecting to the database.  This is an idea I got from Doctrine 2, which offers similar support by passing in an existing instance object.  This is a particularly handy feature when refactoring a legacy code base.

If you're getting off the ORM band wagon, or dealing with some poorly performing legacy code you're trying to refactor take a look at Aura.Sql, it's right tool for the job.

[https://gist.github.com/stanlemon/10692955](https://gist.github.com/stanlemon/10692955)
