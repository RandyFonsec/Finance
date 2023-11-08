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




----------------------------------------NEGOCIO-----------------------------------------------------




DELIMITER //
CREATE PROCEDURE sp_getNegocio(IN usuarioID INT)
BEGIN
    SELECT * FROM Negocio WHERE id_usuario = usuarioID;
END;
//
DELIMITER ;

--CALL sp_getNegocio(1);

DELIMITER //
CREATE PROCEDURE sp_ActualizarNegocio(
    IN usuarioID INT, 
    IN nuevoNombre VARCHAR(255))
BEGIN
    UPDATE Negocio SET nombre = nuevoNombre WHERE id_usuario = usuarioID;
END;
//
DELIMITER ;

--CALL sp_ActualizarNegocio(1, 'Nuevo Nombre');

DELIMITER //
CREATE PROCEDURE sp_CrearImpuesto(
    IN negocioID INT, 
    IN nombreImpuesto VARCHAR(255), 
    IN tasaImpuesto DECIMAL(5, 2))
BEGIN
    INSERT INTO Impuesto (id_negocio, nombre, tasa) 
    VALUES (negocioID, nombreImpuesto, tasaImpuesto);
END;
//
DELIMITER ;
--CALL sp_CrearImpuesto(1, 'Impuesto 1', 10.50); 


DELIMITER //
CREATE PROCEDURE sp_getImpuestos(IN negocioID INT)
BEGIN
    SELECT * FROM Impuesto WHERE id_negocio = negocioID;
END;
//
DELIMITER ;
--CALL sp_getImpuestos(1); 


DELIMITER //
CREATE PROCEDURE sp_ActualizarImpuesto(
    IN impuestoID INT, 
    IN nuevoNombre VARCHAR(255), 
    IN nuevaTasa DECIMAL(5, 2))
BEGIN
    UPDATE Impuesto 
    SET nombre = nuevoNombre, tasa = nuevaTasa 
    WHERE id = impuestoID;
END;
//
DELIMITER ;
--CALL sp_ActualizarImpuesto(1, 'Nuevo Nombre', 15.75); 


DELIMITER //
CREATE PROCEDURE sp_EliminarImpuesto(IN impuestoID INT)
BEGIN
    DELETE FROM Impuesto WHERE id = impuestoID;
END;
//
DELIMITER ;

--CALL sp_EliminarImpuesto(1); 
DELIMITER //
CREATE PROCEDURE sp_CrearCategoriaIngresoNegocio(
    IN usuarioID INT,
    IN categoriaNombre VARCHAR(255)
)
BEGIN
    INSERT INTO CategoriaIngreso (id_usuario, es_comercio, nombre)
    VALUES (usuarioID, 1, categoriaNombre);
    SELECT * FROM CategoriaIngreso WHERE id = LAST_INSERT_ID();
END//

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_getCategoriaIngresoNegocio(
    IN usuarioID INT
)
BEGIN
    SELECT * FROM CategoriaIngreso
    WHERE id_usuario = usuarioID 
    AND es_comercio = 1 AND eliminado = 0;
END//

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_ActualizarCategoriaIngresoNegocio(
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

CREATE PROCEDURE sp_EliminarCategoriaIngresoNegocio(
    IN categoriaID INT
)
BEGIN
    UPDATE CategoriaIngreso
    SET eliminado = 1
    WHERE id = categoriaID;
    SELECT * FROM CategoriaIngreso WHERE id = categoriaID;
END//

DELIMITER ;



CREATE PROCEDURE sp_CrearCategoriaGastoNegocio(
    IN usuarioID INT,
    IN categoriaNombre VARCHAR(255)
)
BEGIN
    INSERT INTO CategoriaGasto (id_usuario, es_comercio, nombre)
    VALUES (usuarioID, 1, categoriaNombre);
    SELECT * FROM CategoriaGasto WHERE id = LAST_INSERT_ID();
END//

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_getCategoriaGastoNegocio(
    IN usuarioID INT
)
BEGIN
    SELECT * FROM CategoriaGasto
    WHERE id_usuario = usuarioID 
    AND es_comercio = 1 AND eliminado = 0;
END//

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_ActualizarCategoriaGastoNegocio(
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

CREATE PROCEDURE sp_EliminarCategoriaGastoNegocio(
    IN categoriaID INT
)
BEGIN
    UPDATE CategoriaGasto
    SET eliminado = 1
    WHERE id = categoriaID;
    SELECT * FROM CategoriaGasto WHERE id = categoriaID;
END//

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_InsertarIngresoNegocio(
    IN usuarioID INT,
    IN ingresoFecha DATE,
    IN ingresoMonto DECIMAL(10, 2),
    IN ingresoTitulo VARCHAR(255),
    IN categoriaID INT,
    IN ingresoDescripcion VARCHAR(255)
)
BEGIN
    INSERT INTO Ingreso (id_usuario, es_comercio, fecha, monto, titulo, id_categoria, descripcion)
    VALUES (usuarioID, 1, ingresoFecha, ingresoMonto, ingresoTitulo, categoriaID, ingresoDescripcion);
END//

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_InsertarGastoNegocio(
    IN usuarioID INT,
    IN gastoFecha DATE,
    IN gastoMonto DECIMAL(10, 2),
    IN gastoTitulo VARCHAR(255),
    IN categoriaID INT,
    IN gastoDescripcion VARCHAR(255)
)
BEGIN
    INSERT INTO Gasto (id_usuario, es_comercio, fecha, monto, titulo, id_categoria, descripcion)
    VALUES (usuarioID, 1, gastoFecha, gastoMonto, gastoTitulo, categoriaID, gastoDescripcion);
END//

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_getBalanceImpuestos(
    IN idUsuario INT,
    IN fechaInicio DATE,
    IN fechaFin DATE
)
BEGIN
    DECLARE ingresos INT DEFAULT 0;

    SELECT SUM(monto) INTO ingresos
    FROM Ingreso
    WHERE id_usuario = idUsuario
    AND es_comercio = 1 
    AND fecha BETWEEN fechaInicio AND fechaFin;

    SELECT i.nombre AS Impuesto, i.tasa * ingresos AS Monto
    FROM Impuesto i
    INNER JOIN Negocio n ON n.id = i.id_negocio
    WHERE n.id_usuario = idUsuario;


END//

DELIMITER ;

--CALL sp_getBalanceImpuestos(1, '2023-01-01', '2023-12-31'); 

DELIMITER //
CREATE PROCEDURE sp_getGastos(IN usuarioID INT)
BEGIN
    SELECT * FROM Gasto 
    WHERE id_usuario = usuarioID AND es_comercio = 1;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_getIngresos(IN usuarioID INT)
BEGIN
    SELECT * FROM Ingreso 
    WHERE id_usuario = usuarioID AND es_comercio = 1;
END;
//
DELIMITER ;



----------------------------------------REPORTES-----------------------------------------------------



DELIMITER //
DROP PROCEDURE IF EXISTS sp_primerReporteIngresos;
CREATE PROCEDURE sp_primerReporteIngresos(
    IN idUsuario INT,
    IN es_negocio INT,
    IN fechaInicio DATE,
    IN fechaFin DATE
)
BEGIN
    DECLARE currentDate DATE;
    DECLARE totalMonto DECIMAL(10, 2) DEFAULT 0;
    DECLARE done INT DEFAULT 0;

    CREATE TEMPORARY TABLE TempResultados (
        Mes INT,
        Anio INT,
        MontoTotal DECIMAL(10, 2)
    );

    SET currentDate = fechaInicio;

    REPEAT
        SET @mes = MONTH(currentDate);
        SET @anio = YEAR(currentDate);

        SELECT SUM(monto) INTO totalMonto
        FROM Ingreso
        WHERE id_usuario = idUsuario
        AND es_comercio = es_negocio
        AND MONTH(fecha) = MONTH(currentDate);

        INSERT INTO TempResultados (Mes, Anio, MontoTotal)
        VALUES (@mes, @anio, COALESCE(totalMonto, 0));

        SET currentDate = DATE_ADD(currentDate, INTERVAL 1 MONTH);

        IF MONTH(currentDate) > MONTH(fechaFin) THEN
            SET done = 1;
        END IF;

    UNTIL done = 1 END REPEAT;

    SELECT * FROM TempResultados;

    DROP TEMPORARY TABLE IF EXISTS TempResultados;
END //

DELIMITER ;

--CALL sp_primerReporteIngresos(1,0, '2023-01-02','2023-11-05');


DELIMITER //
CREATE PROCEDURE sp_segundoReporteIngresos(
    IN p_idUsuario INT,
    IN p_es_comercio INT,
    IN p_fecha DATE
)
BEGIN
    DECLARE currentDay DATE;
    DECLARE totalMonto DECIMAL(10, 2) DEFAULT 0;
    DECLARE done INT DEFAULT 0;

    CREATE TEMPORARY TABLE TempResultados (
        Dia INT,
        MontoTotal DECIMAL(10, 2)
    );

    SET currentDay = DATE_FORMAT(p_fecha, '%Y-%m-01');

    REPEAT
        SET @dia = DAY(currentDay);

        SELECT SUM(monto) INTO totalMonto
        FROM Ingreso
        WHERE id_usuario = p_idUsuario
        AND es_comercio = p_es_comercio
        AND fecha = currentDay;

        INSERT INTO TempResultados (Dia, MontoTotal)
        VALUES (@dia, COALESCE(totalMonto, 0));

        SET currentDay = DATE_ADD(currentDay, INTERVAL 1 DAY);

        IF MONTH(currentDay) != MONTH(p_fecha) THEN
            SET done = 1;
        END IF;

    UNTIL done = 1 END REPEAT;

    SELECT * FROM TempResultados;

    DROP TEMPORARY TABLE IF EXISTS TempResultados;
END //

DELIMITER ;

--CALL sp_segundoReporteIngresos(1,0, '2023-11-25');



DELIMITER //
DROP PROCEDURE IF EXISTS sp_primerReporteGastos;
CREATE PROCEDURE sp_primerReporteGastos(
    IN idUsuario INT,
    IN es_negocio INT,
    IN fechaInicio DATE,
    IN fechaFin DATE
)
BEGIN
    DECLARE currentDate DATE;
    DECLARE totalMonto DECIMAL(10, 2) DEFAULT 0;
    DECLARE done INT DEFAULT 0;

    CREATE TEMPORARY TABLE TempResultados (
        Mes INT,
        Anio INT,
        MontoTotal DECIMAL(10, 2)
    );

    SET currentDate = fechaInicio;

    REPEAT
        SET @mes = MONTH(currentDate);
        SET @anio = YEAR(currentDate);

        SELECT SUM(monto) INTO totalMonto
        FROM Gasto
        WHERE id_usuario = idUsuario
        AND es_comercio = es_negocio
        AND MONTH(fecha) = MONTH(currentDate);

        INSERT INTO TempResultados (Mes, Anio, MontoTotal)
        VALUES (@mes, @anio, COALESCE(totalMonto, 0));

        SET currentDate = DATE_ADD(currentDate, INTERVAL 1 MONTH);

        IF MONTH(currentDate) > MONTH(fechaFin) THEN
            SET done = 1;
        END IF;

    UNTIL done = 1 END REPEAT;

    SELECT * FROM TempResultados;

    DROP TEMPORARY TABLE IF EXISTS TempResultados;
END //

DELIMITER ;

--CALL sp_primerReporteGastos(1,0, '2023-01-02','2023-11-05');


DELIMITER //
CREATE PROCEDURE sp_segundoReporteGastos(
    IN p_idUsuario INT,
    IN p_es_comercio INT,
    IN p_fecha DATE
)
BEGIN
    DECLARE currentDay DATE;
    DECLARE totalMonto DECIMAL(10, 2) DEFAULT 0;
    DECLARE done INT DEFAULT 0;

    CREATE TEMPORARY TABLE TempResultados (
        Dia INT,
        MontoTotal DECIMAL(10, 2)
    );

    SET currentDay = DATE_FORMAT(p_fecha, '%Y-%m-01');

    REPEAT
        SET @dia = DAY(currentDay);

        SELECT SUM(monto) INTO totalMonto
        FROM Gasto
        WHERE id_usuario = p_idUsuario
        AND es_comercio = p_es_comercio
        AND fecha = currentDay;

        INSERT INTO TempResultados (Dia, MontoTotal)
        VALUES (@dia, COALESCE(totalMonto, 0));

        SET currentDay = DATE_ADD(currentDay, INTERVAL 1 DAY);

        IF MONTH(currentDay) != MONTH(p_fecha) THEN
            SET done = 1;
        END IF;

    UNTIL done = 1 END REPEAT;

    SELECT * FROM TempResultados;

    DROP TEMPORARY TABLE IF EXISTS TempResultados;
END //

DELIMITER ;

--CALL sp_segundoReporteGastos(1,0, '2023-11-25');
