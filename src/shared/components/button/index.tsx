import type { ButtonProps } from './types'

export function Button(props: ButtonProps) {
    const renderVariant = () => {
        if (props.variant == 'secondary') {
            return `bg-gscale-400 ${props.shadow ? 'shadow-[0_0_10px_var(--color-gscale-400)]': ''}`
        }

        return `bg-primary-500 ${props.shadow ? 'shadow-[0_0_10px_var(--color-primary-500)]': ''}`
    }
    return (
        <button
            className={`${renderVariant()} flex items-center justify-center gap-2 cursor-pointer hover:brightness-130 text-xl font-semibold py-4 rounded-sm active:scale-98 duration-75`}
            onClick={props.onClick}
            type={props.type || 'button'}
        >
            {props.children}
        </button>
    )
}