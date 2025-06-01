import { SimpleWidget } from "@/components";
import Image from "next/image";
import { CiCalculator2 } from "react-icons/ci";

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
      <div className="flex flex-col items-center justify-center">
        <SimpleWidget
          title="Contador"
          description="Estado del contador"
          value={25}
          link="/dashboard/counter"
          icon={<CiCalculator2 size={30} />}
        />
      </div>
    </div>
  );
}