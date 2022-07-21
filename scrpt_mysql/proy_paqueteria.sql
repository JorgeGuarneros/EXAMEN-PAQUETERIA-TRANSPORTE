create database if not exists proy_paqueteria;

use proy_paqueteria;

create table trabajadores(
id_trabajador int not null auto_increment primary key,
nombre varchar(50),
rol varchar(50)
);

insert into trabajadores (nombre, rol)values ('Lucas','Jefe');
insert into trabajadores (nombre, rol)values ('Paola','Contador');

alter user 'root'@'localhost' identified with mysql_native_password By 'Luiz112098';
flush privileges;