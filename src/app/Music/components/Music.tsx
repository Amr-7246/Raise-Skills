'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { musicData } from '../constants/Data'
import { TbRewindForward10, TbRewindBackward10 } from "react-icons/tb"
import { FaPlay, FaPause, FaFastForward, FaFastBackward } from 'react-icons/fa'

const Music = () => {
  const [dataIndex, setDataIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const audioRef = useRef<HTMLAudioElement>(null)

  const currentTrack = musicData[dataIndex]
  const progressPercentage = duration ? (progress / duration) * 100 : 0

  // Progress Tracker
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && audioRef.current) {
        setProgress(audioRef.current.currentTime)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [isPlaying])

  // Update Duration
  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const onLoaded = () => setDuration(audio.duration || 0)
      const onEnded = () => handleNext()

      audio.addEventListener('loadedmetadata', onLoaded)
      audio.addEventListener('ended', onEnded)

      return () => {
        audio.removeEventListener('loadedmetadata', onLoaded)
        audio.removeEventListener('ended', onEnded)
      }
    }
  }, [currentTrack])

  const handlePlayPause = () => {
    if (!isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    if (dataIndex < musicData.length - 1) {
      setDataIndex(prev => prev + 1)
      setProgress(0)
    }
  }

  const handlePrev = () => {
    if (dataIndex > 0) {
      setDataIndex(prev => prev - 1)
      setProgress(0)
    }
  }

  const handleSeek = (dir: 'forward' | 'backward') => {
    if (audioRef.current) {
      audioRef.current.currentTime += dir === 'forward' ? 10 : -10
      setProgress(audioRef.current.currentTime)
    }
  }

  const handleTarget = (index: number) => {
    setDataIndex(index)
    setProgress(0)
    setIsPlaying(true)
    setTimeout(() => {
      audioRef.current?.play()
    }, 100)
  }

  return (
    <div className='w-[95%] md:w-[80%] max-w-[800px] flex-center flex-col md:flex-row gap-5'>

      {/* ###### Player Section ###### */}
      <div className='music-card flex flex-col gap-10 overflow-hidden'>
        {/* Track Image */}
        <div className='w-full mx-auto max-h-[450px] overflow-hidden border-b-[2px] border-black'>
          <Image
            src={currentTrack.image}
            alt='music image'
            width={500}
            height={300}
            className='object-cover w-full'
          />
        </div>

        {/* Title / Description */}
        <div className='flex flex-col text-rose-700 items-end font-bold px-5'>
          <h2>{currentTrack.title}</h2>
          <p>{currentTrack.description}</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full mb-[-50px] max-w-md">
          <div className="w-full bg-black rounded-full h-[2px] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-rose-500 to-rose-500/10 transition-all duration-500 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between mt-3 text-sm font-bold text-indigo-500 px-5 font-yujiMai  dark:text-gray-300">
            <span>{Math.round(progressPercentage)}%</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className='flex-center gap-x-5 py-5'>
          <span onClick={() => handleSeek('backward')} className='config-icons hover:!text-indigo-500'>
            <TbRewindBackward10 />
          </span>
          <span onClick={handlePrev} className='config-icons'>
            <FaFastBackward />
          </span>
          <span onClick={handlePlayPause} className={`config-icons ${isPlaying ? 'animate-pulse text-indigo-500' : ''}`}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </span>
          <span onClick={handleNext} className='config-icons'>
            <FaFastForward />
          </span>
          <span onClick={() => handleSeek('forward')} className='config-icons hover:!text-indigo-500'>
            <TbRewindForward10 />
          </span>
        </div>

        {/* Hidden Audio Element */}
        <audio ref={audioRef} src={currentTrack.audio} />
      </div>

      {/* ###### Track List ###### */}
      <div className='music-card !px-0 py-10 max-h-[300px] flex-center flex-col'>
        <div className='overflow-y-scroll w-full'>
          {musicData.map((track, index) => (
            <div
              key={track.id}
              onClick={() => handleTarget(index)}
              className={`cursor-pointer w-full py-3 font-bold text-center border-b duration-300 ${
                track.id === currentTrack.id
                  ? 'text-indigo-700 border-indigo-500'
                  : 'text-rose-800 border-rose-900'
              }`}
            >
              {track.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Music
