-- ignore kalau sudah create database
create database binar_resto_db;

-- crate table category
create table category(
	id_category serial primary key,
	name varchar(100) not null
);

-- create table menu
create table menu(
	id_menu serial primary key,
	name varchar(500) not null,
	id_category integer not null,
	stock integer default 0,
	constraint menu_foreign_key_bebas
		foreign key(id_category) references category(id_category)
);

-- insert to category
insert into category(name) values('makanan'), ('minuman');
select * from category;

-- insert menu
insert into menu(name,id_category) values('Pecel Lele', 1);

-- update stock menu
update menu set stock = 10 where id_menu = 2

-- select menu
select * from menu;

-- select menu dengan kondisi
select * from menu where stock > 0;


-- select join
select m.id_menu,
       m.name,
       m.stock,
       c.name as category_name
from menu m
         join category c on m.id_category = c.id_category
where stock > 0;

-- tambah menu
insert into menu(name, id_category) values ('Es Teh', 2);

-- update stock
update menu set stock = 6 where id_menu = 5;