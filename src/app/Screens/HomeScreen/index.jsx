import { ModalProvider } from "@/context/ModalContext";

import { FavoritesSection } from "./FavoritesSection";
import { HeroSection } from "./HeroSection";
import { PromotionSection } from "./PromotionSection";
import { WhatsNewsSection } from "./WhatsNewsSection";
import { PhraseSection } from "./PhraseSection";

export const HomeScreen = () => {
  return (
    <main>
        <HeroSection />
          <ModalProvider>
            <div className="layout-container flex flex-col gap-10 sm:gap-11 lg:gap-20">
              <FavoritesSection />
              <PromotionSection />
              <WhatsNewsSection />
              <PhraseSection />
            </div>
          </ModalProvider>
    </main>
  );
}