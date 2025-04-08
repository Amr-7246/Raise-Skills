'use client'
import React, { useState , useEffect } from 'react'
import { GiSpeaker } from "react-icons/gi";
import { IoCopy } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";
// import { translate } from '@/app/services/api';
import { useTranslateMutation } from '@/queries/Translation.queries';


// ? Data type
    type InputType = {
        from: string ,
        to: string ,
        InputText : string
    }
// ? Data type

const TranslatCard = () => {
// *  ################ Starte Hooks
const [Input, setInput] = useState<InputType>({
        from: 'arabic' ,
        to: 'english' ,
        InputText : ''
        })
        const [Result, setResult] = useState<string | undefined>('')
        const { mutate, data, isPending, error } = useTranslateMutation();
// *  ################ End Hooks
// *  ################ Logic
    // & Data Collection
        const InputCollector = (field: keyof InputType , value: string) => {
            setInput( (pre) => ({
                    ...pre , [field] : value 
                }) )
        }
    // & Data Collection
    // & API Function
        useEffect(() => {
            if (data) setResult(data);
        }, [data]);

        const HandleSubmit = () => {
            setResult('Loading...');
            mutate(
                { text: Input.InputText, from: Input.from, to: Input.to },
                {
                onSuccess: (data) => {
                    setResult(data);
                },
            }
            );
        };
    // & API Function
// *  ################ Logic
// *  ################ Elementes
return (
    <div className='global-component bg-stone-950/80  ' >
        <div className='border-[1px] border-stone-700 rounded-md '>
            {/* textarea */}
                <div className='w-full'>
                    <textarea className='textarea' onChange={(e) => InputCollector( 'InputText' , e.target.value)} name="from"  placeholder='inter your text . . . ' />
                    <textarea className='textarea border-l-[1px] border-stone-700' name="" value={Result} readOnly />
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
                    <div className='border-y-[1px] border-stone-800 my-3 w-[80%] py-3 flex-center md:w-fit md:my-0 md:py-0 md:border-none '>
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
        <button disabled={!Input.InputText || !Input.from || !Input.to} onClick={HandleSubmit}  className='bg-blue-700 py-3 mt-8 rounded-md border-[1px] duration-500 hover:bg-transparent hover:text-blue-700 hover:font-bold hover:border-blue-700 text-white flex-center w-full '> 
            {isPending ? 'Translating...' : 'Translate'}
        </button>
        {error && <p className='text-red-500 mt-4 '>Something went wrong </p>}
    </div>
)
}
// *  ################ Elementes

export default TranslatCard