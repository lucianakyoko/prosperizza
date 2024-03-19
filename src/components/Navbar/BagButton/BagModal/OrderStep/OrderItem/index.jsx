import { MinusCircle, PlusCircle, Trash } from "@phosphor-icons/react/dist/ssr";

export const OrderItem = () => {
  return (
    <li className="w-full flex items-center gap-2 lg:gap-4 py-2 border-b-2 border-brown-150">
      <img src="/test-img.png" alt="" className="w-[60px] lg:w-[90px] rounded-full" />
      <div className="w-full px-2 lg:px-4 border-l-2 border-dashed border-brown-150 flex flex-col lg:gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-base lg:text-xl text-brown-200">Buffalo Chicken</p>
          <p className="text-sm lg:text-base text-brown-200">Pizza individual (4fatias)</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            <Trash className="text-xl hover:cursor-pointer text-red-100 hover:text-red-200"/>
            <div className="flex items-center gap-1">
              <MinusCircle className="hover:cursor-pointer text-3xl sm:text-4xl text-brown-150" />
              <span className="ms:text-lg leading-none">01</span>
              <PlusCircle className="hover:cursor-pointer text-3xl sm:text-4xl text-brown-200" />
            </div>
          </div>
          <span className="text-brown-200 text-base font-medium">R$29,90</span>
        </div>
      </div>
    </li>
  );
}