import { PromptStage, CreateBotHeader, CreateBotFooter } from '../components'

export default function CreateBotScreen() {
    return (
        <main className='flex flex-col flex-1 gap-20'>
            <CreateBotHeader />

            <PromptStage />

            <CreateBotFooter />
        </main>
    )
}