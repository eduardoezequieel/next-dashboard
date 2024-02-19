import { PokemonsResponse, SimplePokemon } from '@/app/interfaces';

export const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const pokemonResponse: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons: SimplePokemon[] = pokemonResponse.results.map((pokemon) => {
    return {
      id: pokemon.url.split('/')[6],
      name: pokemon.name,
    };
  });

  return pokemons;
};
