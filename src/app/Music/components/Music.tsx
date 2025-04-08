import React, { useState } from 'react'
import Image from 'next/image'
import { musicData } from '../constants/Data'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaPlay, FaPause, FaFastForward, FaFastBackward, FaCog, FaRandom, FaRedoAlt } from 'react-icons/fa'

const Music = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [Data, setData] = useState(musicData[2])

    return (
        <div className='w-[95%] md:w-[80%] max-w-[800px] flex-center flex-col md:flex-row gap-5'>
            <div className='music-card flex flex-col gap-10 overflow-hidden'>
                <div className='w-full mx-auto max-h-[450px] overflow-hidden border-b-[2px] border-black' >
                    <Image className='' src={Data.image} alt="music image" width={500} height={300} layout="intrinsic" />
                </div>
                <div className='flex flex-col items-end font-bold px-5 '>
                    <h2>{Data.title}</h2>
                    <div>{Data.description}</div>
                </div>
                <div className='flex-center gap-x-5 border-t border-black py-5'>
                    <span className="config-icons">
                        <FaRedoAlt />
                    </span>
                    <span className="config-icons">
                        <FaFastBackward />
                    </span>
                    <span className="config-icons">
                        <FaPause />
                    </span>
                    <span className="config-icons">
                        <FaFastForward />
                    </span>
                    <span className="config-icons">
                        <FaRandom  />
                    </span>
                </div>
            </div>
            <div className='music-card !px-0 py-10 max-h-[300px] flex-center flex-col'>
                <div className='overflow-y-scroll w-full '>
                    {musicData.map((D) => (
                        <div className='border-b cursor-pointer h-fit border-black w-full py-3 font-bold text-center' key={D.id}>{D.title}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Music
