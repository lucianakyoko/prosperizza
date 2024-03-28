import { ModalProvider } from "@/context/ModalContext";
import { RegisterSteps } from "./RegisterSteps";
import { UserDataProvider } from "@/context/UserDataContext";

export const RegisterScreen = () => {
 
  return (
    <main className="layout-container flex flex-col items-center gap-6">
      <ModalProvider>
        <UserDataProvider>
          <RegisterSteps />
        </UserDataProvider>
      </ModalProvider>
    </main>
  );
}