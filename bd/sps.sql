DELIMITER //

CREATE PROCEDURE sp_VerificarUsuario(IN correoUsuario VARCHAR(255), IN contrasennaUsuario VARCHAR(255))
BEGIN

    SELECT *
    FROM Usuario
    WHERE correo = correoUsuario AND contrasenna = contrasennaUsuario;

END //

DELIMITER ;

--CALL sp_VerificarUsuario(@correoUsuario, @contrasennaUsuario);

DELIMITER //

CREATE PROCEDURE sp_InsertarUsuario(
    IN nombreUsuario VARCHAR(255),
    IN correoUsuario VARCHAR(255),
    IN contrasennaUsuario VARCHAR(255)
)
BEGIN
    DECLARE contador INT DEFAULT 0;
    DECLARE idNuevo INT DEFAULT 0;

    SELECT COUNT(*) INTO contador
    FROM Usuario
    WHERE correo = correoUsuario;

    IF contador = 0 THEN
      
        INSERT INTO Usuario (nombre, correo, contrasenna)
        VALUES (nombreUsuario, correoUsuario, contrasennaUsuario);
        SELECT id INTO idNuevo FROM Usuario WHERE id = LAST_INSERT_ID();

        INSERT INTO Negocio (id_usuario, nombre)
        VALUES (idNuevo, 'Mi Negocio');

        SELECT * FROM Usuario WHERE id = idNuevo;
        
    END IF;
END //

DELIMITER ;

--CALL sp_InsertarUsuario('Nombre del Usuario', 'correo@example.com', 'contrasenna123');


DELIMITER //

CREATE PROCEDURE sp_ActualizarUsuario(
    IN idUsuario INT,
    IN nuevoNombre VARCHAR(255),
    IN nuevoCorreo VARCHAR(255),
    IN nuevaContrasenna VARCHAR(255)
)
BEGIN

    DECLARE contador INT DEFAULT 0;

    SELECT COUNT(*) INTO contador
    FROM Usuario
    WHERE correo = nuevoCorreo;

    IF contador = 0 THEN
        UPDATE Usuario
        SET nombre = nuevoNombre, correo = nuevoCorreo, contrasenna = nuevaContrasenna
        WHERE id = idUsuario;
        SELECT * FROM Usuario WHERE id = idUsuario;
        
    END IF;
END //

DELIMITER ;

--CALL sp_ActualizarUsuario(0,'Nombre del Usuario', 'correo@example.com', 'contrasenna123');




----------------------------------------GASTOS-----------------------------------------------------

DELIMITER //

CREATE PROCEDURE sp_InsertarGasto(
    IN usuarioID INT,
    IN gastoFecha DATE,
    IN gastoMonto DECIMAL(10, 2),
    IN gastoTitulo VARCHAR(255),
    IN categoriaID INT,
    IN gastoDescripcion VARCHAR(255)
)
BEGIN
    INSERT INTO Gasto (id_usuario, es_comercio, fecha, monto, titulo, id_categoria, descripcion)
    VALUES (usuarioID, 0, gastoFecha, gastoMonto, gastoTitulo, categoriaID, gastoDescripcion);
END//

DELIMITER ;

--CALL sp_InsertarGasto(1, 1, '2023-11-05', 100.00, 'Ejemplo de Gasto', 2, 'Descripción del Gasto');




DELIMITER //

CREATE PROCEDURE sp_getGastosRecientes(
    IN idUsuario INT,
    IN fechaInicio DATE,
    IN fechaFin DATE
)
BEGIN
    SELECT cg.nombre AS Categoria, SUM(g.monto) AS MontoTotal
    FROM CategoriaGasto cg
    INNER JOIN Gasto g ON cg.id = g.id_categoria
    WHERE g.id_usuario = idUsuario AND cg.eliminado = 0
    AND g.es_comercio = 0 AND cg.es_comercio = 0
    AND g.fecha BETWEEN fechaInicio AND fechaFin
    GROUP BY cg.nombre;
END//

DELIMITER ;

--CALL sp_getGastosRecientes(1, '2023-01-01', '2023-12-31'); 


DELIMITER //

CREATE PROCEDURE sp_CrearCategoriaGastoPersonal(
    IN usuarioID INT,
    IN categoriaNombre VARCHAR(255)
)
BEGIN
    INSERT INTO CategoriaGasto (id_usuario, es_comercio, nombre)
    VALUES (usuarioID, 0, categoriaNombre);
    SELECT * FROM CategoriaGasto WHERE id = LAST_INSERT_ID();
END//

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_getCategoriaGastoPersonal(
    IN usuarioID INT
)
BEGIN
    SELECT * FROM CategoriaGasto
    WHERE id_usuario = usuarioID 
    AND es_comercio = 0 AND eliminado = 0;
END//

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_ActualizarCategoriaGastoPersonal(
    IN categoriaID INT,
    IN nuevoNombre VARCHAR(255)
)
BEGIN
    UPDATE CategoriaGasto
    SET nombre = nuevoNombre
    WHERE id = categoriaID;
    SELECT * FROM CategoriaGasto WHERE id = categoriaID;
END//

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_EliminarCategoriaGastoPersonal(
    IN categoriaID INT
)
BEGIN
    UPDATE CategoriaGasto
    SET eliminado = 1
    WHERE id = categoriaID;
    SELECT * FROM CategoriaGasto WHERE id = categoriaID;
END//

DELIMITER ;




----------------------------------------INGRESOS-----------------------------------------------------


DELIMITER //

CREATE PROCEDURE sp_InsertarIngreso(
    IN usuarioID INT,
    IN ingresoFecha DATE,
    IN ingresoMonto DECIMAL(10, 2),
    IN ingresoTitulo VARCHAR(255),
    IN categoriaID INT,
    IN ingresoDescripcion VARCHAR(255)
)
BEGIN
    INSERT INTO Ingreso (id_usuario, es_comercio, fecha, monto, titulo, id_categoria, descripcion)
    VALUES (usuarioID, 0, ingresoFecha, ingresoMonto, ingresoTitulo, categoriaID, ingresoDescripcion);
END//

DELIMITER ;

--CALL sp_InsertarIngreso(1, 1, '2023-11-05', 100.00, 'Ejemplo de ingreso', 2, 'Descripción del ingreso');




DELIMITER //

CREATE PROCEDURE sp_getIngresosRecientes(
    IN idUsuario INT,
    IN fechaInicio DATE,
    IN fechaFin DATE
)
BEGIN
    SELECT cg.nombre AS Categoria, SUM(g.monto) AS MontoTotal
    FROM CategoriaIngreso cg
    INNER JOIN Ingreso g ON cg.id = g.id_categoria
    WHERE g.id_usuario = idUsuario AND cg.eliminado = 0
    AND g.es_comercio = 0 AND cg.es_comercio = 0
    AND g.fecha BETWEEN fechaInicio AND fechaFin
    GROUP BY cg.nombre;
END//

DELIMITER ;

--CALL sp_getIngresosRecientes(1, '2023-01-01', '2023-12-31'); 


DELIMITER //

CREATE PROCEDURE sp_CrearCategoriaIngresoPersonal(
    IN usuarioID INT,
    IN categoriaNombre VARCHAR(255)
)
BEGIN
    INSERT INTO CategoriaIngreso (id_usuario, es_comercio, nombre)
    VALUES (usuarioID, 0, categoriaNombre);
    SELECT * FROM CategoriaIngreso WHERE id = LAST_INSERT_ID();
END//

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_getCategoriaIngresoPersonal(
    IN usuarioID INT
)
BEGIN
    SELECT * FROM CategoriaIngreso
    WHERE id_usuario = usuarioID 
    AND es_comercio = 0 AND eliminado = 0;
END//

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_ActualizarCategoriaIngresoPersonal(
    IN categoriaID INT,
    IN nuevoNombre VARCHAR(255)
)
BEGIN
    UPDATE CategoriaIngreso
    SET nombre = nuevoNombre
    WHERE id = categoriaID;
    SELECT * FROM CategoriaIngreso WHERE id = categoriaID;
END//

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_EliminarCategoriaIngresoPersonal(
    IN categoriaID INT
)
BEGIN
    UPDATE CategoriaIngreso
    SET eliminado = 1
    WHERE id = categoriaID;
    SELECT * FROM CategoriaIngreso WHERE id = categoriaID;
END//

DELIMITER ;
