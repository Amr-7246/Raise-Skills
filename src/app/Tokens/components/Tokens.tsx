import React from 'react'
import Image from 'next/image'


const Tokens = () => {
  return (
    <div className="fixed bottom-[100px] right-5 max-w-sm bg-white p-6 rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center gap-4 z-50">
      <Image   src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"  alt="cookie icon"width={48} height={48} />
      <h1 className="text-xl font-semibold text-gray-800">We use cookies </h1>
      <p className="text-center text-gray-600 text-sm">
        We use cookies to personalize content, improve your experience, and analyze site traffic. By clicking Accept, you agree to our cookie policy.
      </p>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Accept
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:underline transition">
          Learn more
        </button>
      </div>
    </div>
  )
}

export default Tokens
