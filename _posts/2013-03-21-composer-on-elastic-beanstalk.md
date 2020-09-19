---
layout: post
title: Composer on Elastic Beanstalk
date: 2013-03-21T06:00-04:00
categories:
  - Developer
permalink: /2013/03/21/composer-on-elastic-beanstalk/
---
[Amazon's Elastic Beanstalk](http://aws.amazon.com/elasticbeanstalk/) is another git-driven deployment service, this time directly to EC2 and RDS instances on Amazon Web Services.  It's similar to what Red Hat is doing with OpenShift conceptually.

If you are a PHP developer like myself your first question is probably, will it install my [composer dependencies](http://getcomposer.org) for me?  The answer is **YES**.

Here's the kicker, and quite frankly this does not make any sense to me...  If you have stubbed your _vendor_ folder in place, so you've either touched _./vendor/empty_ or _./vendor/.gitkeep_, you are going to have to removed it.  Elastic Beanstalk will use composer based upon the presence of a _composer.json_ or _composer.lock_ file, but if it sees the _vendor_ folder it bails out and doesn't execute the install command. Again, I really don't know why this is and I could not find any documentation about it.  Yet this exactly what I needed to do to get my dependencies installed.
