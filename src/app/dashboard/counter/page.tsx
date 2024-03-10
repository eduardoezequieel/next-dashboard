import { CartCounter } from '@/app/shopping-cart';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Un simple contador',
};

interface CounterResponse {
  count: number;
}

const getCounter = async (): Promise<CounterResponse> => {
  const counter = await fetch('http://localhost:3000/api/counter').then((res) => res.json());
  return counter;
};

export default async function CounterPage() {
  const { count } = await getCounter();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <span>Productos en el carrito</span>
      <CartCounter value={count} />
    </div>
  );
}
