import { X } from "@phosphor-icons/react/dist/ssr";

export const SideModal = ({ children, handleModal }) => {
  return (
    <div 
      className={`w-screen h-screen bg-black-900 fixed z-10 top-0 left-0 flex justify-end overflow-hidden`}
    >
      <div className="bg-gray-150 p-4 mr-4 lg:px-7 relative w-[360px] sm:w-[493px] lg:w-[531px]">
        <X  
          size={32}  
          className="text-red-200 hover:text-red-100 absolute right-4 cursor-pointer"
          onClick={handleModal}
        />
        <div className="mt-12">
          {children}
        </div>
      </div>
    </div>
  );
}