"use client";

import { usePathname } from "next/navigation";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { NavbarMenuItem } from "@nextui-org/navbar";

export default function NavigationList({ navLinks }) {
  const pathname = usePathname();

  return navLinks.map(({ name, href }) => {
    const isActive = pathname === href;

    return (
      <NavbarMenuItem key={name}>
        <Link
          as={NextLink}
          color={isActive ? "success" : "foreground"}
          className="w-full hover:underline"
          href={href}
          size="md"
        >
          {name}
        </Link>
      </NavbarMenuItem>
    );
  });
}
