---
layout: post
title: Naked Domain Workaround
date: 2013-03-19T06:00-04:00
categories:
  - Developer
permalink: /2013/03/19/naked-domain-workaround/
---
I've become a pretty big fan of Red Hat's [OpenShift](http://openshift.com) platform.  I **love** the idea of doing deployments based off of DVCS operations. Almost two years ago when I was working for Wizzard Software we came up with a deployment process not to far off from this concept.  We were a Mercurial based team so the DVCS system was different, but we basically issuing pull's from repositories on the effected systems and out rolled new software that way.  OpenShift is a whole lot better then that though, because it's push triggered and deploys to the cloud and Red Hat has a bunch of awesome hooks tied in to make it even more powerful.  Did I mention it's _FREE_?  Yes, free hosting driven by git in the cloud - it doesn't get much better then this!

But what happens if you want to add a custom domain name to [OpenShift](http://openshift.com)?  In order to do this you have to do two things, first add the appropriate aliases to your [OpenShift](http://openshift.com) application, [see here for more information](https://openshift.redhat.com/community/blogs/custom-url-names-for-your-paas-applications-host-forwarding-and-cnames-the-openshift-way). Second is to edit your DNS records and add CNAME records to point to the OpenShift subdomain for your application.  As with many things in the cloud, IP addresses are ever-changing so you cannot count on them when setting up your domain.  If you're lucky enough to have [NameCheap](http://namecheap.com) as your registrar this isn't a problem, because they let you add a CNAME record as your apex (not sure how they do this, but just go with it... it works!). If you are on [GoDaddy](http://godaddy.com) or a similar DNS service (like [Route 53](http://aws.amazon.com/route53/)) you aren't so lucky.

Fortunately, Satoru systems has a naked domain redirect service _over at [wwwizer](http://wwwizer.com)_ that fills this need.  They basically give you an IP address to use for your A record and their system automatically redirects it to "www.domain.com" where "domain.com" is the apex entry. It's dead simple to use. Best of all, this too is _FREE_.

As with all cloud systems, you never know how long you can get these services before they are bought out, shutdown or just run out of money, so don't use them with mission critical systems. But if you're a hobbyist or have a pet-project this is a great way to get it out on the web without incurring a lot of costs.

[Check out wwwizer's naked domain redirect service.](http://wwwizer.com/naked-domain-redirect)
