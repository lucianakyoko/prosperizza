'use client';

import { useContext, useState } from "react";
import { OrderContext } from "@/context/OrderContext";
import { ShoppingBag } from "@phosphor-icons/react/dist/ssr";
import { BagModal } from "./BagModal";

export const BagButton = () => {
  const {calculateTotalQuantity} = useContext(OrderContext);
  const [openBagModal, setOpenBagModal] = useState(false);
  const handleBagModal = () => setOpenBagModal(!openBagModal);
  const bagItemsQuantity = calculateTotalQuantity();

  return (
    <div className="relative">
      <ShoppingBag 
        className="hover:text-yellow-100 text-2xl hover:cursor-pointer"
        onClick={handleBagModal}
      />
      { bagItemsQuantity >= 1 && 
        <span className="absolute top-3 left-3 bg-red-100 flex items-center justify-center p-1 rounded-full w-[22px] h-[22px]">
          {bagItemsQuantity}
        </span>
      }
      <div className={openBagModal ? 'block' : 'hidden'}>
        <BagModal handleModal={handleBagModal} bagItemsQuantity={bagItemsQuantity} />
      </div>
    </div>
  );
}