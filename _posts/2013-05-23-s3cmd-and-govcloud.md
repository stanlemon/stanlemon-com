---
layout: post
title: s3cmd and GovCloud
date: 2013-05-23T05:00-04:00
categories:
  - Developer
permalink: /2013/05/23/s3cmd-and-govcloud/
---
If you're using [_s3cmd_](http://s3tools.org/) to put files into an s3 bucket and need to do so into [GovCloud](http://aws.amazon.com/govcloud-us/) you can, but you need to override the end point URL's used for s3.  I had a hard time finding documentation for this, so hopefully this saves someone sometime in the future.

_s3cmd_ writes a configuration file, likely at ~/.s3cfg and in it are two options that you are not prompted for when going through the setup process, but are relevant when connecting to GovCloud.  Specifically 'host\_base' and 'host\_bucket' need to be changed from the default s3 end points, they need to be set like so:

> host\_base = s3-us-gov-west-1.amazonaws.com  
> host\_bucket = %(bucket)s.s3-us-gov-west-1.amazonaws.com

Once these are set your GovCloud access key and secret should work.
