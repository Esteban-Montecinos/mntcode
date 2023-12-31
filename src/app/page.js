import { IconAlertTriangle, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-6 p-2 m-auto max-w-7xl">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter mt-14 md:text-5xl">Tips and tricks about Next.js components.</h1>
      <span className="text-lg text-neutral-400">Next.js components that you can copy and paste into your apps, customizable and open source.</span>
      <Link target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm transition-colors duration-200 ease-in-out border rounded-md w-28 h-9 border-neutral-700 hover:bg-neutral-700" href="https://github.com/Esteban-Montecinos/mntcode"><IconBrandGithub/> GitHub</Link>
      <div className="flex items-center w-full gap-4 px-4 py-2 text-yellow-100 rounded-md bg-yellow-950">
          <IconAlertTriangle />
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Work in progress</p>
            <p className="text-sm">very soon available!</p>
          </div>
        </div>
    </main>
  )
}
