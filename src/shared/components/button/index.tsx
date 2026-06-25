import { CircleNotchIcon } from '@phosphor-icons/react/ssr'

import type { ButtonProps } from './types'

export function Button(props: ButtonProps) {
    const renderVariant = () => {
        switch(props.variant) {
            case 'primary': return `bg-primary-500 ${props.shadow ? 'shadow-[0_0_10px_var(--color-primary-500)]': ''}`
            case 'secondary': return `bg-gscale-400 ${props.shadow ? 'shadow-[0_0_10px_var(--color-gscale-400)]': ''}`
            case 'light': return `bg-gscale-100 text-primary-700 ${props.shadow ? 'shadow-[0_0_10px_var(--color-gscale-100)]': ''}`
            default: return `bg-primary-500 ${props.shadow ? 'shadow-[0_0_10px_var(--color-primary-500)]': ''}`
        }   
    }
    return (
        <button
            className={`${renderVariant()} px-4 max-h-13 flex items-center justify-center gap-2 cursor-pointer hover:brightness-130 text-xl font-semibold py-3 rounded-sm active:scale-98 duration-75`}
            onClick={props.onClick}
            type={props.type || 'button'}
        >
            {props.loading ? <CircleNotchIcon weight='bold' size={30} className='animate-spin' /> : props.children}
        </button>
    )
}