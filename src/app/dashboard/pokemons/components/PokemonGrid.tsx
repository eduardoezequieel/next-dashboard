import { SimplePokemon } from '@/app/interfaces';
import { PokemonItem } from './PokemonItem';

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
