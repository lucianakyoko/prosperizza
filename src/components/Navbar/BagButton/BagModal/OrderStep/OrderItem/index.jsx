import { OrderContext } from "@/context/OrderContext";
import { MinusCircle, PlusCircle, Trash } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";
import { formatPrice } from "@/utils/formatPrice";

export const OrderItem = ({item, size, quantity}) => {
  const {increasePizzaQuantity, decreaseItemQuantity, removeItemFromShoppingBag} = useContext(OrderContext);
  const handleIncreaseQuantity = () => increasePizzaQuantity(item.orderItemId);
  const handleDecreaseQuantity = () => {decreaseItemQuantity(item.orderItemId)};
  const handleRemoveItemFromShoppingBag = () => {removeItemFromShoppingBag(item.size_id)};
  const pieces = size === 'individual' ? 4 : size === 'medio' ? 8 : 12;
  const itemTotal = item.price * quantity;

  return (
    <li className="w-full flex items-center gap-2 lg:gap-4 py-2 border-b-2 border-brown-150">
      <img src={item.imageUrl} alt={item.pizzaName} className="w-[60px] lg:w-[90px] rounded-full" />
      <div className="w-full px-2 lg:px-4 border-l-2 border-dashed border-brown-150 flex flex-col lg:gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-base lg:text-xl text-brown-200">{item.pizzaName}</p>
          <p className="text-sm lg:text-base text-brown-200">Pizza {size === 'medio' ? 'média' : size} ({pieces} fatias)</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            <Trash 
              className="text-xl hover:cursor-pointer text-red-100 hover:text-red-200"
              onClick={handleRemoveItemFromShoppingBag}
            />
            <div className="flex items-center gap-1">
              <MinusCircle 
                className="hover:cursor-pointer text-3xl sm:text-4xl text-brown-150" 
                onClick={handleDecreaseQuantity}
              />
              <span className="ms:text-lg text-gray-850 leading-none">{quantity}</span>
              <PlusCircle 
                className="hover:cursor-pointer text-3xl sm:text-4xl text-brown-200"
                onClick={handleIncreaseQuantity}
              />
            </div>
          </div>
          <span className="text-brown-200 text-base font-medium">R${itemTotal}</span>
        </div>
      </div>
    </li>
  );
}