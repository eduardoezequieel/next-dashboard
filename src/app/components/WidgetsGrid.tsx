'use client';

import { useAppSelector } from '@/store/hooks';
import { SimpleWidget } from './SimpleWidget';

export const WidgetsGrid = () => {
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget title="Contador" label={count.toString()} href="/dashboard/counter" />
    </div>
  );
};
