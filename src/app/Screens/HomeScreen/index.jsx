import { ModalProvider } from "@/context/ModalContext";

import { FavoritesSection } from "./FavoritesSection";
import { HeroSection } from "./HeroSection";
import { PromotionSection } from "./PromotionSection";
import { WhatsNewsSection } from "./WhatsNewsSection";
import { PhraseSection } from "./PhraseSection";
import { pizzas } from "@/pizzas";

export const HomeScreen = () => {
  const news = pizzas.filter(pizza => pizza.category === 'Novidades');

  return (
    <main>
        <HeroSection />
          <ModalProvider>
            <div className="layout-container flex flex-col gap-10 sm:gap-11 lg:gap-20">
              <FavoritesSection pizzas={pizzas} />
              <PromotionSection pizzas={pizzas} />
              <WhatsNewsSection pizzas={news} />
              <PhraseSection />
            </div>
          </ModalProvider>
    </main>
  );
}