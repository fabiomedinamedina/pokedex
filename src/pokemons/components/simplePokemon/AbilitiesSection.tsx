import { Ability } from "@/pokemons/interfaces/pokemon";

interface Props {
  abilities: Ability[];
}

export const AbilitiesSection = ({ abilities }: Props) => {

  const moveAbilites = abilities.slice(0, 6).map(ability => ability.ability.name);


  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold mb-2">Abilities</h2>
      <div className="flex flex-wrap bg-gray-200 px-1 py-2 rounded-lg divide-x divide-gray-300 w-fit">
        {moveAbilites.map((ability) => (
          <span
            key={ability}
            className="px-3"
          >
            {ability}
          </span>
        ))}
      </div>
    </div>
  );
};