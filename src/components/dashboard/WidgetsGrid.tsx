'use client';

import { CiCalculator2 } from "react-icons/ci"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {

  const isCart = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-col items-center justify-center">
      <SimpleWidget
        title="Contador"
        description="Estado del contador"
        value={isCart}
        link="/dashboard/counter"
        icon={<CiCalculator2 size={30} />}
      />
    </div>
  )
}