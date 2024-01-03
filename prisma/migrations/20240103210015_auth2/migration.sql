/*
  Warnings:

  - You are about to drop the column `doctorId` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `pacienteId` on the `usuario` table. All the data in the column will be lost.
  - You are about to alter the column `rol` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to drop the `citas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doctor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fichamedica` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historialmedico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paciente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `citas` DROP FOREIGN KEY `Citas_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `citas` DROP FOREIGN KEY `Citas_pacienteId_fkey`;

-- DropForeignKey
ALTER TABLE `fichamedica` DROP FOREIGN KEY `FichaMedica_historialMedicoId_fkey`;

-- DropForeignKey
ALTER TABLE `fichamedica` DROP FOREIGN KEY `FichaMedica_pacienteId_fkey`;

-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `Usuario_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `Usuario_pacienteId_fkey`;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `doctorId`,
    DROP COLUMN `pacienteId`,
    MODIFY `password` VARCHAR(250) NOT NULL,
    MODIFY `rol` ENUM('ADMIN', 'PACIENTE', 'DOCTOR') NOT NULL;

-- DropTable
DROP TABLE `citas`;

-- DropTable
DROP TABLE `doctor`;

-- DropTable
DROP TABLE `fichamedica`;

-- DropTable
DROP TABLE `historialmedico`;

-- DropTable
DROP TABLE `paciente`;
