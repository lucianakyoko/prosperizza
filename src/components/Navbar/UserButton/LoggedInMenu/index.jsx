import NextLink from "next/link";
import { Bag, SignOut, X  } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { OrderContext } from "@/context/OrderContext";
import { BagModalContext } from "@/context/BagModalContext";

export const LoggedInMenu = ({openMenu, handleClick}) => {
  const {setCurrentBagStep} = useContext(BagModalContext);
  const className = `${openMenu ? 'flex' : 'none'} hover:text-yellow-200 w-full text-sm px-2 hover:cursor-pointer flex flex-row-reverse gap-2 items-center`;
  const {logout, user} = useContext(AuthContext);
  const {setOrderItems} = useContext(OrderContext);
  const firstName = user.fullName.split(' ')[0];

  const handleLogout = () => {
    logout();
    setOrderItems([]);
    setCurrentBagStep(1);
  };

  return (
    <div className="relative mt-5">
      <X onClick={handleClick} className="absolute top-[-24px] right-3 hover:text-yellow-200 cursor-pointer" />
      <div className="flex flex-col items-center gap-8 text-gray-100">
        <p className="text-xs text-center pb-2 border-b-2 border-dashed border-brown-100 w-full">Olá, {firstName}!</p>
        <div className="flex flex-col gap-4 items-center">
          <p className={`${className}`} onClick={handleLogout}>
            Sair
            <SignOut className="text-lg" />
          </p>
          {/* <NextLink href='/user'>
            <p className={className} onClick={handleClick}>
              Meu pedido
              <Bag />
            </p>
          </NextLink> */}
        </div>
      </div>
    </div>
  );
}