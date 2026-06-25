export type InputProps = {
    name: string
    label: string
    placeholder: React.ReactNode
}

export type TextProps = InputProps & {
    onChange: (value: string) => void
    type?: 'email' | 'text'
    value?: string
}

export type PasswordProps = InputProps & {
    onChange: (value: string) => void
    value?: string
    showForgot?: () => void
}