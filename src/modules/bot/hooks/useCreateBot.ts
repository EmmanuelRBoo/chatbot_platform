import { useCreateBotStore } from '../stores/createBot'

export function useCreateBot(){
    const { stage, setStage } = useCreateBotStore()
    
    const nextStage = () => stage < 3 && setStage(stage + 1)

    const prevStage = () => stage > 1 && setStage(stage - 1)

    const fetchPromptStage = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 3000))

            nextStage()
        }
        catch(err) {
            console.log(err)
        } finally {

        }
    }
    
    return {
        stage,
        fetchPromptStage,
        prevStage
    }
}