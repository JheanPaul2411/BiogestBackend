-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NOT NULL,
    `apellido` VARCHAR(30) NOT NULL,
    `cedula` CHAR(10) NOT NULL,
    `fecha_nacimiento` DATE NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(250) NOT NULL,
    `contacto` VARCHAR(20) NOT NULL,
    `rol` ENUM('ADMIN', 'PACIENTE', 'DOCTOR') NOT NULL,

    UNIQUE INDEX `Usuario_cedula_key`(`cedula`),
    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
