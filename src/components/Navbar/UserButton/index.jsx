'use client';

import { ModalProvider } from "@/context/ModalContext";
import { User } from "@phosphor-icons/react/dist/ssr";
import { LoggedInMenu } from "./LoggedInMenu";
import { useState } from "react";
import { LoggedOutMenu } from "./LoggedOutMenu";

export const UserButton = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isLoggedIn = false;
  const handleClick = () => setOpenMenu(!openMenu);
  
  return (
    <div className="relative">
      <User 
        className=" hover:text-yellow-100 text-2xl hover:cursor-pointer"
        onClick={handleClick}
      />

      <ModalProvider>
        <div className={`${openMenu ? 'block' : 'hidden'} absolute bg-gray-900 right-0 py-8 w-[180px] rounded-b-2xl`}>
          {isLoggedIn ? 
            <LoggedInMenu openMenu={openMenu} handleClick={handleClick} /> 
            : 
            <LoggedOutMenu openMenu={openMenu} handleClick={handleClick} />
          }
        </div>
      </ModalProvider>
    </div>
  );
}