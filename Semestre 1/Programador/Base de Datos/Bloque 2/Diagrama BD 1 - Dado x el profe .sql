CREATE TABLE `ingresos` (
  `cod_ingreso` int PRIMARY KEY,
  `donacion` int,
  `tipo_ingreso` int,
  `monto` money,
  `descripcion` varchar(255),
  `fecha` datetime
);

CREATE TABLE `egresos` (
  `cod_egreso` int PRIMARY KEY,
  `tipo_egreso` int,
  `monto` money,
  `descripcion` varchar(255),
  `fecha` datetime
);

CREATE TABLE `tipo_egreso` (
  `cod_tipo_egreso` int PRIMARY KEY,
  `tipo` varchar(255)
);

CREATE TABLE `tipo_ingreso` (
  `cod_tipo_ingreso` int PRIMARY KEY,
  `tipo` varchar(255)
);

CREATE TABLE `eventos` (
  `cod_evento` int PRIMARY KEY,
  `nombre` varchar(255),
  `descripcion` varchar(255),
  `fecha_inicio` datetime,
  `duracion_minutos` int,
  `ingresos` int,
  `egresos` int
);

CREATE TABLE `donacion` (
  `cod_donacion` int PRIMARY KEY,
  `monto` money,
  `tipo` varchar(255),
  `fecha` datetime,
  `persona` int,
  `inscripcion` int,
  `evento` int
);

CREATE TABLE `inscripcion` (
  `cod_inscripcion` int PRIMARY KEY,
  `evento` int,
  `fecha_incripto` datetime
);

CREATE TABLE `personas` (
  `cod_persona` int PRIMARY KEY,
  `nombre` varchar(150),
  `apellido` varchar(150),
  `doc` varchar(10),
  `telefono` varchar(15),
  `tipo_doc` int
);

CREATE TABLE `tipo_doc` (
  `cod_tipo_doc` int PRIMARY KEY,
  `tipo` varchar(100)
);

CREATE TABLE `inscripcion_persona` (
  `cod_ins_per` int PRIMARY KEY,
  `persona` int,
  `inscripcion` int
);

ALTER TABLE `tipo_doc` ADD FOREIGN KEY (`cod_tipo_doc`) REFERENCES `personas` (`tipo_doc`);

ALTER TABLE `tipo_egreso` ADD FOREIGN KEY (`cod_tipo_egreso`) REFERENCES `egresos` (`tipo_egreso`);

ALTER TABLE `tipo_ingreso` ADD FOREIGN KEY (`cod_tipo_ingreso`) REFERENCES `ingresos` (`tipo_ingreso`);

ALTER TABLE `inscripcion` ADD FOREIGN KEY (`cod_inscripcion`) REFERENCES `inscripcion_persona` (`inscripcion`);

ALTER TABLE `personas` ADD FOREIGN KEY (`cod_persona`) REFERENCES `inscripcion_persona` (`persona`);

ALTER TABLE `eventos` ADD FOREIGN KEY (`cod_evento`) REFERENCES `inscripcion` (`evento`);

ALTER TABLE `ingresos` ADD FOREIGN KEY (`cod_ingreso`) REFERENCES `eventos` (`ingresos`);

ALTER TABLE `egresos` ADD FOREIGN KEY (`cod_egreso`) REFERENCES `eventos` (`egresos`);

ALTER TABLE `inscripcion` ADD FOREIGN KEY (`cod_inscripcion`) REFERENCES `donacion` (`inscripcion`);

ALTER TABLE `donacion` ADD FOREIGN KEY (`cod_donacion`) REFERENCES `ingresos` (`donacion`);

ALTER TABLE `eventos` ADD FOREIGN KEY (`cod_evento`) REFERENCES `donacion` (`evento`);

ALTER TABLE `personas` ADD FOREIGN KEY (`cod_persona`) REFERENCES `donacion` (`persona`);
