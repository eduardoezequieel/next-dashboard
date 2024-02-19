import { getPokemons } from '../utils';
import { PokemonGrid } from './components';

const PokemonPage = async () => {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="my-2 text-5xl">
        Listado de Pokemons <small>estatico</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};
export default PokemonPage;
