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

