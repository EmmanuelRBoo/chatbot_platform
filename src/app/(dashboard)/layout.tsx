import type { LayoutProps } from '@/shared/types/layout'

export default function AuthLayout(props: LayoutProps) {
    return (
        <main>
            teste
            {props.children}
        </main>
    )
}