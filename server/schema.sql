#postgresql://[user[:password]@][host][:port][/dbname]

connection_string=postgresql://postgres:Test1234@localhost:5432/resturant_db


-- commands for sql

-- ddl : data defination language 

-- first command: how to delete table 
drop table users;


-- next command: creation 
create table users (
	userid serial primary key, 
	created_at timestamp default current_timestamp, 
	name varchar(100) not null, 
	email varchar(100) unique not null, 
	hashed_password varchar(255) not null,
	role text[] default array['user'],
	check (role <@ array['user', 'manager', 'employee'])
);


-- column_name data_type constraint 
-- constraint types: unique, not null, primary key, default(n)

-- data types
-- varchar(255) 4 bytes 255 char
-- text 

-- int 1,2,3,
-- serial 1,2,3.. auto counter 

-- boolean t/f


-- dml

-- get all data
select name, email from users;
select * from users;


-- create / add
insert into users (name, email, hashed_password) values ('sewar', 'sewar@gmail.com', '123123');
insert into users (name, email, hashed_password) values ('noura', 'noura@gmail.com', '123123');
insert into users (name, email, hashed_password) values ('ss', 'ss@gmail.com', '123123');


-- update 
update users 
set name='mariam', email='mariam@gmail.com'
where userid=5;


-- delete
delete from users where userid=6;



-- TASK:
-- data base for restaurant

-- table names: 
-- users: 
-- id, name, email, hashed_password, role(user, manager, employee)

-- categories:
-- id, name, description

-- menu/food:
-- id, name, cat_id (foreign key reference on category id), 
-- description, price, image, is_available



-- categories table
create table categories (
	catId serial primary key, 
	name varchar(50) not null, 
	description text,
	created_at timestamp default current_timestamp
);


select * from categories;



-- menu table
create table menu (
	menuId serial primary key, 
	name varchar(100) not null, 
	description text, 
	price numeric, 
	quantity int, 
	image text, 
	cat_id int, 
	foreign key (cat_id) references categories(catId),
	created_at timestamp default current_timestamp
);


select * from menu;



-- restaurant tables
create table tables (
	id serial primary key,
	table_number int not null unique,
	capacity int not null, 
	floor int null, 
	is_available boolean default false,
	created_at timestamp default current_timestamp
);



-- reservation table
create table reservation (
	id serial primary key,
	user_id int references users(userid) on delete set null, 
	table_id int references tables(id) on delete set null, 
	full_name varchar(200) not null, 
	email varchar(100) not null, 
	phone varchar(20) not null, 
	guests_number int not null, 
	reservation_date date not null, 
	reservation_time time not null, 
	requests text, 
	status text default 'pending' 
		check (status in ('pending', 'approved', 'rejected')),
	created_at timestamp default current_timestamp
);


select * from reservation;



-- products (pg admin test table)
create table products (
	id serial primary key,
	name varchar(200), 
	price numeric, 
	quantity int, 
	created_at timestamp default current_timestamp
);