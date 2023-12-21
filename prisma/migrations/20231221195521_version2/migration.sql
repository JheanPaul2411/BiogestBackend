/*
  Warnings:

  - You are about to alter the column `fecha` on the `citas` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `citas` ADD COLUMN `doctorId` INTEGER NULL,
    MODIFY `fecha` TIMESTAMP NOT NULL;

-- AddForeignKey
ALTER TABLE `Citas` ADD CONSTRAINT `Citas_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
