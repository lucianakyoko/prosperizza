import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

import { SideModal } from "@/components/SideModal";
import { Stepper } from "@/components/Stepper";
import { stepsList } from "./steps-list";
import { OrderStep } from "./OrderStep";
import { DeliveryAddressStep } from "./DeliveryAddressStep";
import { EmptyBag } from "./EmptyBag";
import { PaymentStep } from "./PaymentStep";
import { LoginModal } from "@/components/LoginModal";
import { ModalContext } from "@/context/ModalContext";
import { BagModalContext } from "@/context/BagModalContext";
import { OrderCompletedModal } from "./OrderCompletedModal";
import { UserDataContext } from "@/context/UserDataContext";
import { OrderContext } from "@/context/OrderContext";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export const BagModal = ({ handleModal, bagItemsQuantity }) => {
  const { setOrderItems } = useContext(OrderContext)
  const { openModal, isOpen, closeModal } = useContext(ModalContext);
  const { isAuthenticated, isChecking } = useContext(AuthContext);
  const { currentBagStep, setCurrentBagStep } = useContext(BagModalContext);
  const [isBagStepComplete, setIsBagStepComplete] = useState(false);
  const [isStepFinished, setIsStepFinished] = useState(false);

  const handlePreviousBagStep = () => {
    if (currentBagStep <= 1) {
      setCurrentBagStep(1);
    } else {
      setCurrentBagStep(currentBagStep - 1)
    }
  };

  const handleOrderStep = () => {
    if(isAuthenticated) {
      setCurrentBagStep(2);
    } else {
      openModal()
    }
  }

  const handleAddressStep = () => {
    setCurrentBagStep(3)
  };

  const handlePaymentStep = () => {
    setIsStepFinished(true);
    openModal();
  };
  
  const handleClick = () => {
    setCurrentBagStep(1);
    setOrderItems([]);
    closeModal();
  };

  return (
    <SideModal handleModal={handleModal}>
      <div>
        {bagItemsQuantity <= 0 ?
          <EmptyBag /> :
          <div className="flex flex-col gap-4">
            <Stepper
              stepList={stepsList}
              currentStep={currentBagStep}
              isComplete={isBagStepComplete}
            />

            {currentBagStep === 1 && <OrderStep />}
            {currentBagStep === 2 && <DeliveryAddressStep />}
            {currentBagStep === 3 && <PaymentStep />}

            <div className="buttons-wrapper">
              <button
                className={`secondary-button ${currentBagStep <= 1 ? 'secondary-button-not-allowed' : ''}`}
                onClick={handlePreviousBagStep}>
                Voltar
              </button>
              {currentBagStep === 1 && <button onClick={handleOrderStep} className="primary-button">Confirmar pedido</button>}
              {currentBagStep === 2 && <button onClick={handleAddressStep} className="primary-button">Avançar</button>}
              {currentBagStep === 3 && <button onClick={handlePaymentStep} className="primary-button">Finalizar</button>}
            </div>
          </div>
        }
      </div>
      {isOpen && <LoginModal alternativeText="Oops! Parece que você não está logado"/>}
      {isChecking && <LoadingSpinner text='Validando seus dados...' />}
      {isStepFinished && <OrderCompletedModal onClick={() => handleClick()} />}

    </SideModal>
  );
}