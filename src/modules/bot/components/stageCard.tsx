import type { StageCardProps } from '../types/createBot'

export function StageCard(props: StageCardProps) {
    return (
        <div className={`flex text-primary-100 items-center gap-4 ${props.selected ? 'font-semibold' : ''}`}>
            <div className={`${props.selected ? 'bg-primary-100 text-primary-700' : ''} text-2xl rounded-2xl border w-12 h-12 flex justify-center items-center`}>
                {props.stage}
            </div>

            <p className='text-xl'>{props.name}</p>
        </div>
    )
}