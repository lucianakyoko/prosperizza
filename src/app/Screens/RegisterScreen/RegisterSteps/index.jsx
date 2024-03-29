'use client';
import { useContext, useState } from "react";
import { ModalContext } from "@/context/ModalContext";
import { UserDataContext } from "@/context/UserDataContext";

import { Stepper } from "@/components/Stepper"
import { signupStepsList } from "../signup-step-list";
import { PersonalInfoStep } from "../PersonalInfoStep";
import { AddressInfoStep } from "../AddressInfoStep";
import { AccessInfoStep } from "../AccessInfoStep";
import { ConfirmationModal } from "../ConfirmationModal";

export const RegisterSteps = () => {
  const {openModal, isOpen} = useContext(ModalContext);
  const {userData, isUserStepFormValidate} = useContext(UserDataContext);
  const [currentRegisterStep, setCurrentRegisterStep] = useState(1);
  const [isRegisterStepComplete, setIsRegisterStepComplete] = useState(false);

  const handleNextRegisterStep = () => {
    if(!isUserStepFormValidate) {
      setCurrentRegisterStep(currentRegisterStep);
    } else {
      setCurrentRegisterStep(currentRegisterStep +1);
    }
    if(currentRegisterStep === 3) {
      setCurrentRegisterStep(3);
    }
  };

  const handlePreviousRegisterStep = () => {
    if(currentRegisterStep <= 1) {
      setCurrentRegisterStep(1);
    } else {
      setCurrentRegisterStep(currentRegisterStep - 1)
    }
  };
  const handleClick = (event) => {
    event.preventDefault();
    if(isUserStepFormValidate) {
      openModal();
    }
  };

  return (
    <>
      <div className="w-[360px] sm:w-[400px] pt-8 lg:pt-20">
        <Stepper 
          stepList={signupStepsList} 
          currentStep={currentRegisterStep}
          isComplete={isRegisterStepComplete}
        />
      </div>

      <div className="flex flex-col gap-6 pb-8 lg:pb-20 w-full lg:w-[640px]">
        { currentRegisterStep === 1 && <PersonalInfoStep />}
        { currentRegisterStep === 2 && <AddressInfoStep />}
        { currentRegisterStep === 3 && <AccessInfoStep />}

        <div className="buttons-wrapper">
          {currentRegisterStep <= 3 &&
          <button 
            className={`secondary-button ${currentRegisterStep <= 1 ? 'secondary-button-not-allowed': ''}`}
            onClick={handlePreviousRegisterStep}
          >voltar</button>
        }
          {
            currentRegisterStep < 3 ?
              <button className={`primary-button ${isUserStepFormValidate ? '' : 'primary-button-not-allowed'}`} onClick={handleNextRegisterStep}>Avançar</button>
              :
              <button className={`primary-button ${isUserStepFormValidate ? '' : 'primary-button-not-allowed'}`} onClick={handleClick}>Finalizar</button>
          }
        </div>
      </div>
      
      {isOpen && <ConfirmationModal/>}
    </>
  );
}