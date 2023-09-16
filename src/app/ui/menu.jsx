"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/navbar";
import { IconBrandGithub } from "@tabler/icons-react";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { useState } from "react";
import { Navigation } from "./navigation";
import { components, started } from "../constants";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">MntUI</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 lg:flex" justify="start">
        <NavbarItem>
          <Link color="foreground" as={NextLink} href="/docs">
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" as={NextLink} href="/docs/components/error-action">Components</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            as={NextLink}
            target="_blank"
            className="p-2 rounded-full hover:bg-neutral-700"
            href="https://github.com/Esteban-Montecinos/mntui"
            aria-label="GitHub source MntUI"
          >
            <IconBrandGithub />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <h4 className="text-lg font-semibold">Getting Started</h4>
          <Navigation navLinks={started} />
          <Link
            color="foreground"
            size="md"
            as={NextLink}
            href="https://nextjs.org/docs"
            target="_blank"
          >
            Next.js
          </Link>
          <Link
            color="foreground"
            size="md"
            as={NextLink}
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
          >
            TailwindCSS
          </Link>
          <h4 className="text-lg font-semibold">Components</h4>
          <Navigation navLinks={components} />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
