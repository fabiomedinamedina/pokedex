'use client';

import { useState } from 'react';

interface Props {
  value?: number
}

export const CartCounter = ({ value = 0 }: Props) => {

  const [counter, setCounter] = useState(value);

  return (
    <>
      <span className="text-9xl font-extrabold">{counter}</span>

      <div className="flex gap-2">
        <button
          onClick={() => setCounter( counter - 1 )}
          className="flex items-center justify-center p-2 rounded-xl bg-red-normal text-white hover:bg-yellow-normal transition-all, w-[100px]">
          -1
        </button>
        <button
          onClick={() => setCounter( counter + 1 )}
          className="flex items-center justify-center p-2 rounded-xl bg-red-normal text-white hover:bg-yellow-normal transition-all, w-[100px]">
          +1
        </button>
      </div>
    </>
  )
}