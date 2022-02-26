-- CreateTable
CREATE TABLE "users" (
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "modules" (
    "modules_id" TEXT NOT NULL,
    "number" TEXT NOT NULL,

    CONSTRAINT "modules_pkey" PRIMARY KEY ("modules_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");
