import { Title } from "@/components/Title";
import { UserOrders } from "./UserOrders";

export const UserScreen = () => {
  return (
    <main className="layout-container flex flex-col items-center gap-6 py-9">
      <Title type='dark'>Seus Pedidos</Title>
      <UserOrders />
    </main>
  );
}