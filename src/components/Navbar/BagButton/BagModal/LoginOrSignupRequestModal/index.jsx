import { InputField } from "@/components/InputField";
import { Title } from "@/components/Title";
import NextLink from "next/link";

import {  useContext, useState } from "react";
import { Eye, EyeClosed } from "@phosphor-icons/react/dist/ssr";
import { AuthContext } from "@/context/AuthContext";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { BagModalContext } from "@/context/BagModalContext";

export const LoginOrSignupRequestModal = ({setRequestLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const{login, loginErrorMessage, isChecking} = useContext(AuthContext);

  const handlePasswordToggle = () => setShowPassword(!showPassword);

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(email, password);
    setRequestLogin(false);
  };

  return (
    <div className={`text-gray-850 flex flex-col gap-6`}>
      <div className="flex flex-col gap-4">
        <Title type="dark">Usuário não logado</Title>
        <p className="text-lg">Oops! Parece que você não está logado.</p>
        <p className="text-base">Entre com seu e-mail e senha ou <span className="font-semibold underline">
          <NextLink href='/cadastro'>cadastre-se</NextLink> 
        </span> para continuar.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <InputField
            name='email'
            label='E-mail'
            placeholder='Digite seu e-mail'
            type='email'
            className=''
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className="relative">
            <InputField
              name='password'
              label='Senha'
              placeholder='*****'
              type={showPassword ? 'text' : 'password'}
              className=''
              value={password}
              onChange={e => setPassword(e.target.value)}
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
          <span>{loginErrorMessage}</span>
        </div>

        <div className="flex  gap-4 items-center">
          <span className="secondary-button w-1/2">
            <NextLink href='/cadastro'>cadastrar</NextLink>
          </span>
          ou
          <button type="submit" className="primary-button w-1/2">Entrar</button>
        </div>
        {isChecking && <LoadingSpinner text="Validando seus dados..." />}
      </form>
    </div>
  );
}