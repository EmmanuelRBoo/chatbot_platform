'use client'

import { usePathname } from 'next/navigation'

import { HeaderMenu, NavigationMenu, FooterMenu  } from '../components'

export default function MenuScreen() {
    const path = usePathname()
    
    if (path == '/new-bot') return null

    return (
        <aside className='flex flex-col h-full min-w-80 bg-gscale-600'>
            <HeaderMenu />

            <NavigationMenu />

            <FooterMenu />
        </aside>
    )
}