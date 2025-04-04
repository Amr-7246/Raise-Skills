import React from 'react'

const Music = () => {
return (
    <div className=' w-[95%] md:w-[80%] max-w-[800px] flex-center flex-col md:flex-row gap-5 '>
        <div className='music-card' >
            <img src="" alt="" />
            <h2></h2>
            <div></div>
            <div className='flex gap-x-5'>
                <span>config</span>
                <span>left</span>
                <span>pause/run</span>
                <span>right</span>
                <span>config</span>
            </div>
        </div>
        <div className='music-card' >
            <div>music name</div>
        </div>
    </div>
)
}

export default Music