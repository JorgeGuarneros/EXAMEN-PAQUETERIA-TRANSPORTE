create database if not exists bd_paqueteria;

use bd_paqueteria;

create table table_transporte(
id_transporte int not null auto_increment primary key,
transporte varchar(50),
placas varchar(50)
);

insert into table_transporte(transporte, placas)values ('camioneta','159487');

alter user 'root'@'localhost' identified with mysql_native_password By 'Luiz112098';
flush privileges;

/*delete from table_transporte where id_transporte;*/