import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";
import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";

export const PizzaItemCard = ({pizza}) => {
  const {openModal, setSelectedPizza} = useContext(ModalContext);
  const handleClick = (event) => {
    event.preventDefault();
    openModal();
    setSelectedPizza(pizza);
  };

  return (
    <li className="image-hover cursor-pointer w-[140px] sm:w-[169px] flex flex-col gap-3">
      <div className="w-full h-[140px] sm:h-[169px] rounded-xl relative">
        <img 
          src={pizza.imageUrl} 
          alt={pizza.pizzaName} 
        />
        <div 
          className="absolute inset-0 hover:bg-black-900 rounded-xl flex justify-center items-center opacity-0 hover:opacity-100"
          onClick={handleClick}
        >
          <ShoppingCartSimple weight="fill" className="text-yellow-100 text-4xl" />
        </div>
      </div>
      <div>
        <span className="text-base text-gray-850 font-medium">{pizza.pizzaName}</span>
        <p className="text-brown-100 text-sm">{pizza.ingredients}</p>
      </div>
    </li>
  );
}