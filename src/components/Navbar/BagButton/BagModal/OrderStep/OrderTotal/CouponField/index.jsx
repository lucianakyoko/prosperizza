import { InputField } from "@/components/InputField";
import { CouponContext } from "@/context/CouponContext";
import { useContext } from "react";

export const CouponField = () => {
  const {
    couponCode, 
    handleCouponChange,
    handleCouponForm,
    isCouponValid,
    couponErrorMessage,
  } = useContext(CouponContext);

  return (
    <div className="text-gray-850 ">
    <form className="flex items-center justify-center m-auto gap-1">
      <InputField 
        placeholder='CUPOM' 
        className='w-[100px]'
        name='cupon'
        id='cupon' 
        value={couponCode}
        onChange={handleCouponChange}
      />
      <button 
        className="bg-gray-900 p-2 sm:py-4 text-gray-150 px-4 rounded-xl"
        onClick={handleCouponForm}
      >
        aplicar
      </button>
    </form>
     {!isCouponValid ? <span className="text-red-200 text-xs">*{couponErrorMessage}</span> : <span></span>} 
  </div>
  );
}