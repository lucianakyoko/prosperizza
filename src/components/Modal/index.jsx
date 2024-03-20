import { useContext } from "react";
import { ModalContext } from "@/app/context/ModalContext";

import { X } from "@phosphor-icons/react/dist/ssr";


export const Modal = ({ children }) => {
  const { isOpen, closeModal } = useContext(ModalContext);
  if(!isOpen) return null;
  
  return (
    <div 
      className="w-screen h-screen bg-black-900 fixed top-0 left-0 z-20 flex justify-center md:items-center"
    >
      <div className="bg-gray-150 w-4/5 md:w-[700px] md:h-[540px] lg:h-[624px] lg:w-[942px] mt-6 rounded-2xl p-4 relative">
          <X 
            size={32} 
            className="text-red-200 hover:text-red-100 absolute right-4 cursor-pointer"
            onClick={closeModal}
          />
          <div className="mt-12">
            {children}
          </div>
      </div>
    </div>
  );
}