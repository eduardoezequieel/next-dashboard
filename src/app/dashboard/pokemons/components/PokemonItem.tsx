'use client';

import { SimplePokemon } from '@/app/interfaces';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleFavorite } from '@/store/pokemon/pokemonSlice';
import Image from 'next/image';
import Link from 'next/link';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonItem = ({ pokemon }: Props) => {
  const isFavorite = useAppSelector((state) => !!state.pokemon[pokemon.id]);
  const dispatch = useAppDispatch();

  return (
    <div className="right-0 mx-auto mt-2 w-60">
      <div className="overflow-hidden rounded bg-white shadow-lg">
        <div className="flex flex-col items-center justify-center border-b bg-gray-800 p-4 text-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            width={100}
            height={100}
            alt={pokemon.name}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold capitalize text-gray-50">{pokemon.name}</p>
          <div className="mt-5">
            <Link
              href={`dashboard/pokemons/${pokemon.name}`}
              className="rounded-full border px-4 py-2 text-xs font-semibold text-gray-100"
            >
              Mas información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100"
            onClick={() => dispatch(toggleFavorite(pokemon))}
          >
            <div className="text-red-600">{isFavorite ? <IoHeart /> : <IoHeartOutline />}</div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">
                {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
