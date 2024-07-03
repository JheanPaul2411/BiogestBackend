/*
  Warnings:

  - You are about to alter the column `fecha` on the `cita` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `cita` MODIFY `fecha` DATETIME NOT NULL;
