import Link from "next/link";
import { Navigation } from "../ui/navigation";

export default function RootLayout({ children }) {
    const started = [
        {name: "Introduction", href: "/docs"}
    ]
    const components = [
        {name: "Alert", href: "/docs/components/alert"},
        {name: "Avatar", href: "/docs/components/avatar"},
        {name: "Badge", href: "/docs/components/badge"},
        {name: "Button", href: "/docs/components/button"},
        {name: "Card", href: "/docs/components/card"},
        {name: "Divider", href: "/docs/components/divider"},
        {name: "Form", href: "/docs/components/form"},
        {name: "Input", href: "/docs/components/input"},
        {name: "Label", href: "/docs/components/label"},
        {name: "Skeleton", href: "/docs/components/skeleton"},
        {name: "Spinner", href: "/docs/components/spinner"},
        {name: "Table", href: "/docs/components/table"},
        {name: "Textarea", href: "/docs/components/textarea"},
        {name: "User", href: "/docs/components/user"},
    ]
    return (
        <main className="w-full m-auto max-w-7xl grid grid-cols-[220px_minmax(0,1fr)]">
            <aside className="w-full sticky top-14 h-[calc(100vh-10rem)] pt-4 pl-2">
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