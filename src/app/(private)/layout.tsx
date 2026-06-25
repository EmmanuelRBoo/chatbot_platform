import type { LayoutProps } from '@/shared/types/layout'

import MenuScreen from '@/modules/menu/ui/menuScreen'

export default function AuthLayout(props: LayoutProps) {
    return (
        <div className='flex h-screen w-screen'>
           <MenuScreen />

           {props.children}
        </div>
    )
}