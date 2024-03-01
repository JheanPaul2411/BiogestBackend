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

-- CreateTable
CREATE TABLE `Cita` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATE NOT NULL,
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
    `peso` DOUBLE NULL,
    `altura` DOUBLE NULL,
    `presionArterial` VARCHAR(191) NULL,
    `temperatura` DOUBLE NULL,
    `enfermedades` VARCHAR(191) NULL,
    `alergias` VARCHAR(191) NULL,
    `medicamentos` VARCHAR(191) NULL,
    `antecedentesFamiliares` VARCHAR(191) NULL,
    `antecedentesPersonales` VARCHAR(191) NULL,
    `fecha` DATE NULL,
    `hora` TIME NULL,
    `observaciones` VARCHAR(191) NULL,
    `diagnostico` VARCHAR(191) NULL,
    `tratamiento` VARCHAR(191) NULL,
    `proximaCita` DATE NULL,
    `proximaCitaHora` TIME NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fichaMedica` ADD CONSTRAINT `fichaMedica_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
