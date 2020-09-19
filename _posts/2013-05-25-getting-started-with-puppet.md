---
layout: post
title: Getting started with puppet
date: 2013-05-25T11:34-04:00
categories:
  - Developer
permalink: /2013/05/25/getting-started-with-puppet/
---
I am a firm believer in [Puppet](http://puppetlabs.com).  I can't imagine provisioning a network of environments without it.  Getting started with Puppet is a mixed bag though, and finding a simple all in one for a master and client setup can be tough.  [Vagrant](http://vagrantup.com) makes setting this up easy though, you can get a master and couple of clients up and running in no time all on virtual infrastructure.  Here is a Vagrantfile I wrote to get a couple of CentOS base boxes dancing together using puppet:

https://gist.github.com/stanlemon/5649465
