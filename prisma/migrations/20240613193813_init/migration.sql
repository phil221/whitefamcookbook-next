-- CreateTable
CREATE TABLE "recipe" (
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

    CONSTRAINT "recipe_pkey" PRIMARY KEY ("recipeid")
);
