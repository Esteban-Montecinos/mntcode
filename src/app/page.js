import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-2 m-auto max-w-7xl">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">Build your component library.</h1>
      <span className="text-lg text-neutral-400">Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.</span>
      <Link target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm transition-colors duration-200 ease-in-out border rounded-md w-28 h-9 border-neutral-700 hover:bg-neutral-700" href="https://github.com/Esteban-Montecinos/mntui"><IconBrandGithub/> GitHub</Link>
    </main>
  )
}
