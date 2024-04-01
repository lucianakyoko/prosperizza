import { Modal } from "@/components/Modal";
import { Title } from "@/components/Title";
import { ModalContext } from "@/context/ModalContext";
import { Warning  } from "@phosphor-icons/react/dist/ssr";
import NextLink from "next/link";
import { useContext } from "react";

export const ErrorRegisterModal = () => {
  const {closeModal} = useContext(ModalContext);
  return (
    <Modal>
      <div className="flex flex-col gap-6 py-10 lg:py-20 w-full lg:w-[540px] m-auto">
        <div className="flex flex-col gap-4 items-center mb-16 sm:mb-10">
          <Warning  className="text-4xl text-red-100" />
          <Title type="dark">Erro</Title>
        </div>
        <div className="flex flex-col gap-6 pb-8 items-center text-gray-850" >
          <p className="text-3xl">Usuário já cadastrado!</p>
          <p className="text-lg">Por favor, cadastre um novo e-mail.</p>
        </div>
        <span onClick={() => closeModal()}className="primary-button cursor-pointer w-1/2 m-auto">
          <NextLink href='/cadastro'>Entendi</NextLink>
        </span>
      </div>
    </Modal>
  );
}