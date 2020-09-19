---
layout: post
title: MySQL Strict Mode on OS X
date: 2013-03-23T06:00-04:00
categories:
  - Developer
permalink: /2013/03/23/mysql-strict-mode-on-os-x/
---
If you are a web developer on OS X you probably are sporting your own installation of your database server.  If you are running MySQL you might be haunted by strict mode.  MySQL has modes [as documented here](http://dev.mysql.com/doc/refman/5.1/en/server-sql-mode.html) that effect the behavior of various parts of the system.  In strict mode values do not get casted between types, which is where I ran into issues.  My favorite ORM was passing a boolean _true_ into a _tinyint(1)_ and causing the transaction to abort.  This is thanks to [STRICT\_TRANS\_TABLES](http://dev.mysql.com/doc/refman/5.1/en/server-sql-mode.html#sqlmode_strict_trans_tables) in my case.  The first thing I checked was my _/etc/my.cnf_ to see if "sql\_mode" was set in the \[mysqld\] section.  It was not.  So I tried setting it to something other than _STRICT\_TRANS\_TABLES_ and restarted MySQL.  No luck, the setting was still on.  After a lot of poking around I found out that MySQL for OS X from Oracle ships with a _/usr/local/mysql/my.cnf_ which is loaded on startup. In this file is a sole configuration directive for _sql\_mode=NO\_ENGINE\_SUBSTITUTION,STRICT\_TRANS\_TABLES._  Once I commented this out and restarted the server strict mode was off, my ORM worked and I was happy.
