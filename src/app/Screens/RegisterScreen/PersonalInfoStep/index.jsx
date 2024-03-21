import { InputField } from "@/components/InputField";
import { Title } from "@/components/Title";

export const PersonalInfoStep = () => {
  return (
    <div className="flex flex-col gap-6">
      <Title type='dark'>Seus Dados Pessoais</Title>

      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        <InputField name='name' label='Nome Completo*' placeholder='Digite o seu nome completo' className="col-span-2"/>
        <InputField name='cpf' label='CPF*' placeholder='___.___.___-__' className=""/>
        <InputField name='cellphone' label='Celular*' placeholder='(__)_____-____' className=""/>
      </div>
    </div>
  );
}