"use client";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarBrand,
} from "@nextui-org/navbar";
import { IconBrandGithub } from "@tabler/icons-react";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { useState } from "react";
import { components, started } from "../constants";
import NavigationList from "./navigation-list";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent aria-label="open navigation menu MntCode">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="lg:hidden"
        />
        <NavbarBrand aria-label="MntCode">
          <Link
            color="foreground"
            as={NextLink}
            href="/"
            className="font-bold text-inherit"
          >
            *MntCode
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 lg:flex" justify="start">
        <NavbarItem>
          <Link color="foreground" as={NextLink} href="/docs">
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            as={NextLink}
            href="/docs/components/error-action"
          >
            Components
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            as={NextLink}
            target="_blank"
            className="p-2 rounded-full hover:bg-neutral-700"
            href="https://github.com/Esteban-Montecinos/mntcode"
            aria-label="GitHub source MntCode"
          >
            <IconBrandGithub />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <h4 className="text-lg font-semibold">Getting Started</h4>
        </NavbarMenuItem>
        <NavigationList navLinks={started} />
        <NavbarMenuItem>
          <Link
            className="w-full hover:underline"
            color="foreground"
            size="md"
            as={NextLink}
            href="https://nextjs.org/docs"
            target="_blank"
          >
            Next.js
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full hover:underline"
            color="foreground"
            size="md"
            as={NextLink}
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
          >
            TailwindCSS
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <h4 className="text-lg font-semibold">Components</h4>
        </NavbarMenuItem>
        <NavigationList navLinks={components} />
      </NavbarMenu>
    </Navbar>
  );
}
