export const OrderTotal = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-7 w-[240px] text-brown-200">
      <div className="flex flex-col gap-2 lg:gap-4 border-b-2 border-brown-150 py-2">
        <div className="flex justify-between text-base lg:text-lg">
          <span>Subtotal</span>
          <span className="font-medim">R$89,70</span>
        </div>
        <div className="flex justify-between text-base lg:text-lg">
          <span>Taxa de entrega</span>
          <span className="font-medim">R$8,90</span>
        </div>
      </div>

      <div className="flex gap-1 lg:gap-2 justify-between pt-4">
        <span className="text-sm">Total</span>
        <span className="font-bold text-lg lg:text-xl">R$59,80</span>
      </div>
    </div>
  );
}