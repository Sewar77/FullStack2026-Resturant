-- to store db tables: 
-- commands for sql

-- ddl : data defination language 
--first command: how to delete table 
drop table users;

--next command: createion 
create table users (
	userid serial primary key, 
	created_at timestamp default current_timestamp, 
	name varchar(100) not null, 
	email varchar(100) unique not null, 
	password varchar(50) not null
);
-- column_name data_type constraint 
--constrainet types: unique, not null, primary key, default(n)

--data types
-- varchar(255) 4 bytes 255 char
-- text 

-- int 1,2,3,
-- serial 1,2,3.. auto counter 

-- boolean t/f

-- dml
-- get all data
select name, email from users
select * from users

-- create / add
insert into users (name, email, password) values ('sewar', 'sewar@gmail.com', '123123')
insert into users (name, email, password) values ('noura', 'noura@gmail.com', '123123')
insert into users (name, email, password) values ('ss', 'ss@gmail.com', '123123')

--update 
update users 
set name='mariam', email='mariam@gmail.com'
where userid=5

--delete
delete from users where userid=6

