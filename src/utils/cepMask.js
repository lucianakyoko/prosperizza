export const cepMask = (cep) => {
  return cep.replace(/(\d{5})(\d)/, '$1-$2');
};