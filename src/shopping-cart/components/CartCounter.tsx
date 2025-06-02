'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initiCounterState, resetCount, substractOne } from '@/store/counter/counterSlice';
import { useEffect } from 'react';

interface Props {
  value?: number
}

interface CounterResponse {
  count: number;
}

const getAPICounter = async (): Promise<CounterResponse> => {
  const data: CounterResponse = await fetch('/api/counter', {
    next: {
      revalidate: 60,
    },
  }).then(res => res.json());
  return data;
}


export const CartCounter = ({ value = 0 }: Props) => {

  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAPICounter()
      .then(({ count }) => dispatch(initiCounterState(count)));
  }, [dispatch]);


  return (
    <>
      <span className="text-9xl font-extrabold">{count}</span>

      <div className="flex gap-2">
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-red-normal text-white hover:bg-yellow-normal transition-all, w-[100px]">
          -1
        </button>
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-red-normal text-white hover:bg-yellow-normal transition-all, w-[100px]">
          +1
        </button>
      </div>
    </>
  )
}