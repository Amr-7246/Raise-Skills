import React from 'react'

const Editor = () => {
return (
    <div className='global-component bg-white !border-sky-400 flex flex-wrap ' >
        <h1 className='p-3 font-bold w-full' >Editor</h1>
        <div className='flex flex-wrap gap-x-2 w-full '>
            <div className=' w-[100%] md:w-[58%] flex-center min-h-[300px] '> Image right here </div>
            <div className=' w-[100%] md:w-[38%] flex-center min-h-[300px] '> Configuration right here</div>
        </div>
        <div className='flex justify-between w-full '>
            <button className='button ' >Reset</button>
            <div className='flex gap-x-4 '>
                <button className='button ' >Save Image</button>
                <button className='button !bg-stone-800 hover:!bg-transparent hover:text-stone-900  hover:border-stone-900 !text-stone-400 ' >Upload Image</button>
            </div>
        </div>
    </div>
)
}

export default Editor