'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Navigation({ navLinks }) {
  const pathname = usePathname()
 
  return (
    <>
      {navLinks.map(({name, href}) => {
        const isActive = pathname === href
 
        return (
          <Link key={name} className={`${isActive ? "text-neutral-100" : "text-neutral-400"} font-medium  hover:underline`} href={href}>{name}</Link>
        )
      })}
    </>
  )
}