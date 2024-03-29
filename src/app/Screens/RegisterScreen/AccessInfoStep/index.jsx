import { useContext, useState } from "react";
import { Eye, EyeClosed } from "@phosphor-icons/react/dist/ssr";

import { InputField } from "@/components/InputField";
import { Title } from "@/components/Title";
import { UserDataContext } from "@/context/UserDataContext";

export const AccessInfoStep = () => {
  const { userData, updateFormData, setIsUserStepFormValidate } = useContext(UserDataContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handlePasswordToggle = () => setShowPassword(!showPassword);
  const handleRepeatPasswordToggle = () => setShowRepeatPassword(!showRepeatPassword);

  const handleUserDataChange = (name, value) => {
    updateFormData({
      [name]: value
    });
  };

  const handlePasswordValidation = password => {
    if (userData.password === password) {
      handleUserDataChange('password', password);
      setPasswordError('');
      setIsUserStepFormValidate(true);
    } else {
      setPasswordError('* senha inválida');
      setIsUserStepFormValidate(false)
    }
  };

  const handleEmailValidation = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      setEmailError('');
      setIsUserStepFormValidate(true);
    } else {
      setEmailError('* E-mail inválido');
      setIsUserStepFormValidate(false);
    }
    return;
  }

  return (
    <div className="flex flex-col gap-6">
      <Title type='dark'>Dados de Acesso</Title>

      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        <div className="col-span-2" >
          <InputField
            name='email'
            type='email'
            label='E-mail*'
            placeholder='Digite seu e-mail'
            value={userData.email}
            onChange={e => handleUserDataChange('email', e.target.value)}
            onBlur={e => handleEmailValidation(e.target.value)}
          />
          <span className="error-message">{emailError}</span>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <div className="relative">
            <InputField
              name='password'
              type={showPassword ? 'text' : 'password'}
              label='Senha*'
              placeholder='*****'
              value={userData.password}
              onChange={e => handleUserDataChange('password', e.target.value)}
            />
            {showPassword ?
              <Eye
                size={32}
                className="text-gray-850 absolute bottom-[12px] right-3 cursor-pointer"
                onClick={handlePasswordToggle}
              />
              :
              <EyeClosed
                size={32}
                className="text-gray-850 absolute bottom-[12px] right-3 cursor-pointer"
                onClick={handlePasswordToggle}
              />
            }
          </div>
          <span className="error-message"></span>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <div className="relative">
            <InputField
              name='repeat-password'
              type={showRepeatPassword ? 'text' : 'password'}
              label='Repita a Senha*'
              placeholder='*****'
              value={repeatPassword}
              onChange={e => setRepeatPassword(e.target.value)}
              onBlur={e => handlePasswordValidation(e.target.value)}
            />
            {showRepeatPassword ?
              <Eye
                size={32}
                className="text-gray-850 absolute bottom-[12px] right-3 cursor-pointer"
                onClick={handleRepeatPasswordToggle}
              />
              :
              <EyeClosed
                size={32}
                className="text-gray-850 absolute bottom-[12px] right-3 cursor-pointer"
                onClick={handleRepeatPasswordToggle}
              />
            }
          </div>
          <span className="error-message">{passwordError}</span>
        </div>
      </div>
    </div>
  );
}