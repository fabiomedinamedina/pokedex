import { Stat, Type } from '../../interfaces/pokemon';

interface Props {
  stats: Stat[];
  type: Type;
}

const getStatName = (statName: string) => {
  const statNames: { [key: string]: string } = {
    'hp': 'HP',
    'attack': 'Attack',
    'defense': 'Defense',
    'special-attack': 'Special Attack',
    'special-defense': 'Special Defense',
    'speed': 'Speed'
  };
  return statNames[statName] || statName;
};

const getStatPercentage = (baseStat: number) => {
  // Considerando que el máximo de stats base es 255
  return Math.min((baseStat / 255) * 100, 100);
};

export const StatsSection = ({ stats, type }: Props) => {

  const bgColorClass = `pokemon-${type.type.name}`;


  return (
    <div className="flex flex-col w-full gap-3 mt-2 text-gray-600">
      {stats.map((stat) => (
        <div key={stat.stat.name} className="flex flex-col">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">{getStatName(stat.stat.name)}</span>
            <span className="text-sm font-medium">{stat.base_stat}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className={`${bgColorClass} h-4 rounded-full`}
              style={{ width: `${getStatPercentage(stat.base_stat)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}; 