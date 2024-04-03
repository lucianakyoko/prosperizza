import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrderProvider } from "@/context/OrderContext";
import { AuthContextProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Prosperizza",
  description: "A pizzaria favorita dos devs",

};

export default async function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-150">
        <link rel="icon" href="/icon.png" />
        <AuthContextProvider>
            <OrderProvider>
              <header className="w-full bg-gray-900">
                <Navbar />
              </header>

              {children}
            </OrderProvider>

          <footer className="w-full bg-gray-900">
            <Footer />
          </footer>
        </AuthContextProvider>
      </body>
    </html>
  );
}
