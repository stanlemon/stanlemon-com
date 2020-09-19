---
layout: post
title: Percona, MySQL and Puppet
date: 2013-03-24T06:00-04:00
categories:
  - Developer
permalink: /2013/03/24/percona-mysql-and-puppet/
---
MySQL is one of the most widely used database servers for web development.  It's _free_, has a wide range of support and is easy to get up and going.  Add to this native bindings in just about every language and you've got a pretty powerful databasing tool at your hands.  [Percona](http://www.percona.com) is a MySQL consulting company with a super-awesome distribution of MySQL tuned for performance. For the most part Percona packages should be a drop-in replacement with MySQL. When it comes to system administration tasks I like to throw [Puppet](https://puppetlabs.com) at the problem, it makes it easier to replay the configuration down the road and I can track the configuration changes in git. But there's a problem when you change the package name for the defacto-standard [Puppet MySQL module](https://github.com/puppetlabs/puppetlabs-mysql).  The referencing of the service and the default pid file in the Percona distribution and subsequently the reload following install fails, as well as anything downstream of those items. This was unsatisfactory to me so I poked around to figure out a way to make this work, [despite the bug in module](http://projects.puppetlabs.com/issues/19562). Below is a Puppet manifest with some hackey'ness if you're using Percona that will get it working and allow you to use the rest of the Puppet MySQL module without problems.

https://gist.github.com/stanlemon/5178407
