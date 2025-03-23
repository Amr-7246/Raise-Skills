import React from 'react'
import { FaWandMagicSparkles } from 'react-icons/fa6'
import { GiSpellBook } from 'react-icons/gi'
import { IoIosMoon } from 'react-icons/io'

const Game = () => {
  return (
    <div className= 'min-h-[300px] w-[90%] md:w-[80%] max-w-[900px] mx-auto  bg-white  flex-center flex-wrap rounded-lg overflow-hidden before:bg-indigo-600 before:top-[0] before:w-full before:h-[5px] ' >
    {/* Header */}
        <div className='flex !pt-8 justify-between global-div'>
            <div className='flex-center'>
                <span className=' icon bg-indigo-700 text-stone-300 rounded-xl p-3 mx-3'><FaWandMagicSparkles/></span>
                <h1 className='text-stone-900 font-black'>Game</h1>
            </div>
            <span className=' icon rounded-full p-3 flec-center bg-indigo-400 text-indigo-700'><IoIosMoon /></span>
        </div>
    {/* Header */}
    {/* textarea */}
        <div className='relative flex-center global-div'>
            <textarea className='w-[90%] bg-indigo-300 text-stone-600 min-h-[100px] rounded-lg p-3 ' name="" id="">Describe your image in detail </textarea>
            <span className=' icon absolute bottom-[20%] right-[10%] p-2 rounded-full bg-indigo-700 text-white  '><GiSpellBook/></span>
        </div>
    {/* textarea */}
    {/* config */}
        <div className='flex !w-[90%] min-h-[120px] flex-wrap global-div md:flex md:justify-between  '>
            {/* Btn */}
                <div className='md:w-fit w-full flex justify-end '>
                    <button className='btn  '><span className='px-3'><FaWandMagicSparkles/></span> Generate </button>
                </div>
            {/* Btn */}
            {/* Select */}
                <div className=' ' >
                    <select className='select' name="Select Model" id="">
                        <option value="" disabled selected>Choose a model</option>
                        <option value="Select Model"> Model-1 </option>
                    </select>
                    <select className='select' name="Image Count" id="">
                        <option value="" disabled selected>Choose a model</option>
                        <option value=""></option>
                    </select>
                    <select className='select' name="Aspect Ratio" id="">
                        <option value="" disabled selected>Choose a model</option>
                        <option value=""></option>
                    </select>
                </div>
            {/* Select */}
        </div>
    {/* config */}
    {/* Result */}
        <div className=''>
        </div>
    {/* Result */}
</div>
  )
}

export default Game