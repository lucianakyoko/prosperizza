import { ModalProvider } from "@/context/ModalContext";
import { dbConnect } from "@/services/dbConnect";
import { getPizzas } from "@/actions/pizzaActions";

import { Title } from "@/components/Title";
import { MenuContent } from "./MenuContent";

export const MenuScreen = async () => {
  await dbConnect();
  const pizzas = await getPizzas();

  return (
    <main className="layout-container mt-7 sm:mt-9 lg:mt-12">
      <Title type="dark">Cardápio</Title>

      <ModalProvider>
        <MenuContent pizzas={pizzas} />
      </ModalProvider>
    </main>
  );
}