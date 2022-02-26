-- CreateTable
CREATE TABLE "Verbs" (
    "verb_id" TEXT NOT NULL,
    "id_module_from" TEXT NOT NULL,

    CONSTRAINT "Verbs_pkey" PRIMARY KEY ("verb_id")
);

-- AddForeignKey
ALTER TABLE "Verbs" ADD CONSTRAINT "Verbs_id_module_from_fkey" FOREIGN KEY ("id_module_from") REFERENCES "modules"("modules_id") ON DELETE RESTRICT ON UPDATE CASCADE;
