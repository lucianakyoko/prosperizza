import NextLink from "next/link";
import { Title } from "@/components/Title";
import { SmileyXEyes } from "@phosphor-icons/react/dist/ssr";

export const PageNotFoundScreen = () => {
  return (
    <main className="layout-container mt-7 sm:mt-9 lg:mt-12">
      <div className="flex flex-col gap-6 items-center my-12 lg:my-24">
        <div className="flex flex-col items-center gap-6">
          <Title type='dark'>Erro 404 - Página não encontrada</Title>
          <SmileyXEyes weight='thin' className="text-7xl sm:text-9xl text-brown-150" />
        </div>

        <div className="flex flex-col gap-5 items-center w-[300px] lg:w-[640px]">
          <p className="text-base text-center">"Oops! Parece que esta fatia de página está fora do cardápio!"</p>
          <NextLink href='/'>
            <span className="primary-button w-fit">Voltar para Home</span>
          </NextLink>
        </div>
      </div>
    </main>
  );
}