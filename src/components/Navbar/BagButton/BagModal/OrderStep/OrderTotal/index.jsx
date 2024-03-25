import { useContext } from "react";
import { CouponContext } from "@/context/CouponContext";

import { CouponField } from "./CouponField";
import { formatPrice } from "@/utils/formatPrice";
import { OrderContext } from "@/context/OrderContext";

export const OrderTotal = () => {
  const { discount } = useContext(CouponContext);
  const { calculateTotalPrice } = useContext(OrderContext);
  const subtotal = calculateTotalPrice();
  const deliveryFee = 8.9;
  const total = (subtotal + deliveryFee) - discount;

  return (
    <div className="flex flex-col sm:flex-row justify-end sm:justify-between items-end gap-3 pt-2 w-full ">
      <CouponField />

      <div className="flex flex-col gap-2 lg:gap-7 w-[240px] text-brown-200">
      <div className="flex flex-col gap-2 border-b-2 border-brown-150">
        <div className="flex justify-between text-base lg:text-lg">
          <span>Subtotal</span>
          <span className="font-medim">R${formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-base lg:text-lg">
          <span>Taxa de entrega</span>
          <span className="font-medim">R${formatPrice(deliveryFee)}</span>
        </div>
        <div className="flex justify-between text-base lg:text-lg">
          <span>Desconto</span>
          <span className="font-medim">
            -R${formatPrice(discount)}
          </span>
        </div>
      </div>

      <div className="flex gap-1 lg:gap-2 justify-between">
        <span className="text-sm">Total</span>
        <span className="font-bold text-lg lg:text-xl">R${formatPrice(total)}</span>
      </div>
      </div>
    </div>
  );
}