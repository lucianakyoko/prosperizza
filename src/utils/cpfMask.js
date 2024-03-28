export const cpfMask = (cpf) => {
  const cleanedCPF = cpf.replace(/\D/g, '');

  let maskedCPF = cleanedCPF.replace(/(\d{3})(\d)/, '$1.$2');
  maskedCPF = maskedCPF.replace(/(\d{3})(\d)/, '$1.$2');
  maskedCPF = maskedCPF.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  return maskedCPF;
};