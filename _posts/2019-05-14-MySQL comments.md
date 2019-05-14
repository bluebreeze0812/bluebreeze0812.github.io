---
layout:     post
title:      MySQL comments
date:       2019-05-14 20:00:40 +0800
author:     Leo
categories: Learn
tags:       MySQL
---

In MySQL,  you can add comments to a data column or a row by using `comment` directive.

Adding comments along with table's creation:

```sql
create table test(id int not null default 0 comment 'user id')
```
If the table was already created, you can also use table alteration directives to add comment properties later on:

```sql
alter table test change column id id int not null default 0 comment 'testing table id'
```

To check all of the comment properties within a table:

```sql
show full columns from test;
```

Add comment to a table directly:

```sql
create table test1 ( 
    field_name int comment 'field comment' 
)comment='table comment'; 
```

Change comment of a table:

```sql
alter table test1 comment 'changed comment';
```

Change comment of a field:

```sql
alter table test1 modify column field_name int comment 'changed comment';
```

To show a table's comment:

```sql
--show in table creation directives
    show  create  table  test1; 
--show in table's metadata
    use information_schema; 
    select * from TABLES where TABLE_SCHEMA='my_db' and TABLE_NAME='test1' \G
```

To show fields' comment:

```sql
--show 
    show  full  columns  from  test1; 
--show in table's metadata
    select * from COLUMNS where TABLE_SCHEMA='my_db' and TABLE_NAME='test1' \G
```

