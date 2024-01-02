/*
  Warnings:

  - You are about to alter the column `fecha` on the `citas` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to drop the column `apellido` on the `paciente` table. All the data in the column will be lost.
  - You are about to drop the column `cedula` on the `paciente` table. All the data in the column will be lost.
  - You are about to drop the column `edad` on the `paciente` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `paciente` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Paciente_cedula_key` ON `paciente`;

-- AlterTable
ALTER TABLE `citas` MODIFY `fecha` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `paciente` DROP COLUMN `apellido`,
    DROP COLUMN `cedula`,
    DROP COLUMN `edad`,
    DROP COLUMN `nombre`;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NOT NULL,
    `apellido` VARCHAR(30) NOT NULL,
    `cedula` CHAR(10) NOT NULL,
    `edad` INTEGER NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `contacto` VARCHAR(20) NOT NULL,
    `rol` VARCHAR(191) NOT NULL,
    `pacienteId` INTEGER NULL,
    `doctorId` INTEGER NULL,

    UNIQUE INDEX `Usuario_cedula_key`(`cedula`),
    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `Paciente`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
