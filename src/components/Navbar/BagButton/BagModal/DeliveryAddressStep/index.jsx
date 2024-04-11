import { useContext } from "react";
import { InputField } from "@/components/InputField";
import { Title } from "@/components/Title";
import { AuthContext } from "@/context/AuthContext";

export const DeliveryAddressStep = () => {
  const {user} = useContext(AuthContext);

  return(
    <div className="flex flex-col gap-6">
      <Title type="dark">Seu pedido será entregue no endereço:</Title>

          <div className="grid grid-cols-4 gap-4 text-brown-150">
            <InputField 
              name="cep" 
              placeholder="_____-___" 
              label="CEP" 
              className='col-span-1'
              value={user.cep}
              disabled 
            />

            <InputField 
              name="Rua" 
              placeholder="Digite o nome da sua rua" 
              label="Rua" 
              className='col-span-3'
              value={user.rua}
              readOnly
              disabled 
            />

            <InputField 
              name="complemento" 
              placeholder="Complemento" 
              label="Complemento" 
              className='col-span-2'
              value={user.complemento}
              readOnly
              disabled 
            />

            <InputField 
              name="bairro" 
              placeholder="Bairro" 
              label="Bairro" 
              className='col-span-2'
              value={user.bairro}
              readOnly
              disabled 
            />

            <InputField 
              name="cidade" 
              placeholder="Cidade" 
              label="Cidade" 
              className='col-span-3'
              value={user.cidade}
              readOnly
              disabled 
            />

            <InputField 
              name="uf" 
              placeholder="UF" 
              label="UF"
              value={user.uf}
              readOnly
              disabled 
            />
          </div>  
    </div>
  );
}
