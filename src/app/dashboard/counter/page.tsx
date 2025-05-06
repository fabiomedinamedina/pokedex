import { CartCounter } from "@/shopping-cart";


export const metadata = {
  title: 'Shopping Cart',
  description: 'Counter Shopping Cart',
};

export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-2xl">Productos en el carrito</h1>

      <CartCounter value={20} />
    </div>
  );
}