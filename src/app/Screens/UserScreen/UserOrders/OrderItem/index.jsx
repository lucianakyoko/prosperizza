export const OrderItem = () => {
  const style = `w-1/4 text-center border-r-2 border-x-brown-100 border-dashed p-3`;

  return (
    <tr className="text-gray-850 border-b-2 border-x-brown-100">
      <td className="text-center">
        <img 
          src="/test-img.png"  
          alt="Imagem do Produto" 
          className={`w-[60px] rounded-full border-r-2 border-x-brown-100 border-dashed p-3`}
        />
      </td>
      <td className={style}>123456</td>
      <td className={style}>31/03/2024</td>
      <td className="w-1/4 text-center">R$ 50,00</td>
    </tr>
  );
}