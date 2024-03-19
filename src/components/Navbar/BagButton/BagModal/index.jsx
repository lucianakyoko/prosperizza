import { useState } from "react";

import { SideModal } from "@/components/SideModal";
import { Stepper } from "@/components/Stepper";
import { stepsList } from "./steps-list";
import { OrderStep } from "./OrderStep";
import { DeliveryAddressStep } from "./DeliveryAddressStep";
import { EmptyBag } from "./EmptyBag";
import { PaymentStep } from "./PaymentStep";

export const BagModal = ({handleModal, bagItemsQuantity}) => {
  const [currentBagStep, setCurrentBagStep] = useState(3);
  const [isBagStepComplete, setIsBagStepComplete] = useState(false);

  const handleNextBagStep = () => {
    if(currentBagStep === 3) {
      setCurrentBagStep(3);
    } else {
      setCurrentBagStep(currentBagStep + 1);
    }
  };
  const handlePreviousBagStep = () => {
    if(currentBagStep <= 1) {
      setCurrentBagStep(1);
    } else {
      setCurrentBagStep(currentBagStep - 1)
    }
  };

  return (
    <SideModal handleModal={handleModal}>
      {bagItemsQuantity <= 0 ?
        <EmptyBag /> :

        <div className="flex flex-col gap-4">
          <Stepper 
            stepList={stepsList}
            currentStep={currentBagStep} 
            isComplete={isBagStepComplete} 
          />

          { currentBagStep === 1 && <OrderStep />}
          { currentBagStep === 2 && <DeliveryAddressStep />}
          { currentBagStep === 3 && <PaymentStep />}
          
          
          <div className="buttons-wrapper">
            <button 
              className={`secondary-button ${currentBagStep <= 1 ? 'secondary-button-not-allowed' : ''}`} 
              onClick={handlePreviousBagStep}>
                Voltar
              </button>
            <button className="primary-button" onClick={handleNextBagStep} >
              {currentBagStep === 1 && 'Confirmar pedido'}
              {currentBagStep === 2 && 'Confirmar endereço'}
              {currentBagStep === 3 && 'Pagar'}
            </button>
          </div>
        </div>
      }

    </SideModal>
  );
}