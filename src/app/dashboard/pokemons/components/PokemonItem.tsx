import { SimplePokemon } from '@/app/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { IoHeartOutline } from 'react-icons/io5';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonItem = ({ pokemon }: Props) => {
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
          <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">No es favorito</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
