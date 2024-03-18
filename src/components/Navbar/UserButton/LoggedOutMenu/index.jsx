import { SignIn, UserCircle } from "@phosphor-icons/react/dist/ssr";

export const LoggedOutMenu = ({openMenu, handleClick}) => {
  const className = `${openMenu ? 'flex' : 'none'} hover:text-yellow-200 w-full text-sm px-2 hover:cursor-pointer flex flex-row gap-2 items-center`;

  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-xs">Não logado</p>

      <div className="flex flex-col gap-4">
        <p className={className} onClick={handleClick}>
          <SignIn className="text-lg"/>
          Entrar
        </p>
        <p className={className} onClick={handleClick}>
          <UserCircle className="text-lg"/>
          Cadastrar conta
        </p>
      </div>
    </div>
  );
}