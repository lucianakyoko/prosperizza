import NextLink from "next/link";
import { pacificoFont } from "@/components/Logo";

export const HeroSection = () => {
  return(
    <section className="bg-table bg-fixed bg-no-repeat bg-cover py-6">
      <div className="layout-container flex flex-col items-center justify-center gap-6 sm:flex-row-reverse sm:justify-between">
        <div className="w-[160px] sm:w-[330px] lg:w-[464px] h-[160px] sm:h-[330px] lg:h-[464px] bg-pizza bg-no-repeat bg-contain"></div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-20 items-center text-gray-100">
            <h1 className={`${pacificoFont.className} text-5xl sm:text-6xl lg:text-8xl`}>Prosperizza</h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-center px-4">Alimentando as mentes famintas dos devs.</p>
          </div>
          <span className="button w-fit">
            <NextLink href='/cardapio'>Abrir cardápio</NextLink>
          </span>
        </div>
      </div>
    </section>
  );
}