/*
  Warnings:

  - You are about to drop the `recipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "recipe";

-- CreateTable
CREATE TABLE "recipes" (
    "name" VARCHAR(80),
    "author" VARCHAR(50),
    "servingsnumber" VARCHAR(30),
    "preptime" INTEGER,
    "ingredients" VARCHAR(500),
    "instructions" VARCHAR(500),
    "comment" VARCHAR(500),
    "nutritionfacts" VARCHAR(500),
    "category" VARCHAR(100),
    "recipeid" SERIAL NOT NULL,

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("recipeid")
);
