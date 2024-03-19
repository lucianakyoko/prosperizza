import NextLink from "next/link";
import { ProsperizzaLogo } from "../Logo";
import { navLinks } from "./navLinks";
import { UserButton } from "./UserButton";
import { BagButton } from "./BagButton";

export const Navbar = () => {
  return (
    <nav className="layout-container py-4 sm:py-5 lg:py-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
      <ProsperizzaLogo />

      <div className="text-gray-100 w-full flex items-center justify-between sm:w-1/2">
        <div className="flex items-center gap-4 sm:gap-6">
          {navLinks.map(link => (
            <NextLink href={link.href} key={link.label}>
              <span className="text-lg lg:text-xl hover:text-yellow-100">{link.label}</span>
            </NextLink>
          ))}
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <UserButton />
          <BagButton />
        </div>
      </div>
    </nav>
  );
}