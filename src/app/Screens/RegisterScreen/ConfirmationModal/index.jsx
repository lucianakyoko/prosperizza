import { InputField } from "@/components/InputField";
import { Modal } from "@/components/Modal";
import { Title } from "@/components/Title";
import { Check } from "@phosphor-icons/react/dist/ssr";

export const ConfirmationModal = () => {
  return (
    <Modal>
      <div className="flex flex-col gap-6 pb-8 lg:pb-20 w-full lg:w-[540px] m-auto">
        <div className="flex flex-col gap-4 items-center">
          <Check className="text-4xl" />
          <Title type="dark">Cadastro Concluído</Title>
        </div>
        <div className="flex flex-col gap-6 pb-8" >
          <p>Faça o login para concluir seu pedido</p>
          <div>
            <InputField name='email' label='E-mail' placeholder='Digite seu e-mail' type='email' className=''/>
            <InputField name='password' label='Senha' placeholder='*****' type='password' className=''/>
          </div>
        </div>
        <button className="primary-button w-1/2 m-auto">Entrar</button>
      </div>
    </Modal>
  );
}