import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";
import { ModalContext } from "@/app/context/ModalContext";

export const NewsItem = () => {
  const {handleModal} = useContext(ModalContext);

  return (
    <li className="w-[242px] rounded-t-full bg-brown-200 p-4 flex flex-col gap-4 items-center">
      <div className="relative">
        <img src="/test-img.png" className="w-[180px] h-[180px] rounded-full"/>
        <div 
            className="absolute inset-0 hover:bg-black-900 rounded-full cursor-pointer flex justify-center items-center opacity-0 hover:opacity-100"
            onClick={handleModal}
          >
            <ShoppingCartSimple weight="fill" className="text-yellow-100 text-4xl" />
          </div>
      </div>

      <div className="text-gray-100 flex flex-col items-center gap-3">
        <p>Fresh pizza by chef</p>
        <span className="font-bold">R$48,00</span>
      </div>
    </li>
  );
}