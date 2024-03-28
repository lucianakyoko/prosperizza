import { useContext, useState } from "react";
import { fetchCEP } from "@/services/viaCepService";
import { cepMask } from "@/utils/cepMask";
import { UserDataContext } from "@/context/UserDataContext";

import { Title } from "@/components/Title";
import { InputField } from "@/components/InputField";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export const AddressInfoStep = () => {
  const [cepError, setCepError] = useState('');
  const [loading, setLoading] = useState(false);
  const {userData, updateFormData, setIsUserStepFormValidate} = useContext(UserDataContext);

  const handleUserDataChange = (name, value) => {
    updateFormData({
      [name]: value
    });
  };

  const handleCEPChange = async cep => {
    if(cep.replace(/\D/g, "").length !== 8) {
      setIsUserStepFormValidate(false);
      setCepError('* CEP inválido');

    } else {
      setCepError('');
      setIsUserStepFormValidate(true);
    };

    try {
      const data = await fetchCEP(cep);
      setLoading(true);

      if(data) {
        handleUserDataChange('cep', data.cep);
        handleUserDataChange('rua', data.logradouro);
        handleUserDataChange('bairro', data.bairro);
        handleUserDataChange('cidade', data.localidade);
        handleUserDataChange('uf', data.uf);
      }
      
    } catch (error) {
      setIsUserStepFormValidate(false);
      setCepError('Erro ao buscar informações do CEP')
    }finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Title type='dark'>Seu endereço</Title>

      <div className="grid grid-cols-5 gap-4 sm:gap-6">
        <div className="col-span-5 sm:col-span-2">
          <InputField 
            name='cep' 
            label='CEP* (Somente números)' 
            placeholder='__.___-___' 
            required
            value={userData.cep ? cepMask(userData.cep) : ''}
            onChange={e => handleUserDataChange('cep', e.target.value)}
            onBlur={e => handleCEPChange(e.target.value)}
          />
          <span className='error-message'>{cepError}</span>
        </div>

        <div className="col-span-5 sm:col-span-3">
          <InputField 
            name='rua' 
            label='Rua' 
            placeholder='Rua'
            value={userData.rua || ''}
            onChange={e => handleUserDataChange('rua', e.target.value)}
          />
          <span className='error-message'></span>
        </div>

        <div className="col-span-5 sm:col-span-1">
          <InputField 
            name='numero' 
            label='Número' 
            placeholder='Número'
            value={userData.numero || ''}
            onChange={e => handleUserDataChange('numero', e.target.value)}
          />
          <span className='error-message'></span>
        </div>

        <div className="col-span-5 sm:col-span-2">
          <InputField 
            name='complemento' 
            label='Complemento' 
            placeholder='Complemento'
            value={userData.complemento || ''}
            onChange={e => handleUserDataChange('complemento', e.target.value)}
          />
          <span className='error-message'></span>
        </div>

        <div className="col-span-5 sm:col-span-2">
          <InputField 
            name='bairro' 
            label='Bairro' 
            placeholder='Bairro'
            value={userData.bairro || ''} 
            onChange={e => handleUserDataChange('bairro', e.target.value)}     
          />
          <span className='error-message'></span>
        </div>

        <div className="col-span-5 sm:col-span-4">
          <InputField 
            name='cidade' 
            label='Cidade' 
            placeholder='Cidade'
            value={userData.cidade || ''}
            onChange={e => handleUserDataChange('cidade', e.target.value)}           
          />
          <span className='error-message'></span>
        </div>

        <div className="col-span-5 sm:col-span-1">
          <InputField 
            name='uf' 
            label='UF' 
            placeholder='UF' 
            value={userData.uf || ''}
            onChange={e => handleUserDataChange('uf', e.target.value)}
          />
          <span className='error-message'></span>
        </div>
      </div>
      {loading && <LoadingSpinner />}
    </div>
  );
};
