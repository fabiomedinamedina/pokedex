import { Move } from "@/pokemons/interfaces/pokemon";

interface Props {
  moves: Move[];
}

export const MovesSection = ({ moves }: Props) => {

  const moveNames = moves.slice(0, 6).map(move => move.move.name);


  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold mb-2">Main Moves</h2>
      <div className="flex flex-wrap bg-gray-200 px-1 py-2 rounded-lg divide-x divide-gray-300 w-fit">
        {moveNames.map((move) => (
          <span
            key={move}
            className="px-3"
          >
            {move}
          </span>
        ))}
      </div>
    </div>
  );
};