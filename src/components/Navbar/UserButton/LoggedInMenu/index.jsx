import { Bag, X  } from "@phosphor-icons/react/dist/ssr";

export const LoggedInMenu = ({openMenu, handleClick}) => {
  const className = `${openMenu ? 'flex' : 'none'} hover:text-yellow-200 w-full text-sm px-2 hover:cursor-pointer flex flex-row-reverse gap-2 items-center`;

  return (
    <div className="relative mt-5">
      <X onClick={handleClick} className="absolute top-[-24px] right-3 hover:text-yellow-200 cursor-pointer" />
      <div className="flex flex-col items-center gap-8 text-gray-100">
        <p className="text-xs text-center pb-2 border-b-2 border-dashed border-brown-100 w-full">Olá, Fulana</p>
        <div>
          <p className={className} onClick={handleClick}>
            Meu pedido
            <Bag />
          </p>
        </div>

      </div>
    </div>
  );
}