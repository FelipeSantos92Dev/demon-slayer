-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "age" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "birthday" TEXT NOT NULL DEFAULT 'Desconhecido',
ADD COLUMN     "combat_style" TEXT NOT NULL DEFAULT 'Desconhecido',
ADD COLUMN     "gender" TEXT NOT NULL DEFAULT 'Desconhecido',
ADD COLUMN     "race" TEXT NOT NULL DEFAULT 'Desconhecido',
ADD COLUMN     "title" TEXT NOT NULL DEFAULT 'Desconhecido';
