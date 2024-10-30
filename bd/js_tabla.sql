CREATE TABLE propiedades (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL,
    foto VARCHAR(100) NOT NULL,
    foto_blob BLOB,
    disponible TINYINT(1) DEFAULT 1
);
