"use client";

import { usePathname } from "next/navigation";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

export function Navigation({ navLinks }) {
  const pathname = usePathname();

  return navLinks.map(({ name, href }) => {
    const isActive = pathname === href;

    return (
      <Link
        key={name}
        as={NextLink}
        color={isActive ? "success" : "foreground"}
        className="w-full hover:underline"
        href={href}
        size="md"
      >
        {name}
      </Link>
    );
  });
}
