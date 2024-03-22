import { Title } from "@/components/Title";

export const PromotionItem = ({promotion}) => {
  return (
    <li className="bg-red-200 w-[328px] sm:w-[483px] rounded-2xl flex flex-col sm:flex-row gap-4 py-6 sm:px-6">
      <div className="relative w-[263px] rounded-2xl m-auto">
        <img src="/test-img.png"  className="w-full"/>
        <div 
            className="absolute inset-0 hover:bg-black-900 rounded-2xl flex flex-col gap-2 justify-center items-center opacity-0 hover:opacity-100"
          >
            <span className="text-white text-center">Use o cupom abaixo antes de finalizar a compra</span>
            <span className="font-bold text-gray-850 bg-white py-4 px-12 rounded-sm">{promotion.coupon}</span>
          </div>
      </div>

      <div className="text-gray-100 flex flex-col gap-4 items-center sm:items-start">
        <Title type='light'>{promotion.title}</Title>
        <div className="flex items-center gap-2 sm:items-start">
          <span className="text-xl">{promotion.type}</span>
          <span className="text-4xl font-bold">{promotion.value}</span>
        </div>
        <p>*{promotion.description}</p>
      </div>
    </li>
  );
}