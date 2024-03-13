'use client';

import { useAppSelector } from '@/store/hooks';
import { PokemonItem } from '../../pokemons/components';
import { useEffect, useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoriteGrid = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemon.favorites);
  const [pokemons, setPokemons] = useState(Object.values(favoritePokemons));

  useEffect(() => {
    setPokemons(Object.values(favoritePokemons));
  }, [favoritePokemons]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {pokemons.length === 0 && <NoFavorites />}
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

const NoFavorites = () => {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
