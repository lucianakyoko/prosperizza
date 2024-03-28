export const cepMask = (cep) => {
  const cleanedCEP = cep ? cep.replace(/\D/g, '') : ''; 
  let maskedCEP = cleanedCEP.replace(/(\d{5})(\d)/, '$1-$2');

  return maskedCEP;
};