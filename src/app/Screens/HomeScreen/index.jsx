import { ModalProvider } from "@/context/ModalContext";
import { getPizzas } from "@/actions/pizzaActions";
import { dbConnect } from "@/services/dbConnect";

import { FavoritesSection } from "./FavoritesSection";
import { HeroSection } from "./HeroSection";
import { PromotionSection } from "./PromotionSection";
import { WhatsNewsSection } from "./WhatsNewsSection";
import { PhraseSection } from "./PhraseSection";

export const HomeScreen = async () => {
  await dbConnect();
  const pizzas = await getPizzas();
  const news = pizzas.filter(pizza => pizza.category === 'Novidades');

  return (
    <main>
        <HeroSection />
          <ModalProvider>
            <div className="layout-container flex flex-col gap-10 sm:gap-11 lg:gap-20">
              <FavoritesSection pizzas={pizzas} />
              <PromotionSection />
              <WhatsNewsSection pizzas={news} />

              <PhraseSection />
            </div>
          </ModalProvider>
    </main>
  );
}