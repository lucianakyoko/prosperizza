import { useContext } from "react";
import { ModalContext } from "@/app/context/ModalContext";

import { Title } from "@/components/Title";
import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";

export const PromotionItem = () => {
  const {openModal} = useContext(ModalContext);
  const handleClick = () => openModal();

  return (
    <li className="bg-red-200 w-[328px] sm:w-[483px] rounded-2xl flex flex-col sm:flex-row gap-4 items-center py-6 sm:px-6">
      <div className="relative w-[263px] h-[263px] sm:h-[234px] lg:h-[216px] rounded-2xl cursor-pointer">
        <img src="/test-img.png"  className="w-full"/>
        <div 
            className="absolute inset-0 hover:bg-black-900 rounded-2xl flex justify-center items-center opacity-0 hover:opacity-100"
            onClick={handleClick}
          >
            <ShoppingCartSimple weight="fill" className="text-yellow-100 text-4xl" />
          </div>
      </div>

      <div className="text-gray-100 flex flex-col gap-4 items-center sm:items-start">
        <Title type='light'>Título Promoção</Title>
        <div className="flex items-center gap-2 sm:items-start">
          <span className="text-xl">R$</span>
          <span className="text-4xl font-bold">39,90</span>
        </div>
        <p>todas as sextas-feiras</p>
      </div>
    </li>
  );
}