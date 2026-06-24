import type { DividerProps } from './types'

export function Divider(props: DividerProps) {
    return (
        <div className='w-full flex gap-2 items-center justify-center'>
            <div className='w-1/2 h-0.5 bg-gscale-400'/>
            <div className='text-nowrap'>{props.children}</div>
            <div className='w-1/2 h-0.5 bg-gscale-400'/>
        </div>
    )
}