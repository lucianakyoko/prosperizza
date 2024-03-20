import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Prosperizza",
  description: "A pizzaria favorita dos devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="w-full bg-gray-900">
          <Navbar />
        </header>

          {children}

        <footer className="w-full bg-gray-900">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
