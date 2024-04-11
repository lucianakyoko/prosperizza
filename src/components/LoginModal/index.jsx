import { useContext, useState } from "react";
import { Eye, EyeClosed, SignIn  } from "@phosphor-icons/react/dist/ssr";
import { AuthContext } from "@/context/AuthContext";
import { InputField } from "@/components/InputField";
import { Modal } from "@/components/Modal";
import { Title } from "@/components/Title";
import { LoadingSpinner } from "../LoadingSpinner";
import { ModalContext } from "@/context/ModalContext";
import { useRouter } from "next/navigation";
import NextLink from 'next/link'

export const LoginModal = ({alternativeText='', handleModal}) => {
  const {closeModal} = useContext(ModalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const{login, loginErrorMessage, isAuthenticated, isChecking} = useContext(AuthContext);
  const router = useRouter();

  const handlePasswordToggle = () => setShowPassword(!showPassword);
  
  const handleSubmit = async e => {
    e.preventDefault();

    login(email, password);
    closeModal();
    router.push('/');
  }

  const signupClick = (e) => {
    handleModal();
    closeModal();
    router.push('/cadastro');
  };

  return (
    <Modal>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 pb-4 lg:pb-20 w-full lg:w-[540px] m-auto"
      >
        <div className="flex flex-col gap-4 items-center">
          <SignIn  className="text-4xl text-gray-850" />
          <Title type="dark">Fazer Login</Title>
        </div>
        <div className="flex flex-col gap-4" >
          <p className="text-gray-850 font-bold text-2xl">{alternativeText}</p>
          <p className="text-gray-850">Digite seu e-mail e senha:</p>
          <div className="flex flex-col gap-4 text-gray-850">
            <InputField 
              name='email' 
              label='E-mail' 
              placeholder='Digite seu e-mail' 
              type='email' 
              className=''
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className="relative">
              <InputField 
                name='password' 
                label='Senha' 
                placeholder='*****' 
                type={showPassword ? 'text' : 'password'} 
                className=''
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            {showPassword ?
              <Eye
                size={32}
                className="text-gray-850 absolute bottom-[12px] right-3 cursor-pointer"
                onClick={handlePasswordToggle}
              />
              :
              <EyeClosed
                size={32}
                className="text-gray-850 absolute bottom-[12px] right-3 cursor-pointer"
                onClick={handlePasswordToggle}
              />
            }
            </div>
            <span className="text-red-100">{loginErrorMessage}</span>
          </div>
        </div>
        <div className="text-gray-850 flex flex-col items-center m-auto w-1/2">
          <button type='submit' className="bg-yellow-100 primary-button w-full ">Entrar</button>
          
          <div className="flex flex-col gap-1 w-full items-center">
            <span>ou</span>
            <span onClick={signupClick} className="secondary-button w-full cursor-pointer">
              <span
              >Cadastrar</span>
            </span>
          </div>
        </div>
      </form>
      {isChecking && <LoadingSpinner text="Validando seus dados..." />}
    </Modal>
  );
}