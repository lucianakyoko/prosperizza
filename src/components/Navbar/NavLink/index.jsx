'use client';

import NextLink from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({link}) => {
  const pathname = usePathname();

  return (
    <NextLink href={link.href} key={link.label}>
      <span 
        className={`${pathname === link.href ? 'text-yellow-100' : ''} text-lg lg:text-xl hover:text-yellow-100`}
      >
        {link.label}
      </span>
    </NextLink>
  )
}