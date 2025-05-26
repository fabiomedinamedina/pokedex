import { Sprites } from "@/pokemons/interfaces/pokemon";
import Image from "next/image";

interface Props {
  sprites: Sprites;
}

export const SpritesSection = ({ sprites }: Props) => {
  return (
    <div className="flex flex-col w-full rounded-[10px] border-[1px] border-gray-300 bg-clip-border shadow-v shadow-gray-300 p-5">
      <h2 className="text-2xl font-bold mb-2">Sprites</h2>
      <div className="flex flex-row gap-2 flex-wrap items-center justify-center">
        <Image
          alt={`Sprite de Pokemon`}
          width={100}
          height={100}
          src={`${sprites.back_default}`}
        />
        <Image
          alt={`Sprite de Pokemon`}
          width={100}
          height={100}
          src={`${sprites.front_default}`}
        />
        <Image
          alt={`Sprite de Pokemon`}
          width={100}
          height={100}
          src={`${sprites.back_shiny}`}
        />
        <Image
          alt={`Sprite de Pokemon`}
          width={100}
          height={100}
          src={`${sprites.front_shiny}`}
        />
      </div>
    </div>
  )
}