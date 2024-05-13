-- CreateTable
CREATE TABLE "equipos" (
    "id_equipo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,

    CONSTRAINT "equipos_pkey" PRIMARY KEY ("id_equipo")
);

-- CreateTable
CREATE TABLE "estadios" (
    "id_estadio" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,

    CONSTRAINT "estadios_pkey" PRIMARY KEY ("id_estadio")
);

-- CreateTable
CREATE TABLE "jugadores" (
    "id_jugador" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "posicion" TEXT NOT NULL,

    CONSTRAINT "jugadores_pkey" PRIMARY KEY ("id_jugador")
);

-- CreateTable
CREATE TABLE "jugadorequipo" (
    "id" SERIAL NOT NULL,
    "equipoId" INTEGER NOT NULL,
    "jugadorId" INTEGER NOT NULL,

    CONSTRAINT "jugadorequipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partidos" (
    "id_partido" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "resultado_local" INTEGER NOT NULL,
    "resultado_visitante" INTEGER NOT NULL,
    "estadioId" INTEGER NOT NULL,
    "equipoIdLocal" INTEGER NOT NULL,
    "equipoIdVisitante" INTEGER NOT NULL,

    CONSTRAINT "partidos_pkey" PRIMARY KEY ("id_partido")
);

-- CreateIndex
CREATE UNIQUE INDEX "equipos_nombre_key" ON "equipos"("nombre");

-- AddForeignKey
ALTER TABLE "jugadorequipo" ADD CONSTRAINT "jugadorequipo_equipoId_fkey" FOREIGN KEY ("equipoId") REFERENCES "equipos"("id_equipo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jugadorequipo" ADD CONSTRAINT "jugadorequipo_jugadorId_fkey" FOREIGN KEY ("jugadorId") REFERENCES "jugadores"("id_jugador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "partidos" ADD CONSTRAINT "partidos_estadioId_fkey" FOREIGN KEY ("estadioId") REFERENCES "estadios"("id_estadio") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "partidos" ADD CONSTRAINT "partidos_equipoIdLocal_fkey" FOREIGN KEY ("equipoIdLocal") REFERENCES "equipos"("id_equipo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "partidos" ADD CONSTRAINT "partidos_equipoIdVisitante_fkey" FOREIGN KEY ("equipoIdVisitante") REFERENCES "equipos"("id_equipo") ON DELETE RESTRICT ON UPDATE CASCADE;
