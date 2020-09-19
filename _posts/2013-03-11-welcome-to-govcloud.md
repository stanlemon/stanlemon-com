---
layout: post
title: Welcome to GovCloud
date: 2013-03-11T22:00-04:00
categories:
  - Developer
permalink: /2013/03/11/welcome-to-govcloud/
---
Amazon Web Services is like the godfather of cloud computing.  In PCI or HIPPA/HI-TECH compliant environments though it doesn't quite cut it.  There are a bunch of fancy letters indicating various certifications that seal the compliance deal for those looking to provide services in the cloud under those regulations.  Fortunately Amazon developed the GovCloud as a compliant region to meet those needs.  GovCloud requires special approval from Amazon to get started with it.  I've been "tinkering" around with GovCloud for a little while now and have come across some _gotchas_ that I wanted to document and share, if for no other reason then to save the next poor soul from all that googling around...

**1\. Web Interface**

If it's not clear from the website, don't be surprised: **GovCloud does not have a web interface to it.**  All of the fancy tools that us EC2-lovers have grown accustomed to in the East and West regions are out of luck.  In GovCloud you have to use either the command line tools (all umpteen trillion of them) or you have to use a tool called [ElasticWolf](http://www.elasticwolf.com). ElasticWolfe is a decent tool, when it works... and that right there is the problem with it.  I've filed three tickets as of the writing of this post, and while turn around has been fast, I don't feel like I can trust it to do what I need, whenever I need it.  So get comfortable with the command line, as that's your primary place of operation in the GovCloud.  Don't worry though... it's only intimidating at first, you'll get used to it!

**2\. White Listed Load Balancing**

This was not disclosed to me upfront, but apparently the Elastic Load Balancing service has some sort of separate white list you need to be on when joining GovCloud.  Quite honestly this doesn't make sense, but nonetheless I found myself with everything working except the Elastic Load Balancer and when I finally appealed to my GovCloud sales rep, she directed me to a nice (and hardly responsive) technician who told me I needed to be white listed. Rumor is he took care of white listing my account, and while I now have an Elastic Load Balancer up and working in the GovCloud I am still waiting to hear from my Support Technician at Amazon. So if you want to use an ELB in GovCloud save yourself the time and trouble and pre-empt the white listing by telling your sales rep up front.

**3\. Elastic Beanstalk**

This is a great service that basically powers the automation of a full AWS deployment using git.  It's akin to services like OpenShift from Redhat but with an order of magnitude more power by virtue of the plumbing underneath.  I was stoked when Beanstalk came out because it gave me a standard PHP AMI with RDS, an ELB  and an AS/CW configuration right out of the box.  I had dreams of spinning my service up with _git push_ and then walking away to enjoy a cold beverage of some sort.  Not on GovCloud though.  Despite having ALL of the services that make up the underpinning of Beanstalk, the tools for Beanstalk themselves are not actually configured for the GovCloud region.  This isn't spelled out anywhere clearly and the Beanstalk website is sort of misleading when it describes the service as a management wrapper around existing services.  It seems that there is some dedicated plumbing in there too.

**4\. Endpoint URLs**

Most of the command line tools that Amazon ships are not configured to run with GovCloud out of the box.  You have to change the endpoint URLs for them in order to make magic happen.  Unfortunately try as I might I couldn't find all of the necessary environment variables that needed changing documented anywhere.  The endpoint URL's can be found [here](http://docs.aws.amazon.com/general/latest/gr/rande.html#govcloud_region).  But what variables should you set?  I am not sure I have discovered all of them just yet, but here are the ones I have found and have been using:

`export EC2_URL="https://ec2.us-gov-west-1.amazonaws.com"  
export AWS_IAM_URL="https://iam.us-gov.amazonaws.com"  
export AWS_CLOUDWATCH_URL="https://monitoring.us-gov-west-1.amazonaws.com"  
export RDS_URL="https://rds.us-gov-west-1.amazonaws.com"  
export AWS_ELB_URL="https://elasticloadbalancing.us-gov-west-1.amazonaws.com"  
export AWS_AUTO_SCALING_URL="https://autoscaling.us-gov-west-1.amazonaws.com"`

What threw me for a loop was "EC2\_URL" and then "AWS\_ELB\_URL" and then "RDS\_URL" and then "AWS\_CLOUDWATCH\_URL"... what the rhyme and reason was for when "AWS\_" was prefixed is beyond me, but knowing this inconsistency would have saved me some time and I hope it saves you some too!

_Hopefully there won't be any more surprises in GovCloud, but if they are expect a followup!_
