

create database dbacademico_DESA;

use dbacademico_DESA;

create table usuario(
id_usuario int auto_increment primary key,
correo varchar(50),
clave varchar(50)
);

CREATE TABLE especialidad (
    cod_especialidad VARCHAR(5) PRIMARY KEY,
    nombre_especialidad VARCHAR(100)
);

 create table docente(
 id_docente		int AUTO_INCREMENT primary key,
 cod_docente 	varchar(5),
 nombre_docente	varchar(100),
 cod_especialidad 	varchar(5),
 telefono	varchar(20),
 edad		int,
 correo		varchar(100),
 CONSTRAINT fk_docente_especialidad
        FOREIGN KEY (cod_especialidad) REFERENCES especialidad(cod_especialidad)
 ); 
 
insert into usuario (correo, clave)
values ('admin@gmail.com','123456'),('perez@gmail.com','123123');

insert into especialidad (cod_especialidad, nombre_especialidad)
values 
('E0001','Matemáticas'),
('E0002','Historia'),
('E0003','Física'),
('E0004','Informática');

insert into docente (cod_docente,nombre_docente, cod_especialidad,telefono,edad,correo)
values
('D0001','Aristedes Novoa','E0004','998721100',50,'anovoa@gmail.com');



DELIMITER $$ 
CREATE PROCEDURE sp_listar_docente ()
BEGIN 
Select d.id_docente as idDocente, d.cod_docente as codDocente, d.nombre_docente as nombreDocente,
d.cod_especialidad as codEspecialidad,
d.telefono as telefono, d.edad as edad, d.correo as correo,e.nombre_especialidad as nombreEspecialidad
 FROM Docente d 
inner join especialidad e on (d.cod_especialidad=e.cod_especialidad);

END$$ 
DELIMITER ; 

select * from usuario;
select * from especialidad;
select * from docente;



