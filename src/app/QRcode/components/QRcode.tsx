"use client"
import React, { useState } from 'react'
import ReactQR from 'react-qr-code'

const QRcode = () => {
    const [url, setUrl] = useState('')
    const [qrValue, setQrValue] = useState('http://localhost:3000/QRcode')
    const [isLoading, setIsLoading] = useState(false)

const handleGenerate = () => {
    if (url.trim()) {
        setIsLoading(true)
        setTimeout(() => {
        setQrValue(url)
        setIsLoading(false)
    }, 2000) 
    }
}

return (
    <div className="global-component flex flex-col items-center bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-8 rounded-xl shadow-xl transform transition-all hover:shadow-2xl duration-300 ease-in-out">
        <h2 className="text-3xl font-black font-orbitron text-stone-900 mb-6 text-center animate-pulse">
            Your QR Code
        </h2>

        <div className="flex justify-center items-center my-8 min-h-[160px]">
            {isLoading ? 
            ( <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-stone-900 border-opacity-80" /> ) : ( <ReactQR value={qrValue} size={156} className="border-[0px] border-black rounded-lg shadow-lg transform transition-all duration-700 ease-in-out " />)
            }
        </div>
    <input type="text" placeholder="Enter your URL here..." className="w-[85%] max-w-md px-4 py-2 mb-4 text-lg rounded-lg border-none shadow-md bg-stone-800 text-sky-600 font-poppins focus:outline-none" value={url} onChange={(e) => setUrl(e.target.value)} />
    <button onClick={handleGenerate} className="bg-sky-800 text-white px-4 py-2 rounded-full shadow-lg text-lg font-bold transition-all duration-500 hover:scale-103 hover:bg-purple-800" >
        {isLoading ? 'Generating...' : 'Generate QR'}
    </button>
    </div>
)
}

export default QRcode
