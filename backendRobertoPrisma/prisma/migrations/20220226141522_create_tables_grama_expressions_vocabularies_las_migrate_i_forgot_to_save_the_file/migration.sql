/*
  Warnings:

  - You are about to drop the `Verbs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Verbs" DROP CONSTRAINT "Verbs_id_module_from_fkey";

-- DropTable
DROP TABLE "Verbs";

-- CreateTable
CREATE TABLE "verbs" (
    "verb_id" TEXT NOT NULL,
    "id_module_from" TEXT NOT NULL,
    "portuguese" TEXT NOT NULL,
    "spanish" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verbs_pkey" PRIMARY KEY ("verb_id")
);

-- CreateTable
CREATE TABLE "vocabularies" (
    "verb_id" TEXT NOT NULL,
    "id_module_from" TEXT NOT NULL,
    "portuguese" TEXT NOT NULL,
    "spanish" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vocabularies_pkey" PRIMARY KEY ("verb_id")
);

-- CreateTable
CREATE TABLE "expressions" (
    "verb_id" TEXT NOT NULL,
    "id_module_from" TEXT NOT NULL,
    "portuguese" TEXT NOT NULL,
    "spanish" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "expressions_pkey" PRIMARY KEY ("verb_id")
);

-- CreateTable
CREATE TABLE "grammas" (
    "verb_id" TEXT NOT NULL,
    "id_module_from" TEXT NOT NULL,
    "portuguese" TEXT NOT NULL,
    "spanish" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "grammas_pkey" PRIMARY KEY ("verb_id")
);

-- AddForeignKey
ALTER TABLE "verbs" ADD CONSTRAINT "verbs_id_module_from_fkey" FOREIGN KEY ("id_module_from") REFERENCES "modules"("modules_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocabularies" ADD CONSTRAINT "vocabularies_id_module_from_fkey" FOREIGN KEY ("id_module_from") REFERENCES "modules"("modules_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expressions" ADD CONSTRAINT "expressions_id_module_from_fkey" FOREIGN KEY ("id_module_from") REFERENCES "modules"("modules_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grammas" ADD CONSTRAINT "grammas_id_module_from_fkey" FOREIGN KEY ("id_module_from") REFERENCES "modules"("modules_id") ON DELETE RESTRICT ON UPDATE CASCADE;
