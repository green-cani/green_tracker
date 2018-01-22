#!/bin/bash
file=./.env
if [ -e "$file" ]; then
    source $file
    echo "Found $file"
else
    echo "File does not exist"
    exit
fi

#connect and exit to test
psql -h localhost -U $DB_USER -d $DB_NAME -c "\q"

psql -h localhost -U $DB_USER -d $DB_NAME -c \
"create table if not exists users(
  user_id integer primary key,
  username varchar(50)
);
create table if not exists habits(
  user_id integer,
  foreign key (user_id) references users (user_id),
  time timestamp without time zone,
  choice varchar(10)
);
select * from users;
select * from habits;"
