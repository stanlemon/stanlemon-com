---
layout: post
title: Composer on OpenShift
date: 2013-03-22T06:00-04:00
categories:
  - Developer
permalink: /2013/03/22/composer-on-openshift/
---
Yesterday I talked about running [composer](http://getcomposer.org) on Amazon's Elastic Beanstalk.  There it is builtin and works out of the box for you.  If you are on [OpenShift](http://openshift.com) (my preferred PaaS) composer does not come out of the box.  [Matthew Weier O'Phinney](http://www.mwop.net) has posted an article on the steps he took to get composer installing his project's dependencies, and that's definitely a worthy read.  However, my deployment hook for OpenShift is a little bit different and I wanted to share that.

There were two things I wanted to accomplish.  First, I did not want _composer.phar_ in source control.  Second, I wanted to take advantage of composer's ability to cache dependencies to speedup my deployment process up.  So here is what I use in my _./.openshift/action\_hooks/deploy_ script:

https://gist.github.com/stanlemon/5177925

_As a bonus here's a tip about markers... OpenShift will restart Apache and Zend Server with every deployment. You may not want or need to do this. If you don't, simply touch a file to ./.openshift/markers/hot\_deply and then next time you push your changes up OpenShift will leave all those services running when it deploys._
