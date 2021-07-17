-- CreateTable
CREATE TABLE "Info" (
    "id" TEXT NOT NULL,
    "needHelp" BOOLEAN NOT NULL,
    "contactNumber" INTEGER NOT NULL,
    "food" BOOLEAN NOT NULL,
    "groceries" BOOLEAN NOT NULL,
    "money" BOOLEAN NOT NULL,
    "medical" BOOLEAN NOT NULL,
    "othersNeed" TEXT NOT NULL,
    "others" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Info_userId_unique" ON "Info"("userId");

-- AddForeignKey
ALTER TABLE "Info" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
