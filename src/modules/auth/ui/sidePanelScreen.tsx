export default function SidePanelScreen() {
    return (
        <div className='w-1/2 h-screen bg-gscale-400'>
            <div className='h-2/3 relative'>
                <div className='w-96 h-96 absolute top-86 left-1/2 -translate-1/2 rounded-xl border border-tertiary-100'></div>
                <div className='w-80 h-80 absolute top-86 left-1/2 -translate-1/2 motion-safe:animate-[spin_10s_linear_infinite] rounded-xl border border-secondary-100' >
                    <div className='relative'>
                        <div className='w-8 h-8 shadow-[0_0_30px_var(--color-secondary-100)] bg-secondary-100 rounded-full absolute -translate-1/2 top-39 left-0'/>
                    </div>
                </div>

                <div className='bg-gscale-500 flex flex-col gap-4 w-sm p-8 rounded-lg opacity-75 absolute top-24 left-28 float-animation float-1'>
                    <p className='flex gap-2 items-center text-white font-bold'><span className='w-4 h-4 bg-secondary-200 rounded-full'/> NODE_01: ACTIVE</p>

                    <div className='h-2 bg-primary-100 w-full rounded-full opacity-20'/>
                    <div className='h-2 bg-primary-100 w-3/4 rounded-full opacity-20'/>
                </div>

                <div className='bg-gscale-500 flex flex-col gap-4 w-sm p-8 rounded-lg opacity-75 absolute top-120 left-116 float-animation float-2'>
                    <p className='flex gap-2 items-center text-white font-bold'><span className='w-4 h-4 bg-tertiary-200 rounded-full'/>TRAINING_SET_COMPLETE</p>

                    <div className='flex items-center justify-between gap-4'>
                        <div className='h-8 w-full bg-primary-200 rounded-sm opacity-30'/>
                        <div className='h-8 w-full bg-primary-100 rounded-sm opacity-30'/>
                        <div className='h-8 w-full bg-primary-300 rounded-sm opacity-30'/>
                        <div className='h-8 w-full bg-primary-100 rounded-sm opacity-30'/>
                    </div>
                </div>
            </div>

            <p className='text-5xl text-center text-primary-100 mx-50 mb-10'>Empowering the Future of Automation</p>

            <p className='text-xl text-center text-primary-100 mx-50'>Join over 10,000+ developers building high-performance AI agents and automated workflows with BotCraft.</p>
        </div>
    )
}