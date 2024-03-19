import NextLink from "next/link";
import { Pacifico } from "next/font/google";
import { Pizza } from "@phosphor-icons/react/dist/ssr";

 export const pacificoFont = Pacifico({
  subsets: ['latin'],
  weight: ['400']
})

export const ProsperizzaLogo = () => {
  return (
    <NextLink href='/'>
      <span className="text-yellow-100 flex items-center gap-2">
        <Pizza weight='light' size={32}/>
        <span 
          className={`${pacificoFont.className} text-xl md:text-2xl`}
        >
          Prosperizza
        </span>
      </span>
    </NextLink>
  );
}