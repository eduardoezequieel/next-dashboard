'use client';

import { addOne, initCounterState, subtractOne } from '@/store/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);

  return (
    <>
      <span className="text-9xl"> {count} </span>

      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="mr-2 flex w-[100px] items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(subtractOne())}
          className="mr-2 flex w-[100px] items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600"
        >
          -1
        </button>
      </div>
    </>
  );
};
