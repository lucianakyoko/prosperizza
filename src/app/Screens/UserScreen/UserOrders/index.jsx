import { OrderItem } from "./OrderItem";

export const UserOrders = () => {
  return (
    <div className="min-h-screen w-full mt-12 md:w-6/12">
      <table className="p-4 w-full">
        <thead className="bg-gray-850 text-brown-50">
          <tr>
            <th className="text-center py-8"></th>
            <th className="w-1/4 text-center">Pedido</th>
            <th className="w-1/4 text-center">Data</th>
            <th className="w-1/4 text-center">R$ Total</th>
          </tr>
        </thead>
        <tbody>
          <OrderItem />
        </tbody>
      </table>
    </div>
  );
}