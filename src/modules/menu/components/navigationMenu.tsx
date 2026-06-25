'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChartLineUpIcon, GearIcon, RobotIcon, PlusIcon } from '@phosphor-icons/react/ssr'

import { Button } from '@/shared/components'

const paths = {
    '/dashboard': <><ChartLineUpIcon size={30} /> <p>Dashboard</p></>,
    '/my-bots': <><RobotIcon size={30}/> <p>My Bots</p></>,
    '/settings': <><GearIcon size={30} /> <p>Settings</p></>,
}

export function NavigationMenu() {
    const path = usePathname()

    const router = useRouter()

    return (
        <div className='flex flex-col justify-between h-full p-2'>
            <nav className='text-primary-100 '>
                {
                    Object.entries(paths).map(([key, value]) => (
                        <Link 
                            key={key}
                            href={key}
                            className={`${key == path ? 'border-e-2 border-e-primary-400 brightness-150 bg-gscale-500 font-semibold' : ''} flex items-center gap-4 justify-self-start pl-6 py-3 rounded-md cursor-pointer w-full mt-2`}
                        >
                            {value}
                        </Link>
                    ))
                }           
            </nav>

            <Button onClick={() => router.push('/new-bot')}>
                <PlusIcon size={24} weight='bold'/>
                <p>Create New Bot</p>
            </Button>
        </div>
        
    )
}