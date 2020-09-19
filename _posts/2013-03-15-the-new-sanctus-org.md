---
layout: post
title: The New Sanctus.org
date: 2013-03-15T21:00-04:00
categories:
  - Developer
  - Theology
permalink: /2013/03/15/the-new-sanctus-org/
---
Today I released a new version of [Sanctus.org](http://sanctus.org), my Lutheran lectionary calendar project. I started this project when I was in college at Concordia University, River Forest. I was studying theology and fascinated with liturgics and the church year. The project started with the purpose of assisting our dorm in planning our daily prayer services and quickly evolved into something bigger as other people gained interest in it as well. Today's release is the third time I have rewritten the site. Today's code is deployed on Red Hat's [OpenShift](http://openshift.com) platform and I am using [Zend Server](http://www.zend.com/en/products/server/)'s page cache and data cache to keep things fast. The new layout utilizes Twitter's [Bootstrap](http://twitter.github.com/bootstrap/) library for a nice responsive design. Under the hood the actual calculation algorithm has been open sourced and can be found on [GitHub](http://github.com/stanlemon/lectionary), the rest of the plumbing is [Slim](http://www.slimframework.com), [Doctrine](http://doctrine-project.org/) and [Twig](http://twig.sensiolabs.org) respectively. I've also restructured a good portion of the persistence layer to be more normalized and it runs on MySQL instead of SQLite too.  All in all I think it's a better piece of software then it was. I hope you enjoy the new look, faster response times and all around better experience of using [Sanctus.org](http://sanctus.org).  [Feel free to leave me some feedback on the redesign](/contact).

[_And as always... special thanks to Pastor Borghardt for donating the domain name sanctus.org!_](http://revborghardt.wordpress.com)
