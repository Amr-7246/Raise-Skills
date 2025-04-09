import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { musicData } from '../constants/Data'
import { FaPlay, FaPause, FaFastForward, FaFastBackward, FaRandom, FaRedoAlt } from 'react-icons/fa'

const Music = () => {
// * ########## State
const [DataIndex, setDataIndex] = useState(0)
const [Data, setData] = useState(musicData[0])
const [IsPlay, setIsPlay] = useState(false)
const [Progress, setProgress] = useState<number | undefined >(0)
const [ProgressBar, setProgressBar] = useState<number|undefined>(0)

const audioRef = useRef<HTMLAudioElement | null>(null)
// * ########## State
// * ########## Logic
// ~ ProgressBar
  if(IsPlay){
    setTimeout(() => {
      setProgressBar(audioRef.current?.currentTime)
      
    }, 1000);
  }
  useEffect(() => {
    console.log(ProgressBar)
  }, [ProgressBar])
// ~ ProgressBar
// ~ Audio 
useEffect(() => {
  if (audioRef.current) {
    audioRef.current.pause()
      }
    
      const newAudio = new Audio(Data.audio)
      if(Progress){
        newAudio.currentTime = Progress
      }
      audioRef.current = newAudio
    
      if (IsPlay) {
        newAudio.play()
      }
      
      return () => {
        newAudio.pause()
      }
    }, [Data, IsPlay , Progress ])
    // ~ Audio 
    console.log(audioRef.current?.currentTime)
  // ~ Play/Pause
    const Play_Pause = () => {
      if (!IsPlay) {
        audioRef.current?.play()
        setIsPlay(true)
      } else {
        audioRef.current?.pause()
        setProgress(audioRef.current?.currentTime)
        setIsPlay(false)
      }
    }
  // ~ Play/Pause
  // ~ Next
    const Next = () => {
      if (DataIndex < musicData.length - 1) {
        const nextIndex = DataIndex + 1
        setDataIndex(nextIndex)
        setData(musicData[nextIndex])
        setProgress(0)
      }
    }
  // ~ Next
  // ~ Previous
    const Prev = () => {
      const prevIndex = DataIndex - 1
      if (prevIndex >= 0) {
        setDataIndex(prevIndex)
        setData(musicData[prevIndex])
        setIsPlay(true)
        setProgress(0)
      }
    }
  // ~ Previous
  // ~ Targeted Play
    const Targeted = (index: number) => {
      const target = musicData[index]
      setDataIndex(index)
      setData(target)
      setIsPlay(true)
      setProgress(0)
    }
  // ~ Targeted Play
  // * ########## Logic
  // * ########## Elementes
  return (
    <div className='w-[95%] md:w-[80%] max-w-[800px] flex-center flex-col md:flex-row gap-5'>
      {/* ##################### Sound itself */}
        <div className='music-card flex flex-col gap-10 overflow-hidden'>
          {/* Image */}
            <div className='w-full mx-auto max-h-[450px] overflow-hidden border-b-[2px] border-black'>
              <Image
                src={Data.image}
                alt='music image'
                width={500}
                height={300}
                layout='intrinsic'
              />
            </div>
          {/* Image */}
          {/* Caption/Title */}
            <div className='flex flex-col text-rose-700 items-end font-bold px-5'>
              <h2>{Data.title}</h2>
              <div>{Data.description}</div>
            </div>
          {/* Caption/Title */}
          {/* Congiger icons */}
            <div className='flex-center gap-x-5 border-t border-black py-5'>
              <span className='config-icons'>
                <FaRedoAlt />
              </span>
              <span onClick={Prev} className='config-icons'>
                <FaFastBackward />
              </span>
              <span onClick={ Play_Pause} className='config-icons'>
                {IsPlay ? <FaPause /> : <FaPlay />}
              </span>
              <span onClick={Next} className='config-icons'>
                <FaFastForward />
              </span>
              <span className='config-icons'>
                <FaRandom />
              </span>
            </div>
          {/* Congiger icons */}
        </div>
      {/* ##################### Sound itself */}
      {/* ##################### Sound List */}
        <div className='music-card !px-0 py-10 max-h-[300px] flex-center flex-col'>
          <div className='overflow-y-scroll w-full'>
            {musicData.map((D, i) => (
              <div onClick={() => Targeted(i)}key={D.id}  className='border-b cursor-pointer h-fit border-rose-900 w-full py-3 font-bold text-center text-rose-800' >
                {D.title}
              </div>
            ))}
          </div>
        </div>
      {/* ##################### Sound List */}
    </div>
  )
  // * ########## Elementes
}

export default Music
