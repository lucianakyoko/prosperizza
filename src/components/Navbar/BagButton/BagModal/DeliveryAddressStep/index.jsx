import { InputField } from "@/components/InputField";
import { Title } from "@/components/Title";

export const DeliveryAddressStep = () => {
  return(
    <div className="flex flex-col gap-6">
      <Title type="dark">Confirme o endereço de entrega</Title>

        <div className="grid grid-cols-4 gap-4">
          <InputField 
            name="cep" 
            placeholder="_____-___" 
            label="CEP" 
            className='col-span-2'
          />
          <InputField 
            name="Rua" 
            placeholder="Digite o nome da sua rua" 
            label="Rua" 
            className='col-span-4' />
          <InputField 
            name="complemento" 
            placeholder="Complemento" 
            label="Complemento" 
            className='col-span-2' />
          <InputField 
            name="bairro" 
            placeholder="Bairro" 
            label="Bairro" 
            className='col-span-2'/>
          <InputField 
            name="cidade" 
            placeholder="Cidade" 
            label="Cidade" 
            className='col-span-3' />
          <InputField 
            name="uf" 
            placeholder="UF" 
            label="UF"/>
        </div>      
    </div>
  );
}
