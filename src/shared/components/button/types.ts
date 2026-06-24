export type ButtonProps = {
    children: React.ReactNode | React.ReactNode[]
    variant?: 'primary' | 'secondary' | 'ghost'
    type?: 'submit' | 'button'
    shadow?: boolean
    onClick?: () => void
}