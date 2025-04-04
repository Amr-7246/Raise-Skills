'use client'
import React, { useState } from 'react'
import { GiSpeaker } from "react-icons/gi";
import { IoCopy } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";
import { translate } from '@/app/services/api';

// ? Data type
    type InputType = {
        from: string ,
        to: string ,
        InputText : string
    }
// ? Data type

const TranslatCard = () => {
// *  ################ State Hook
    const [Input, setInput] = useState<InputType>({
        from: '' ,
            to: '' ,
            InputText : ''
        })
    const [Result, setResult] = useState<string>('')
// *  ################ State Hook
// *  ################ Logic
    // & Data Collection
        const InputCollector = (field: keyof InputType , value: string) => {
            setInput( (pre) => ({
                    ...pre , [field] : value 
                }) )
        }
    // & Data Collection
    // & API Function
        const HandelSupmite = async () => {
            const response = await translate(Input['InputText'] , Input['from'] , Input['to'] )
            if (response.error) {
                setResult('Translation failed. Please try again.');
            } else {
                setResult(response); 
            }
        }
    // & API Function
// *  ################ Logic
// *  ################ Elementes
return (
    <div className='global-component bg-stone-300  ' >
        <div className='border-[1px] border-stone-700 rounded-md '>
            {/* textarea */}
                <div className='w-full'>
                    <textarea className='textarea' onChange={(e) => InputCollector( 'InputText' , e.target.value)} name="from"  placeholder='inter your text . . . ' />
                    <textarea className='textarea border-l-[1px] border-stone-700' name="" value={Result}/>
                </div>
            {/* textarea */}
            {/* Configuration */}
                <div className=' flex-col flex-center md:flex-row w-full px-4 py-2 border-t-[1px] border-stone-700 '>
                    {/* From */}
                        <div className='config '>
                            <div className='config-icons-div'>
                                <span className='config-icon'><GiSpeaker/></span>
                                <span className='config-icon'><IoCopy/></span>
                            </div>
                            <select className='language-select' onChange={(e) => InputCollector( 'from' , e.target.value)} name="" id="">
                                <option value="">Arabic</option>
                            </select>
                        </div>
                    {/* From */}
                    {/* Converter */}
                    <div className='border-y-[1px] border-stone-800 my-3 w-[400px] py-3 flex-center md:w-fit md:my-0 md:py-0 md:border-none '>
                        <span className=' bg-stone-800 mx-8 text-white hover:bg-transparent border-[1px] hover:border-stone-800 hover:text-stone-800 duration-700 cursor-pointer p-2 rounded-full   ' ><FaExchangeAlt/></span>
                    </div>
                    {/* Converter */}
                    {/* To */}
                        <div className='config '>
                            <div className='config-icons-div'>
                                <span className='config-icon'><GiSpeaker/></span>
                                <span className='config-icon'><IoCopy/></span>
                            </div>
                            <select  className='language-select' onChange={(e) => InputCollector( 'to' , e.target.value)} name="" id="">
                                <option value="">English</option>
                            </select>
                        </div>
                    {/* To */}
                </div>
            {/* Configuration */}
        </div>
        <button onClick={HandelSupmite}  className='bg-blue-700 py-3 mt-8 rounded-md border-[1px] duration-500 hover:bg-transparent hover:text-blue-700 hover:font-bold hover:border-blue-700 text-white flex-center w-full '> Translate</button>
    </div>
)
}
// *  ################ Elementes

export default TranslatCard