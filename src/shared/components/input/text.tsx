import type { TextProps } from './types'

export default function Text(props: TextProps) {
    return (
        <label 
            htmlFor={props.name}
            className='w-full text-xl font-semibold'
        >
            <p>{props.label}</p>

            <div className='relative mt-2'>
                <input
                    id={props.name}
                    name={props.name}
                    type={props.type || 'text'}
                    className='w-full rounded-sm bg-gscale-400 py-4 px-8 focus:ring focus:ring-primary-200'
                    value={props.value}
                    onChange={({ target }) => props.onChange(target.value)}
                />

                {
                    props.value == '' 
                    ? (
                        <div className='absolute flex items-center gap-4 cursor-text -translate-y-1/2 top-1/2 left-8 opacity-40'>
                            {props.placeholder}
                        </div>
                    )
                    : null
                }
            </div>
        </label>
    )
}