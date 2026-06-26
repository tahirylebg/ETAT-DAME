/*
  Warnings:

  - A unique constraint covering the columns `[dayOfWeek,service]` on the table `OpeningHour` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Service" AS ENUM ('MIDI', 'SOIR');

-- DropIndex
DROP INDEX "OpeningHour_dayOfWeek_key";

-- AlterTable
ALTER TABLE "OpeningHour" ADD COLUMN     "service" "Service" NOT NULL DEFAULT 'MIDI';

-- CreateIndex
CREATE UNIQUE INDEX "OpeningHour_dayOfWeek_service_key" ON "OpeningHour"("dayOfWeek", "service");
