"use client"
import React, { useEffect, useState } from 'react'
import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoIosMoon } from "react-icons/io";
import { GiSpellBook } from "react-icons/gi";
import { generateImage } from '../services/api';
import { TiWarning } from "react-icons/ti";
import ImageLoading from "./Loading" ;
import { PromptData } from "./PromptData" ;

const ImageGeneration = () => {
// * ################## Start State ##################
    const [prompt , setPrompt ] = useState<string>('')
    const [promptConfig , setPromptConfig ] = useState<string[]>(['', '' ,''])
    const [Loading , setLoading ] = useState<boolean>(false)
    const [IsGenerating , setIsGenerating ] = useState<boolean>(false)
    const [IsGeneratingClicked , setIsGeneratingClicked ] = useState<boolean>(false)
    const [ImageUrl , setImageUrl ] = useState<string>('')
    const [Warrning , setWarrning ] = useState<string>('')
    // const InputResultes: object = {
    //     PromptInput : prompt || '' ,
    //     ModelInput : promptConfig[0] || '' ,
    //     ImageCountInput : promptConfig[1] || '' ,
    //     ImageRatioInput : promptConfig[2] || ''
    // }
// * ################## End State ##################
// * ################## Start Logic ##################
    // & promptsetting (Data Collection)
        const promptsetting = (e: React.ChangeEvent<HTMLSelectElement>) => {
                switch (e.target.name) {
                    case 'Select Model':
                        setPromptConfig((prev) => {
                            const updatedArray = [...prev]
                            updatedArray[0] = e.target.value
                            return updatedArray
                    })
                        break;
                    case 'Image Count':
                        setPromptConfig((prev) => {
                            const updatedArray = [...prev]
                            updatedArray[1] = e.target.value
                            return updatedArray
                    })
                        break;
                    case 'Aspect Ratio':
                        setPromptConfig((prev) => {
                            const updatedArray = [...prev]
                            updatedArray[2] = e.target.value
                            return updatedArray
                    })
                        break;
                
                    default:
                        break;
                }
        }
    // & promptsetting (Data Collection)
    // & promptData 
        const PutPrompt = () => {
            const RandomIndex = Math.floor(Math.random() * 100) 
            setPrompt(PromptData[RandomIndex])
        }
    // & promptData 
    // & Image Card
        const ImageCard = () => {
            const ImageNumber = Number(promptConfig[1])
            const aspectRatios: Record<string, string> = {
                '1:1': 'aspect-[1/1]',
                '16:9': 'aspect-[16/9]',
                '4:3': 'aspect-[4/3]',
                '3:2': 'aspect-[3/2]',
                '21:9': 'aspect-[21/9]',
            };
            
            const Ratio = aspectRatios[promptConfig[2]] || 'aspect-[4/3]';
            return (
                <div className=' flex-center flex-wrap gap-3 p-5 '>
                    {Array.from({ length: ImageNumber }).map((_, I) => (
                        <div className={` bg-stone-500 rounded-lg ${Ratio} w-[230px] md:w-[300px] overflow-hidden text-stone-600 flex-center`} key={I}>
                            {ImageUrl ? (<img src={ImageUrl} alt="Generated" />) : (<div><ImageLoading/></div>) }
                        </div>
                    ))}
                </div>
            );
        }
    // & Image Card
    // & Result (Data fetch)
        const handleGenerate = async () => {
            if (prompt.length > 20) {
                setWarrning('')
                setIsGeneratingClicked(true)
                setIsGenerating(true)
                setLoading(true);
                const image = await generateImage(prompt);
                setImageUrl(image);
                setLoading(false);
                setIsGenerating(false)
            }else{
                setWarrning('The prompet is too Short')
            }
        };
        useEffect(() => {
            console.log(ImageUrl)
        }, [ImageUrl])
    // & Result (Data fetch)
// * ################## End Logic ##################
// * ################## start Elementes ##################
    return (
        <div className= 'min-h-[300px] w-[90%] md:w-[80%] max-w-[900px] mx-auto  bg-white  flex-center flex-wrap rounded-lg overflow-hidden before:bg-indigo-600 before:top-[0] before:w-full before:h-[5px] ' >
            {/* Header */}
                <div className='flex !pt-8 justify-between global-div'>
                    <div className='flex-center'>
                        <span className=' icon bg-indigo-700 text-stone-300 rounded-xl p-3 mx-3'><FaWandMagicSparkles/></span>
                        <h1 className='text-stone-900 font-black'>Ai Image Generator</h1>
                    </div>
                    <span className=' icon rounded-full p-3 flec-center bg-indigo-400 text-indigo-700'><IoIosMoon /></span>
                </div>
            {/* Header */}
            {/* textarea */}
                <div className=' gap-5 flex-center flex-wrap mb-10 global-div'>
                    {/* prompet */}
                        <div className = ' relative w-[90%] h-[150px] md:h-[200px] ' >
                            <textarea className='w-[100%] bg-indigo-300 text-stone-600 h-full rounded-lg p-3 ' onChange={(e) => setPrompt(e.target.value)} value={prompt} name="" id="" placeholder='Describe your image in detail ' />
                            <span onClick={PutPrompt}  className=' hover:bg-indigo-600 duration-500 icon absolute bottom-[10%] right-[5%] p-2 rounded-full bg-indigo-700 text-white  '><GiSpellBook/></span>
                        </div>
                    {/* prompet */}
                    {/* Btn */}
                        <div className={` w-[90%] flex ${ Warrning ?  ' justify-between ' : 'justify-end'}  `}>
                            <p className={`bg-orange-600/90 text-[13px] rounded-lg flex-center text-zinc-900 font-bold ${ Warrning ? 'p-2 border-stone-700 border-[1px] ' : ' p-0 '}`}> <span className = {`${ Warrning ? ' flex mr-2 ' : ' hidden '}`} ><TiWarning/></span> {Warrning}</p>
                            <button className='btn'  disabled = { IsGenerating } onClick={handleGenerate} ><span className='px-3'><FaWandMagicSparkles/></span> {Loading ? 'Generating...' : 'Generate'} </button>
                        </div>
                    {/* Btn */}
                </div>
            {/* textarea */}
            {/* config */}
                <div className='flex-center border-t-[1px] border-stone-800 !w-[90%] max-w-[600px] min-h-[120px] flex-wrap global-div md:flex-center  '>
                    {/* Selection */}
                        {/* Select Model */}
                            <select onChange={(e) => promptsetting(e)} value={promptConfig[0]} className='select' name="Select Model" id="">
                                <option className='hidden' value="" disabled selected>Choose a model</option>
                                <option className='option' value="stabilityai/stable-diffusion-2">Stable Diffusion 2</option>
                                <option className='option' value="runwayml/stable-diffusion-v1-5">Stable Diffusion v1.5</option>
                                <option className='option' value="CompVis/ldm-text2im-large-256">LDM Text-to-Image</option>
                                <option className='option' value="deepfloyd/if-I">DeepFloyd IF (Stage 1)</option>
                                <option className='option' value="hakurei/waifu-diffusion">Waifu Diffusion</option>
                                <option className='option' value="nitrosocke/redshift-diffusion">Redshift Diffusion</option>
                            </select>
                        {/* Select Model */}
                        {/* Select Image Count */}
                            <select onChange={(e) => promptsetting(e)} value={promptConfig[1]} className='select' name="Image Count" id="">
                                <option className='hidden' value="" disabled selected>Image Count</option>
                                <option className='option' value='1'>1 Image</option>
                                <option className='option' value='2'>2 Images</option>
                                <option className='option' value='4'>4 Images</option>
                                <option className='option' value='8'>8 Images</option>
                            </select>
                        {/* Select Image Count */}
                        {/* Select Aspect Ratio */}
                            <select onChange={(e) => promptsetting(e)} value={promptConfig[2]} className='select' name="Aspect Ratio" id="">
                                <option className='hidden' value="" disabled selected>Aspect Ratio</option>
                                <option className='option' value="1:1">Square (1:1)</option>
                                <option className='option' value="16:9">Widescreen (16:9)</option>
                                <option className='option' value="4:3">Standard (4:3)</option>
                                <option className='option' value="3:2">Classic (3:2)</option>
                                <option className='option' value="21:9">Ultra-Wide (21:9)</option>
                            </select>
                        {/* Select Aspect Ratio */}
                    {/* Selection */}
                </div>
            {/* config */}
            {/* Result */}
                <div className= {`w-full ${ IsGeneratingClicked ? 'h-[330px]' : "h-[0px]"} duration-[1000ms] overflow-y-scroll bg-white/20 flex-center flex-wrap `}>
                    {ImageCard()}
                </div>
            {/* Result */}
        </div>
    )
// * ################## End Elementes ##################
}

export default ImageGeneration