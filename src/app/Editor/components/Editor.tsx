import React from 'react'

const Editor = () => {
return (
    <div className='global-component !border-sky-400 flex flex-wrap ' >
        <h1 className='p-3 font-bold' >Editor</h1>
        <div className='flex flex-wrap gap-x-2 '>
            <div className=' w-[100%] md:w-[58%]  '></div>
            <div className=' w-[100%] md:w-[38%]  '></div>
        </div>
        <div className='flex justify-between '>
            <div>
                <button className='button' >Save Image</button>
                <button className='button !bg-stone-900 !hover:text-stone-900 !hover:border-stone-900 ' >Upload Image</button>
            </div>
            <button className='button ' >Reset</button>
        </div>
    </div>
)
}

export default Editor