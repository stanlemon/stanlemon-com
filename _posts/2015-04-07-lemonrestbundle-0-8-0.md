---
layout: post
title: LemonRestBundle 0.8.0
date: 2015-04-07T18:52-04:00
categories:
  - Developer
permalink: /2015/04/07/lemonrestbundle-0-8-0/
---
[LemonRestBundle 0.8.0](http://github.com/stanlemon/rest-bundle) has been released. The theme for this version is **compatibility**. While several significant bugs have been fixed since the last release, the focus has been primarily on ensuring that the bundle is compatible with a wide range of versions of PHP, Symfony and Doctrine. Additionally the bundle now comes with support for MongoDB and better support for other implementations of Doctrine.

  

#### Compatibility with PHP

LemonRestBundle now supports PHP 5.3, 5.4, 5.5, 5.6. Additionally the primary ORM test suite passes when using Doctrine 2.5 on HHVM and HHVM nightlies. Tests are also actively being run against PHP 7, though compatibility will not be guaranteed until after it is stable.

  

#### Compatibility with Symfony

LemonRestBundle now supports Symfony versions 2.3, 2.4, 2.5 and 2.6. Additionally, preliminary support has been made for 2.7. While 2.7 is not currently running in Travis CI, if you use it in your projects it will work.

  

#### Compatibility with Doctrine ORM

LemonRestBundle now support Doctrine ORM 2.3, 2.4 and 2.5 In general it is recommended you use 2.5 whenever possible.

  

#### Compatibility with Doctrine MongoDB ODM

LemonRestBundle now works with [Doctrine MongoDB ODM](http://doctrine-mongodb-odm.readthedocs.org/en/latest/)! There are tests specifically for the mongo implementation and they are running in TravisCI.

  

Except where indidcated, all of these versions and combinations of these versions are being tested against automatically in TravisCI. [You can always check the builds out here.](https://travis-ci.org/stanlemon/rest-bundle)

_Update to the latest version of LemonRestBundle and let me know what you think!_
