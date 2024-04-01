import NextLink from "next/link";
import { useContext } from "react";
import { SignIn, UserCircle, X } from "@phosphor-icons/react/dist/ssr";
import { LoginModal } from "@/components/LoginModal";
import { ModalContext } from "@/context/ModalContext";

export const LoggedOutMenu = ({ openMenu, handleClick }) => {
  const className = `
    ${openMenu ? 'flex' : 'none'} hover:text-yellow-200 w-full text-sm px-2 hover:cursor-pointer flex flex-row gap-2 items-center
  `;
  const {isOpen, openModal} = useContext(ModalContext);
  const handleOpenLoginModal = () => {
    openModal();
    handleClick
  };

  return (
    <div className="relative mt-5">
      <X onClick={handleClick} className="absolute top-[-24px] right-3 hover:text-yellow-200 cursor-pointer" />
      <div className="flex flex-col items-center gap-8">
        <p className="text-xs text-center pb-2 border-b-2 border-dashed border-brown-100 w-full">Não logado</p>

        <div className="flex flex-col gap-4">
          <p className={className} onClick={handleOpenLoginModal}>
            <SignIn className="text-lg" />
            Entrar
          </p>
          <NextLink href='/cadastro'>
            <p className={className} onClick={handleClick}>
              <UserCircle className="text-lg" />
              Cadastrar conta
            </p>
          </NextLink>
        </div>
      </div>
      {isOpen && <LoginModal handleClick={handleClick}/>}
    </div>
  );
}