import NextLink from "next/link";
import { useContext } from "react";
import { ModalContext } from "@/app/context/ModalContext";
import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";

export const PizzaItemCard = () => {
  const {handleModal} = useContext(ModalContext);
  
  return (
    <li className="image-hover w-[140px] sm:w-[169px] flex flex-col gap-3">
      <div className="w-full h-[140px] sm:h-[169px] rounded-xl relative">
        <NextLink href='/'>
          <img 
            src="/test-img.png" 
            alt="teste" 
            className="cursor-pointer"
          />
          <div 
            className="absolute inset-0 hover:bg-black-900 rounded-xl flex justify-center items-center opacity-0 hover:opacity-100"
            onClick={handleModal}
          >
            <ShoppingCartSimple weight="fill" className="text-yellow-100 text-4xl" />
          </div>
        </NextLink>
      </div>
      <div>
        <span className="text-base text-gray-850 font-medium">Nome da Pizza</span>
        <p className="text-brown-100 text-sm">Garlic sauce, mozzarella, mashed potato, cheddar,  sour cream, scallion</p>
      </div>
    </li>
  );
}