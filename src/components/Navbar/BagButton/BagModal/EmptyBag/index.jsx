import { ShoppingBag } from "@phosphor-icons/react/dist/ssr";

export const EmptyBag = () => {
  return (
    <div className="flex flex-col items-center justify-end p-4">
      <ShoppingBag className="text-9xl text-brown-150"/>
      <span className="text-2xl text-brown-100 text-center">Sua sacola está vazia</span>
    </div>
  );
}