import axios from "axios";

export const fetchCEP = async cep => {
  try { 
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;

  } catch (error) {
    console.log(error);
    return null;
  }
}