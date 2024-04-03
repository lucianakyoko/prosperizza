import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Title } from "../Title";

export const Footer = () => {
  return(
    <div className="layout-container flex items-center justify-center">
      <div className="w-full flex flex-col gap-14 items-center sm:py-11">
        <div className="w-full flex flex-col gap-14 sm:flex-row lg:justify-around">
          <div className="flex flex-col gap-6 items-center sm:items-start">
            <Title type={'light'}>Horário de funcionamento</Title>
            <ul className="text-white font-light flex flex-col gap-4 items-center sm:items-start">
              <li>Segunda - Fechado</li>
              <li>Terça a Quinta - 18:00 às 00:00</li>
              <li>Sexta a Domingo - 18:00 às 02:00</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 items-center sm:items-start">
            <Title type={'light'}>Onde estamos</Title>
            <div className="text-white flex items-center gap-3">
              <MapPin className='text-lg sm:text-xl lg:text-2xl'/>
              <p className="font-light">Rua localhost, 3000 - CEP: 127.0.0.1</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-white font-extralight">Design e desenvolvimento feito com <span>♥</span> pela <a className="text-yellow-100 font-semibold hover:underline" href="https://lucianakyoko.vercel.app" target="_blank" rel="noopener noreferrer">Luciana Kyoko</a>
          </p>
        </div>
      </div>
      <div className="hidden sm:block w-[180px] lg:w-[200] h-[266px] bg-cheff bg-no-repeat bg-center bg-contain"></div>
    </div>
  );
}
