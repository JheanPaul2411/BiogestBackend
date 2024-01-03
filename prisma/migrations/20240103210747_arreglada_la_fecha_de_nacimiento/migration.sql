/*
  Warnings:

  - You are about to drop the column `edad` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `fecha_nacimiento` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `edad`,
    ADD COLUMN `fecha_nacimiento` DATE NOT NULL;
