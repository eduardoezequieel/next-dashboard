import { Metadata } from 'next';
import { PokemonGrid } from '../pokemons/components';
import { getPokemons } from '../utils';
import { FavoriteGrid } from './components';
import { IoHeartOutline } from 'react-icons/io5';

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
      <FavoriteGrid />
    </div>
  );
};

export default FavoritesPage;
