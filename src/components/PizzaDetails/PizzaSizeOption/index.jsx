export const PizzaSizeOption = ({value}) => {
  return (
    <label htmlFor={value} className="text-gray-850 cursor-pointer flex sm:flex-col gap-5 sm:gap-3 lg:items-center p-2 sm:p-4 border border-brown-150 rounded-xl">
      <div className="flex flex-col lg:flex-row gap-1 items-center lg:justify-center text-base font-medium">
        <span>Pizza Individual</span>
        <span>(4 fatias)</span>
      </div>
      <div className="w-[1px] sm:w-[100px] h-[48px] sm:h-[1px] bg-brown-150"></div>
      <div className="flex flex-col sm:flex-row gap-1 items-end sm:items-center sm:justify-between lg:w-full">
        <span className="font-light text-base">R$29,90</span>
        <input 
          type="radio" 
          name="size" 
          id={value} 
          value={value}
          className=""
        />
      </div>
    </label>
  );
}