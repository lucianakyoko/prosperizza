import { ModalProvider } from "@/context/ModalContext";
import { RegisterSteps } from "./RegisterSteps";

export const RegisterScreen = () => {
 
  return (
    <main className="layout-container flex flex-col items-center gap-6">
      <ModalProvider>
        <RegisterSteps />
      </ModalProvider>
    </main>
  );
}