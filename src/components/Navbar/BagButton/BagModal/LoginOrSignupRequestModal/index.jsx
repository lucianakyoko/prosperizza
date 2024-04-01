import { InputField } from "@/components/InputField";
import { Title } from "@/components/Title";
import NextLink from "next/link";

export const LoginOrSignupRequestModal = () => {
  return (
    <div className="text-gray-850 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Title type="dark">Usuário não logado</Title>
        <p className="text-lg">Oops! Parece que você não está logado.</p>
        <p className="text-base">Entre com seu e-mail e senha ou <span className="font-semibold underline">
          <NextLink href='/cadastro'>cadastre-se</NextLink>
        </span>
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <InputField 
            name='email' 
            label='E-mail' 
            placeholder='Digite seu e-mail' 
            type='email' 
            className=''
          />
          <InputField 
            name='password' 
            label='Senha' 
            placeholder='*****' 
            type='password' 
            className=''
          />
        </div>

        <div className="flex  gap-4 items-center">
          <span className="secondary-button w-1/2">
            <NextLink href='/cadastro'>cadastrar</NextLink>
          </span>
          ou
          <button className="primary-button w-1/2">Entrar</button>
        </div>
      </div>
    </div>

  );
}