---
layout: post
title: Adding PATCH to LemonRestBundle
date: 2014-10-16T23:05-04:00
categories:
  - Developer
permalink: /2014/10/16/adding-patch-to-lemonrestbundle/
---
Work on [LemonRestBundle](http://github.com/stanlemon/rest-bundle) continues, last night I merged in support for PATCH. This is an interesting beast because there are some strong opinions on the proper way to implement PATCH in a REST API. Initially I assumed I would just avoid it rather than subject myself to the judgment of poor implementation. However, the more I researched PATCH the more I realized that I wanted to add it, and furthermore the strong opinions were largely academic in nature. The [JSON Patch specification](https://tools.ietf.org/html/rfc6902) is rather powerful but also complex, I've yet to find a consuming client that actually supports this standard. What I see a lot of is more akin to the [JSON Merge Patch specification](http://tools.ietf.org/html/draft-ietf-appsawg-json-merge-patch-07), and this is exactly what I've decided to add. Truthfully the bulk of the work in my implementation happens in JMS Serializer. I need to do more extensive testing on object nesting but the basic implementation works right now. One issue to keep in mind is the current setup requires you to specify the object id when in the PATCH request. I hope to fix this in the future, but for now that's the requirement.

I've also recently added the ability to customize the Criteria object for searches.  The Criteria object is basically a collection of the query parameters and it gets used by the ObjectManager to add filtering to the findBy() command used for making collections of a given resource. Out of a set of query parameters the default implementation separates out some data for limit, offset, order by and order direction and then provides those in a standard way to the ObjectManager. The limiting factor in the initial implementation is that you might not have liked the fields I was using for limit, offset, etc. Customizing the Criteria object gives you full control over how this is handled. You can read more about how to configure this in the bundle's documentation.

I've been experimenting with generating [Swagger](http://swagger.io) docs within my bundle. I would expect this to materialize in the next week or so.  The technical details are already available to generate the docs, it's the descriptive data that isn't there yet and I'm still evaluating the best way to make that possible. Ultimately I'd love to have the bundle help it's users generate documentation for their APIs, eliminating yet one more detail in the management of a REST API.

Last but not least there I think it's safe to expect support for versioning, again this will largely be driven off of JMS Serializer's version exclusion groups.

Work on the bundle continues to move forward. Several folks have made contributions, all of which I am really grateful for! If you have a suggestion, recommendation or spotted a bug of any sort please open an issue over on GitHub.
