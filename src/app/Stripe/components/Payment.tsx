import React from 'react'

const Payment = () => {
return (
    <div className='global-component '>
        <div className='w-[100%] min-h-[150px] flex gap-x-5 border-b border-green-500  '></div>
        <div className='flex flex-col' >
            <div className=' flex flex-col md:flex-row gap-3' >
                <label className='payment-lable' htmlFor="">
                    Card Number
                </label>
                <input className='payment-feild' type="text" />
                <div className='flex w-fit p-2 border border-stone-500 rounded-md'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <div className='flex gap-x-4'>
                <label className='payment-lable' htmlFor="">
                    Expiration
                </label>
                <input  className='payment-feild' type="text" />
                <label className='payment-lable' htmlFor="">
                    CVC
                </label>
                <input  className='payment-feild' type="text" />
            </div>
            <label className='payment-lable' htmlFor="">
                Country
            </label>
            <input  className='payment-feild' type="text" />
        </div>
    </div>
)
}

export default Payment