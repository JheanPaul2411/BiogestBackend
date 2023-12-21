-- CreateTable
CREATE TABLE `Doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NOT NULL,
    `apellido` VARCHAR(30) NOT NULL,
    `especialidad` VARCHAR(50) NOT NULL,
    `edad` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paciente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NOT NULL,
    `apellido` VARCHAR(30) NOT NULL,
    `cedula` CHAR(10) NOT NULL,
    `edad` INTEGER NOT NULL,
    `tipo_de_sangre` VARCHAR(4) NOT NULL,
    `historialMedicoId` INTEGER NULL,

    UNIQUE INDEX `Paciente_cedula_key`(`cedula`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistorialMedico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FichaMedica` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `peso` FLOAT NOT NULL,
    `estatura` FLOAT NOT NULL,
    `presion_arterial` VARCHAR(5) NOT NULL,
    `pacienteId` INTEGER NOT NULL,
    `historialMedicoId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Citas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pacienteId` INTEGER NOT NULL,
    `fecha` TIMESTAMP NOT NULL,
    `motivo_consulta` VARCHAR(150) NOT NULL,
    `observaciones` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FichaMedica` ADD CONSTRAINT `FichaMedica_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `Paciente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FichaMedica` ADD CONSTRAINT `FichaMedica_historialMedicoId_fkey` FOREIGN KEY (`historialMedicoId`) REFERENCES `HistorialMedico`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Citas` ADD CONSTRAINT `Citas_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `Paciente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
