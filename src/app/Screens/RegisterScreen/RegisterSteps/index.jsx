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
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ErrorRegisterModal } from "../ErrorRegisterModal";

export const RegisterSteps = () => {
  const {openModal, isOpen} = useContext(ModalContext);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const {userData, updateFormData, isUserStepFormValidate} = useContext(UserDataContext);
  const [currentRegisterStep, setCurrentRegisterStep] = useState(1);
  const [isRegisterStepComplete, setIsRegisterStepComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    if(!isUserStepFormValidate) {
      setCurrentRegisterStep(currentRegisterStep);
    } else {
      setCurrentRegisterStep(currentRegisterStep - 1);
    }
    if(currentRegisterStep <= 1) {
      setCurrentRegisterStep(1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(isUserStepFormValidate) {
      try {
        setIsLoading(true);
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
        
        if(res.status === 400) {
          setIsLoading(false);
          setOpenErrorModal(true);
          setCurrentRegisterStep(1);

        } else {
          setOpenErrorModal(false);
        };

        updateFormData({
          fullName: '',
          cpf: '',
          cellphone: '',
          cep: '',
          rua: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          uf: '',
          email: '',
          password: ''
        });
      } catch (error) {
        console.error('Erro ao enviar os dados do usuário', error.message)
      } finally {
        setIsLoading(false);
        setCurrentRegisterStep(1);
        openModal();
      }
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
            disabled={!isUserStepFormValidate}
            className={`secondary-button ${currentRegisterStep <= 1 ? 'secondary-button-not-allowed': ''}`}
            onClick={handlePreviousRegisterStep}
          >voltar</button>
        }
          {
            currentRegisterStep < 3 ?
              <button 
                onClick={handleNextRegisterStep}
                disabled={!isUserStepFormValidate}
                className={`primary-button ${isUserStepFormValidate ? '' : 'primary-button-not-allowed'}`} 
              >Avançar</button>
              :
              <button 
                type='submit'
                onClick={handleSubmit}
                disabled={!isUserStepFormValidate}
                className={`primary-button ${isUserStepFormValidate ? '' : 'primary-button-not-allowed'}`} 
              >Finalizar</button>
          }
        </div>
      </div>
      {isLoading && <LoadingSpinner text='Salvando...' />}
      {isOpen && <ConfirmationModal/>}
      {openErrorModal && <ErrorRegisterModal/>}
    </>
  );
}