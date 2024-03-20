
import { Title } from "@/components/Title";
import { FilterItem } from "./FilterItem";
import { MenuList } from "./MenuList";
import { ModalProvider } from "@/context/ModalContext";

export const MenuScreen = () => {

  return (
    <main className="layout-container mt-7 sm:mt-9 lg:mt-12">
      <Title type="dark">Cardápio</Title>

      <ModalProvider>
        <ul className="flex gap-3 flex-wrap pt-5 lg:pt-6">
          <FilterItem tagName='Todos' />
          <FilterItem tagName='Clássicas' />
          <FilterItem tagName='Especiais' />
          <FilterItem tagName='Vegetarianas' />
          <FilterItem tagName='Gourmet' />
          <FilterItem tagName='Doces' />
        </ul>

        <MenuList />
      </ModalProvider>
    </main>
  );
}