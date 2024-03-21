import { SpinnerGap } from "@phosphor-icons/react/dist/ssr";

export const LoadingSpinner = () => {
  return (
    <div className="w-screen h-screen bg-black-900 fixed top-0 left-0 z-20 flex justify-center md:items-center">
      <div className="flex flex-col gap-4 items-center">
        <SpinnerGap className="text-5xl text-yellow-200 animate-spin"/>
        <span className="text-gray-150 text-xl">carregando</span>
      </div>
    </div>
  );
};