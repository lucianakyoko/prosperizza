import { formatPrice } from "@/utils/formatPrice";

export const PizzaSizeOption = ({value, price, onClick, selected}) => {
  return (
    <label htmlFor={value} onClick={onClick} className="text-gray-850 cursor-pointer flex sm:flex-col gap-5 sm:gap-3 lg:items-center p-2 sm:p-4 border border-brown-150 rounded-xl">
      <div className="flex flex-col lg:flex-row gap-1 items-center lg:justify-center text-base font-medium">
        <span>Pizza {value === 'medio' ? 'média' : value}</span>
        <span>({value === 'individual' ? 4 : value === 'medio' ? 8 : 12} fatias)</span>
      </div>
      <div className="w-[1px] sm:w-[100px] h-[48px] sm:h-[1px] bg-brown-150"></div>
      <div className="flex flex-col sm:flex-row gap-1 items-end sm:items-center sm:justify-between lg:w-full">
        <span className="font-light text-base">R${formatPrice(price)}</span>
        <input 
          type="radio" 
          name="size" 
          id={value} 
          value={value}
          className=""
          checked={selected}
        />
      </div>
    </label>
  );
}