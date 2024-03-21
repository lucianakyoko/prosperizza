import { InputField } from "@/components/InputField";
import { Title } from "@/components/Title";

export const AccessInfoStep = () => {
  return (
    <div className="flex flex-col gap-6">
      <Title type='dark'>Dados de Acesso</Title>

      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        <InputField name='email' type='email' label='E-mail*' placeholder='Digite seu e-mail' className="col-span-2"/>
        <InputField name='password' type='password' label='Senha*' placeholder='*****' className="col-span-2 sm:col-span-1"/>
        <InputField name='repeat-password' type="password" label='Repita a Senha*' placeholder='*****' className="col-span-2 sm:col-span-1"/>
      </div>
    </div>
  );
}