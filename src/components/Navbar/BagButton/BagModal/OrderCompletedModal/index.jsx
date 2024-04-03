import { Modal } from "@/components/Modal";
import { Title } from "@/components/Title";
import { Smiley } from "@phosphor-icons/react/dist/ssr";

export const OrderCompletedModal = ({onClick}) => {
  return (
    <Modal>
      <div className="text-gray-850 flex flex-col gap-12 items-center">
        <div className="flex flex-col gap-4 items-center">
          <Smiley className="text-6xl" />
          <Title type='dark'>Compra finalizada!</Title>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-3xl font-bold">Oba!</p>
          <p className="text-2xl">Sua pizza já está a caminho!</p>
        </div>
        <button onClick={onClick} className="primary-button w-2/6">Fechar</button>
      </div>

    </Modal>
  );
}