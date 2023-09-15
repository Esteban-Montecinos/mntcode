import Link from "next/link";
import { Navigation } from "../ui/navigation";
import { components, started } from "../constants";

export default function RootLayout({ children }) {
    
    
    return (
        <main className="w-full m-auto max-w-7xl flex-1 items-start lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-1">
            <aside className="w-full hidden lg:sticky lg:block top-14 h-[calc(100vh-10rem)] pt-4 pl-2">
                <h4 className="text-sm font-semibold">Getting Started</h4>
                <div className="flex flex-col gap-2 pt-2 pb-4 text-sm">
                    <Navigation navLinks={started}/>
                    <Link className="font-medium text-neutral-400" href="https://tailwindcss.com/docs/installation" target="_blank">TailwindCSS</Link>
                </div>
                <h4 className="text-sm font-semibold">Components</h4>
                <div className="flex flex-col gap-2 pt-2 pb-4 text-sm">
                    <Navigation navLinks={components}/>
                </div>
            </aside>
            {children}
        </main>
    )
}