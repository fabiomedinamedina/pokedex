import Image from "next/image";

import { WidgetsGrid } from "@/components";


export const metadata = {
  title: 'Dashboard | Pokédex [Curso NextJS - Fabio Medina]',
  description: 'Dashboard Pokédex donde se encuentran las estadísticas states del gestor de estado',
};

export default function MainPage() {
  return (
    <div className="flex flex-col w-full h-full p-10">
      <div className="flex flex-col items-center justify-between mb-6">
        <Image
          src={"/logo-pokedex-color.svg"}
          alt="Pokédex Logo"
          width={350}
          height={80}
        />
        <h1 className="text-3xl hidden">Mi Pokédex</h1>
        <p className="text-xl">Explora tus estadísticas y descubrimientos Pokémon</p>
      </div>
      <WidgetsGrid />
    </div>
  );
}