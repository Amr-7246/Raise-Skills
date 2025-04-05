import React from 'react'

const Payment = () => {
return (
    <div className='global-component '>
        <div className='w-[100%] min-h-[80px] mb-10 flex gap-x-5 border-b border-green-300  '></div>
        <div className='flex flex-col gap-5 ' >
            <div className=' flex flex-col md:flex-row md:items-end gap-3 ' >
                <div className=' w-[80%]' >
                    <label className='payment-lable' htmlFor="">
                        Card Number
                    </label>
                    <input className='payment-feild w-full ' type="text" placeholder='insert card number' />
                </div>
                <div className='flex w-fit p-2 h-[40px] border border-stone-500 min-w-[200px] rounded-md'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <div className='flex gap-x-4'>
                <div className='lable-div'>
                    <label className='payment-lable' htmlFor="">
                        Expiration
                    </label>
                    <input  className='payment-feild' type="text"  placeholder='YY\MM\DD' />
                </div>
                <div className='lable-div'>
                    <label className='payment-lable' htmlFor="">
                        CVC
                    </label>
                    <input  className='payment-feild' type="text" />
                </div>
            </div>
            <label className='payment-lable' htmlFor="">
                Country
            </label>
            <input  className='payment-feild' type="text"  placeholder='insert your country' />
        </div>
    </div>
)
}

export default Payment