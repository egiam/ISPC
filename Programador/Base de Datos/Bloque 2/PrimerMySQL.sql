
Create database ISPC;

use ISPC;

create table Materias(
	cod_materia int NOT Null, /* Comentarios */
    materia varchar(100) not null,
    Primary key (cod_materia)
);

-- Comentarios

alter table Materias
add fecha_inicio datetime;

alter table Inscripcion_Materias
add foreign key (cod_materia) references Materias (cod_materia);

create table Inscripcion_Materias(
	cod_legajo int not null,
    cod_materia int not null
);

drop table Inscripcion_Materias;
