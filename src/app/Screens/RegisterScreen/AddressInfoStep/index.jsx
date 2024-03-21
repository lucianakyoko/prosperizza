import { InputField } from "@/components/InputField";
import { Title } from "@/components/Title";

export const AddressInfoStep = () => {
  return (
    <div className="flex flex-col gap-6">
      <Title type='dark'>Seu endereço</Title>

      <div className="grid grid-cols-5 gap-4 sm:gap-6">
        <InputField name='cep' label='CEP*' placeholder='_____-___' className="col-span-5 sm:col-span-2"/>
        <InputField name='rua' label='Rua' placeholder='Nome da rua' className="col-span-5 sm:col-span-3"/>
        <InputField name='complemento' label='Complemento' placeholder='Complemento' className="col-span-5 sm:col-span-3"/>
        <InputField name='bairro' label='Bairro' placeholder='Bairro' className="col-span-5 sm:col-span-2"/>
        <InputField name='cidade' label='Cidade' placeholder='Cidade' className="col-span-5 sm:col-span-4"/>
        <InputField name='uf' label='UF' placeholder='UF' className="col-span-5 sm:col-span-1"/>
      </div>
    </div>
  );
}