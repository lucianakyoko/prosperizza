import { InputField } from "@/components/InputField";
import { Title } from "@/components/Title";
import { UserDataContext } from "@/context/UserDataContext";
import { cellphoneMask } from "@/utils/cellphoneMask";
import { cpfMask } from "@/utils/cpfMask";
import { useContext, useState } from "react";

export const PersonalInfoStep = () => {
  const {userData, updateFormData, setIsUserStepFormValidate} = useContext(UserDataContext);
  const [errors, setErrors] = useState({});

  const handleUserDataChange = (name, value) => {
    updateFormData({
      [name]: value
    });
  };

  const validateName = value => {
    if(!value || value.split(' ').length < 2) {
      setIsUserStepFormValidate(false);
      return 'O nome completo é obrigatório';
    } else {
      setIsUserStepFormValidate(true);
      return ''
    };
  };

  const validateCPF = value => {
    if (!value || value.replace(/\D/g, "").length !== 11) {
      setIsUserStepFormValidate(false);
      return "CPF inválido";
    }else {
      setIsUserStepFormValidate(true);
      return ''
    };
  }

  const validateCellphone = value => {
    if(!value || value.replace(/\D/g, "").length !== 11) {
      setIsUserStepFormValidate(false);
      return 'Número de celular inválido';
    }else {
      setIsUserStepFormValidate(true);
      return ''
    };
  };

  const handleBlur = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'fullName' : errorMessage = validateName(value);
      break;
      case 'cpf': errorMessage = validateCPF(value);
      break;
      case 'cellphone': errorMessage = validateCellphone(value);
      break;
      default: break;
    };
    setErrors((prevErrors) => ({...prevErrors, [name]: errorMessage}));
  }

  return (
    <div className="flex flex-col gap-6">
      <Title type='dark'>Seus Dados Pessoais</Title>

      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        <div className="col-span-2">
          <InputField 
            name='fullName' 
            label='Nome Completo*' 
            autoFocus
            placeholder='Digite o seu nome completo'
            required 
            className="col-span-2"
            value={userData.fullName || ''}
            onChange={e => handleUserDataChange('fullName', e.target.value)}
            onBlur={e => handleBlur('fullName', e.target.value)}
          />
          <span className='error-message'>{errors.fullName}</span>
        </div>
        <div>
          <InputField 
            name='cpf' 
            label='CPF* (somente números)' 
            placeholder='Digite seu CPF'
            required
            value={cpfMask(userData.cpf || '')}
            onChange={e => handleUserDataChange('cpf', e.target.value)}
            onBlur={e => handleBlur('cpf', e.target.value)}
          />
          <span className='error-message'>{errors.cpf}</span>

        </div>
        <div>
          <InputField 
            name='cellphone' 
            label='Celular* (somente números)' 
            placeholder='Seu celular' 
            required
            value={cellphoneMask(userData.cellphone || '')}
            onChange={e => handleUserDataChange('cellphone', e.target.value)}
            onBlur={e => handleBlur('cellphone', e.target.value)}
          />
          <span className='error-message'>{errors.cellphone}</span>
        </div>
      </div>
    </div>
  );
}