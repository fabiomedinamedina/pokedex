import { Type } from "@/pokemons/interfaces/pokemon";
import { PokemonSpecies } from "@/pokemons/interfaces/pokemon-species";


interface Props {
  species: PokemonSpecies;
  type: Type;
}

export const InformationSection = ({ species, type }: Props) => {
  const getSpanishDescription = () => {
    const spanishEntry = species.flavor_text_entries.find(
      entry => entry.language.name === 'en'
    );
    return spanishEntry?.flavor_text.replace(/\\f/g, ' ') || 'No hay descripción disponible en español.';
  };

  const getSpanishGenus = () => {
    const spanishGenus = species.genera.find(
      genus => genus.language.name === 'en'
    );
    return spanishGenus?.genus || 'Pokémon';
  };

  const bgColorClass = `pokemon-${type.type.name}`;

  return (
    <div className="flex flex-col gap-4 text-gray-600">
      <div className="flex flex-col gap-2">
        <p className="text-lg leading-relaxed">{getSpanishDescription()}</p>
      </div>
      {/* <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold mb-2">Category</h3>
        <p className="text-base bg-gray-200 px-4 py-2 rounded-lg divide-x divide-gray-300 w-fit">{getSpanishGenus()}</p>
      </div> */}
    </div>
  );
}; 