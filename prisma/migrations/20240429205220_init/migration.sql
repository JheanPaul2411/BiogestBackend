-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NULL,
    `apellido` VARCHAR(30) NULL,
    `cedula` CHAR(10) NULL,
    `fecha_nacimiento` DATE NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(250) NULL,
    `contacto` VARCHAR(20) NULL,
    `photoUrl` VARCHAR(191) NULL,
    `rol` ENUM('ADMIN', 'PACIENTE', 'DOCTOR') NOT NULL,

    UNIQUE INDEX `Usuario_cedula_key`(`cedula`),
    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cita` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME NOT NULL,
    `pacienteId` INTEGER NULL,
    `motivo` VARCHAR(191) NOT NULL,
    `sintomas` VARCHAR(191) NULL,
    `aceptada` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fichaMedica` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pacienteId` INTEGER NULL,
    `peso` DECIMAL(6, 2) NULL,
    `altura` DECIMAL(6, 2) NULL,
    `presionArterial` VARCHAR(191) NULL,
    `temperatura` DECIMAL(6, 2) NULL,
    `enfermedades` VARCHAR(191) NULL,
    `alergias` VARCHAR(191) NULL,
    `medicamentos` VARCHAR(191) NULL,
    `antecedentesFamiliares` VARCHAR(191) NULL,
    `antecedentesPersonales` VARCHAR(191) NULL,
    `fecha` DATE NULL,
    `observaciones` VARCHAR(191) NULL,
    `diagnostico` VARCHAR(191) NULL,
    `tratamiento` VARCHAR(191) NULL,
    `proximaCita` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fichaMedica` ADD CONSTRAINT `fichaMedica_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
