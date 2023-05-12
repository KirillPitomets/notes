-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "dateOfCreated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
