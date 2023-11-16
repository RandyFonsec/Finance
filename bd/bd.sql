CREATE DATABASE finance;
use finance;

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    contrasenna VARCHAR(255) NOT NULL
);

CREATE TABLE CategoriaGasto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    es_comercio BIT,
    nombre VARCHAR(255),
    eliminado BIT DEFAULT 0,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);


CREATE TABLE Gasto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    es_comercio BIT,
    fecha DATE,
    monto DECIMAL(10, 2),
    titulo VARCHAR(255),
    id_categoria INT,
    descripcion VARCHAR(255),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
    FOREIGN KEY (id_categoria) REFERENCES CategoriaGasto(id)
);

CREATE TABLE CategoriaIngreso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    es_comercio BIT,
    nombre VARCHAR(255),
    eliminado BIT DEFAULT 0,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);


CREATE TABLE Ingreso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    es_comercio BIT,
    fecha DATE,
    monto DECIMAL(10, 2),
    titulo VARCHAR(255),
    id_categoria INT,
    descripcion VARCHAR(255),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
    FOREIGN KEY (id_categoria) REFERENCES CategoriaIngreso(id)
);


CREATE TABLE Negocio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    nombre VARCHAR(255),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);


CREATE TABLE Impuesto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_negocio INT,
    nombre VARCHAR(255),
    tasa DECIMAL(5, 2),
    FOREIGN KEY (id_negocio) REFERENCES Negocio(id)
);


INSERT INTO Usuario (nombre, correo, contrasenna)
VALUES ('Juan Perez', 'juan@example.com', '123'),
       ('Perez Juan ', 'juan@example.com', '123');

INSERT INTO CategoriaGasto (id_usuario, es_comercio, nombre) 
VALUES 
  (1, 0, 'Comida'),
  (1, 0, 'Transporte'),
  (1, 0, 'Entretenimiento');

INSERT INTO CategoriaGasto (id_usuario, es_comercio, nombre) 
VALUES 
  (2, 0, 'Alquiler'),
  (2, 0, 'Facturas'),
  (2, 0, 'Compras');

INSERT INTO CategoriaGasto (id_usuario, es_comercio, nombre)
VALUES (1, 1, 'Alimentos'),
       (2, 1, 'Transporte');

INSERT INTO CategoriaIngreso (id_usuario, es_comercio, nombre) 
VALUES 
  (1, 0, 'Salario'),
  (1, 0, 'Bonificaciones'),
  (1, 0, 'Ingresos Adicionales');


INSERT INTO CategoriaIngreso (id_usuario, es_comercio, nombre) 
VALUES 
  (2, 0, 'Ventas'),
  (2, 0, 'Servicios'),
  (2, 0, 'Ingresos Extras');


INSERT INTO CategoriaIngreso (id_usuario, es_comercio, nombre)
VALUES (1, 1, 'Salario'),
       (2, 1, 'Reembolso');

INSERT INTO Gasto (id_usuario, es_comercio, fecha, monto, titulo, id_categoria, descripcion)
VALUES (1, 1, '2023-11-01', 50.00, 'Compras de supermercado', 7, 'Gasto mensual'),
       (1, 0, '2023-11-02', 20.00, 'Viaje en metro', 2, 'Billete de ida y vuelta'),
       (2, 1, '2023-11-01', 50.00, 'Compras de supermercado', 8, 'Gasto mensual'),
       (2, 0, '2023-11-02', 20.00, 'Viaje en metro', 5, 'Billete de ida y vuelta');

INSERT INTO Ingreso (id_usuario, es_comercio, fecha, monto, titulo, id_categoria, descripcion)
VALUES (1, 1, '2023-11-03', 2500.00, 'Salario mensual', 7, 'Pago por trabajo'),
       (1, 0, '2023-11-04', 100.00, 'Reembolso de gastos', 2, 'Reembolso de viaje'),
       (2, 1, '2023-11-03', 2500.00, 'Salario mensual',8, 'Pago por trabajo'),
       (2, 0, '2023-11-04', 100.00, 'Reembolso de gastos', 5, 'Reembolso de viaje');

INSERT INTO Negocio (id_usuario, nombre)
VALUES (1, 'Mi Negocio S.A.'),
       (2, 'Mi Negocio S.A.');

INSERT INTO Impuesto (id_negocio, nombre, tasa)
VALUES (1, 'Impuesto sobre la renta', 0.13),
       (1, 'Impuesto de ventas', 0.07),
       (1, 'Impuesto valor agregado', 0.21),
       (2, 'Impuesto sobre la renta', 0.03),
       (2, 'Impuesto de ventas', 0.09),
       (2, 'Impuesto valor agregado', 0.31);

