export type InputProps = {
    name: string
    label: string
    placeholder: React.ReactNode
}

export type TextProps = InputProps & {
    type?: 'email' | 'text'
    value: string
    onChange: (value: string) => void
}

export type PasswordProps = InputProps & {
    value: string
    onChange: (value: string) => void
    showForgot?: boolean
}