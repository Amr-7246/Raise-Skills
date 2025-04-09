import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { musicData } from '../constants/Data'
import { TbRewindForward10 , TbRewindBackward10 } from "react-icons/tb";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaPlay, FaPause, FaFastForward, FaFastBackward, FaRandom, FaRedoAlt } from 'react-icons/fa'

const Music = () => {
// * ########## State
  const [DataIndex, setDataIndex] = useState(0)
  const [Data, setData] = useState(musicData[0])
  const [IsPlay, setIsPlay] = useState(false)
  const [Progress, setProgress] = useState<number | undefined >(0)
  const [ProgressBar, setProgressBar] = useState<number>(0)
  const [ProgressPercentage, setProgressPercentage] = useState<number|undefined>(0)

  const audioRef = useRef<HTMLAudioElement | null>(null)
// * ########## State
// * ########## Logic
  // ~ ProgressBar
    useEffect(() => {
      let interval: NodeJS.Timeout | null = null
    
      if (IsPlay) {
        interval = setInterval(() => {
          if (audioRef.current?.currentTime !== undefined) {
            setProgressBar(audioRef.current.currentTime)
          }
        }, 1000)
      }
    
      return () => {
        if (interval) clearInterval(interval)
      }
    }, [IsPlay])
    useEffect(() => {
      console.log(ProgressBar)
      setProgressPercentage( audioRef.current?.duration ? (ProgressBar * 100) / audioRef.current.duration : 0)
      console.log(ProgressPercentage)
    }, [ProgressBar , ProgressPercentage , Progress ])
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
        setProgressPercentage(0)
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
        setProgressPercentage(0)
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
      setProgressPercentage(0)
    }
  // ~ Targeted Play
  // ~ Forword/Backword
    const Duration = (who : string) => {
      switch (who) {
        case "Forword" :
          if (audioRef.current?.currentTime != undefined ){
            setProgress(audioRef.current?.currentTime + 10 )
          }
          break;
          case "Backword" :
            if (audioRef.current?.currentTime != undefined ){
              setProgress(audioRef.current?.currentTime - 10 )
            }
          break;
      
        default:
          break;
      }
    }
  // ~ Forword/Backword
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
          {/* ProgressBar */}
            <div className="w-full mb-[-50px] max-w-md">
              <div className="w-full bg-black rounded-full h-[2px] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 via-rose-500 to-rose-500/10 transition-all duration-700 ease-in-out" style={{ width: `${ProgressPercentage}%` }} ></div>
              </div>
              <div className="flex justify-between mt-3 text-sm font-bold text-indigo-500 px-5 font-yujiMai  dark:text-gray-300">
                <span>{Math.round(ProgressPercentage ?? 0)}%</span>
              </div>
            </div>
          {/* ProgressBar */}
          {/* Congiger icons */}
            <div className='flex-center gap-x-5 py-5 '>
              <span  onClick={() => Duration("Backword")}  className='config-icons hover:!text-indigo-500'>
                <TbRewindBackward10 />
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
              <span onClick={() => Duration("Forword")}  className='config-icons hover:!text-indigo-500 '>
                <TbRewindForward10 />
              </span>
            </div>
          {/* Congiger icons */}
        </div>
      {/* ##################### Sound itself */}
      {/* ##################### Sound List */}
        <div className='music-card !px-0 py-10 max-h-[300px] flex-center flex-col'>
          <div className='overflow-y-scroll w-full'>
            {musicData.map((D, i) => (
              <div onClick={() => Targeted(i)}key={D.id}  className={` ${D.id == Data.id ?  ' text-indigo-700 ' : 'text-rose-800'} duration-500 border-b cursor-pointer h-fit border-rose-900 w-full py-3 font-bold text-center `} >
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
