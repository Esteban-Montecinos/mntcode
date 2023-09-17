import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Menu from "./ui/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MntCode - Next.js",
  description: "Copy and paste components from MntUI to your project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className} bg-neutral-950 text-neutral-50`}>
        <Providers>
          <Menu/>
          <main className="min-h-screen m-auto max-w-7xl">
            {children}
          </main>
          <footer className="flex flex-row w-full border-t border-neutral-700">
            <div className="flex flex-row items-center w-full h-24 px-2 py-4 m-auto max-w-7xl">
              <p className="text-sm text-neutral-400">
                Built by{" "}
                <Link
                  href="https://github.com/Esteban-Montecinos"
                  className="font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Esteban-Montecinos
                </Link>
                . The source code is available on{" "}
                <Link
                  href="https://github.com/Esteban-Montecinos/mntui"
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
        </Providers>
      </body>
    </html>
  );
}
