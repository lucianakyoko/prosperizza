import { InputField } from "@/components/InputField";
import { Modal } from "@/components/Modal";
import { Title } from "@/components/Title";
import { SignIn  } from "@phosphor-icons/react/dist/ssr";

export const LoginModal = ({handleClick}) => {
  return (
    <Modal>
      <div className="flex flex-col gap-6 pb-8 lg:pb-20 w-full lg:w-[540px] m-auto">
        <div className="flex flex-col gap-4 items-center">
          <SignIn  className="text-4xl text-gray-850" />
          <Title type="dark">Fazer Login</Title>
        </div>
        <div className="flex flex-col gap-6 pb-8" >
          <p className="text-gray-850">Digite seu usuário e senha:</p>
          <div>
            <InputField name='email' label='E-mail' placeholder='Digite seu e-mail' type='email' className=''/>
            <InputField name='password' label='Senha' placeholder='*****' type='password' className=''/>
          </div>
        </div>
        <button className="primary-button w-1/2 m-auto" onClick={handleClick}>Entrar</button>
      </div>
    </Modal>
  );
}