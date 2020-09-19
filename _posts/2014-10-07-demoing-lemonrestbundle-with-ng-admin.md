---
layout: post
title: Demoing LemonRestBundle with ng-admin
date: 2014-10-07T21:40-04:00
categories:
  - Developer
permalink: /2014/10/07/demoing-lemonrestbundle-with-ng-admin/
---
tl;dr [You can try out LemonRestBundle with ng-admin here.](http://restdemo-stanlemon.rhcloud.com/#)

Last week I shared that I was working on a [Symfony 2 bundle that would create REST end points from Doctrine entities](github.com/stanlemon/rest-bundle). I've been continuing to work on that bundle, adding features and flexibility and I decided to re-evaluate the way I was demoing it. The truth is that I didn't want to sink a lot of time into writing a demo, but I also want to do a show more functionality than just pulling down some objects from and dumping them to a page. What I want is to show the full REST life cycle, getting, searching and saving objects to an api. Fortunately there's a really great tool out there that plugs into a REST api and does just that! It’s called [ng-admin](https://github.com/marmelab/ng-admin) and it’s from the folks over at [Marmelab](http://marmelab.com/).

For those that aren't familiar with [ng-admin](https://github.com/marmelab/ng-admin), it's a tool written using [Angular](https://angularjs.org/) and it allows you to easily wire up a "stock" UI for a REST API. Like my own project, it's opinionated and convention oriented. Quite honestly it's a pretty cool tool. So I’ve hooked it up to a symfony standard application with the [LemonRestBundle](github.com/stanlemon/rest-bundle) and configured some entities to match [Marmelab’s own demo](ng-admin.marmelab.com). I also pulled the sample data down that Marmelab was using and stuck it in a sqlite database. The database resets every minute, but it’s enough time to create a post and edit some comments and see [LemonRestBundle](https://github.com/stanlemon/rest-bundle) in action. The really cool part is when you take a look at the demo app’s GitHub repository and realize [it took three Entity classes to make the whole thing happen](https://github.com/stanlemon/rest-demo-app/tree/master/src/Lemon/RestDemoBundle/Entity).

[I’ve deployed the demo over at OpenShift so you can take a look and try it out for yourself.](http://restdemo-stanlemon.rhcloud.com/#/list/post) You can also clone the [demo app from GitHub](https://github.com/stanlemon/rest-demo-app), run composer.phar install and try it yourself!

**Links to check out:**

*   [LemonRestBundle for Symfony](http://github.com/stanlemon/rest-bundle)
*   [Demo app repository for LemonRestBundle](http://github.com/stanlemon/rest-demo-app)
*   [Live demo of LemonRestBundle on OpenShift](http://restdemo-stanlemon.rhcloud.com)
*   [ng-admin by Marmelab](https://github.com/marmelab/ng-admin)
