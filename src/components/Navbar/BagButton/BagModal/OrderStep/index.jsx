import { useContext } from "react";
import { OrderContext } from "@/context/OrderContext";
import { CouponProvider } from "@/context/CouponContext";
import { Title } from "@/components/Title";
import { OrderItem } from "./OrderItem";
import { OrderTotal } from "./OrderTotal";

export const OrderStep = () => {
  const {orderItems} = useContext(OrderContext);

  return (
    <div className="flex flex-col gap-6">
      <Title type='dark'>Confira o seu pedido</Title>
      <CouponProvider>
        <div className="flex flex-col gap-4 items-end">
          <ul className="flex w-full flex-col gap-2 max-h-[200px] overflow-y-scroll">
            {orderItems.map(item => (
              <OrderItem item={item} key={item.id} size={item.size} quantity={item.quantity}/>
            ))}
          </ul>

          <OrderTotal />
        </div>
      </CouponProvider>
    </div>
  );
}