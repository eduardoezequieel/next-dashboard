import { Metadata } from 'next';
import { PokemonGrid } from '../pokemons/components';
import { getPokemons } from '../utils';

export const metadata: Metadata = {
  title: 'Pokemons favoritos',
  description: 'Listado de pokemons favoritos',
};

const FavoritesPage = async () => {
  return (
    <div className="flex flex-col">
      <span className="my-2 text-5xl">
        Listado de Pokemons Favoritos <small>estatico</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
};
export default FavoritesPage;
