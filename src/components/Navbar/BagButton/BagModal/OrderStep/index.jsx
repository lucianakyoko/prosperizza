import { Title } from "@/components/Title";
import { OrderItem } from "./OrderItem";
import { OrderTotal } from "./OrderTotal";
import { CouponProvider } from "@/context/CouponContext";

export const OrderStep = () => {
  return (
    <div className="flex flex-col gap-6">
      <Title type='dark'>Confira o seu pedido</Title>
      <CouponProvider>
        <div className="flex flex-col gap-4 items-end">
          <ul className="flex w-full flex-col gap-2 max-h-[200px] overflow-y-scroll">
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </ul>

          <OrderTotal />
        </div>
      </CouponProvider>
    </div>
  );
}