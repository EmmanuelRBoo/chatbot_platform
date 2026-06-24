import AuthScreen from '@/modules/auth/ui/authScreen'
import SidePanelScreen from '@/modules/auth/ui/sidePanelScreen'

export default function AuthPage() {
    return (
        <main className='flex'>
            <AuthScreen/>

            <SidePanelScreen/>
        </main>
    )
}