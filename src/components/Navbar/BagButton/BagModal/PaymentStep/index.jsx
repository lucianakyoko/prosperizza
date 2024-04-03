import { Money, CreditCard, CurrencyDollarSimple, GitCommit } from "@phosphor-icons/react/dist/ssr";
import { Title } from "@/components/Title";
import { PaymentType } from "./PaymentType";
import { useContext } from "react";
import { formatPrice } from "@/utils/formatPrice";
import { OrderContext } from "@/context/OrderContext";

export const PaymentStep = () => {
  const { calculateTotalPrice } = useContext(OrderContext);
  const totalToPay = calculateTotalPrice();

  const paymentTypesList = [
    {
      id: 'cash',
      label: 'Em dinheiro (na entrega)',
      icon: <Money/>
    },
    {
      id: 'card',
      label: 'Cartão de Crédito/ Débito',
      icon: <CreditCard/>
    },
    {
      id: 'pix',
      label: 'Pix',
      icon: <CurrencyDollarSimple />
    },
    {
      id: 'git',
      label: 'Git Semântico',
      icon: <GitCommit/>
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <Title type='dark'>Formas de Pagamento</Title>

      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-6 items-center text-brown-200">
          <h3 className="text-base font-medium">Escolha a forma de pagamento</h3>

          <div className="">
            {paymentTypesList.map((type, i) => (
              <PaymentType 
                key={type.id} 
                value={type.id} 
                icon={type.icon} 
                label={type.label} 
                defaultChecked={i === 0}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-12">
          <span className="text-lg font-light">Total</span>
          <span className="font-semibold text-lg text-gray-850">R${formatPrice(totalToPay)}</span>
        </div>
      </div>
    </div>
  );
}