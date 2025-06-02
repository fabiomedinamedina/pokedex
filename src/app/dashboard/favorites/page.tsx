
import { HeroTitleSection } from "@/components";
import { FavoritesPokemons } from "@/pokemons";


export const metadata = {
  title: 'Pokemons Favoritos | Pokédex [Curso NextJS - Fabio Medina]',
  description: 'Accede a toda la información de cada Pokémon, de forma clara y sin complicaciones.',
};

export default function FavoritesPokemonsPage() {

  return (
    <div className="px-12 py-6">
      <HeroTitleSection
        image="bg-pokemon-page-alt.jpg"
        title="Mis Favoritos"
        description="Guarda y organiza los Pokémon que más te gustan. Crea tu equipo personal y accede rápidamente a tus compañeros preferidos."
      />
      <div className="flex flex-col">
        <FavoritesPokemons />
      </div>
    </div>
  );
}