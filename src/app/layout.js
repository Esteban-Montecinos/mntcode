import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MntUI - Tailwind CSS",
  description: "Copy and paste styles from MntUI to your project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-neutral-950 text-neutral-50`}>
        <header className="sticky top-0 flex flex-row w-full border-b backdrop-blur-md border-neutral-700 ">
          <div className="flex flex-row items-center justify-between w-full p-2 m-auto max-w-7xl h-14">
            <nav className="flex flex-row items-center w-full gap-6">
              <span className="text-3xl font-light">MntUI</span>
              <Link className="font-medium text-neutral-400" href="/docs">
                Docs
              </Link>
              <Link
                className="font-medium text-neutral-400"
                href="/docs/components/alert"
              >
                Components
              </Link>
            </nav>
            <div className="flex flex-row items-center justify-end w-full gap-2 ">
              <Link href="https://github.com/Esteban-Montecinos" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </div>
          </div>
        </header>
        {children}
        <footer className="flex flex-row w-full border-t border-neutral-700">
          <div className="flex flex-row items-center w-full h-24 px-2 py-4 m-auto max-w-7xl">
            <p className="text-sm text-neutral-400">
              Construido por{" "}
              <Link
                href="https://github.com/Esteban-Montecinos"
                className="font-medium underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Esteban-Montecinos
              </Link>
              . El código fuente está disponible en{" "}
              <Link
                href="https://github.com/Esteban-Montecinos"
                className="font-medium underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              .
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
