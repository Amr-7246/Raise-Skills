import React, { useState, useEffect } from 'react'
import { blocks } from '../Data/MemoryGameData';
// import { blocks } from '../../components/Data/MemoryGameData'


const Blocks = () => {
    // *##### Start State
        const [count, setCount] = useState<number>(0)
        const [score, setscore] = useState<number>(0);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [name, setName] = useState<string>('Dr.Amr')
        const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
        const [comparingBlocks, setcomparingBlocks] = useState<string[]>([]);
        const [comparingId, setcomparingId] = useState<number[]>([]);
    // *##### End State

    // *##### Start Logic
        // * start generateRandomNumber
        const generateRandomNumbers = () => {
            const usedNumbers = new Set<number>();
            const numbersArray: number[] = [];
        
            while (numbersArray.length < 20) {
                const number = Math.floor(Math.random() * 20);
            
            if (!usedNumbers.has(number)) {
                usedNumbers.add(number);
                numbersArray.push(number);
            }
            }
        
            setRandomNumbers(numbersArray); 
        };
        useEffect(() => {
            generateRandomNumbers();
        }, []);
        // * end generateRandomNumber
        // * start comparingProcess
        const comparingProcess = (
            e: React.MouseEvent<HTMLDivElement>,
            block: string,
            id: number
        ) => {

            comparingId.push(id)
            comparingBlocks.push(block)

            comparingId.map((id) => {
                const element = document.getElementById(id.toString());
                if (element) {
                    element.classList.add('fliped');
                }
            })

            if (comparingBlocks.length == 2) {
                if (comparingBlocks[0] == comparingBlocks[1]) {
                    setscore(score + 1)
                    comparingId.map((id) => {
                        const element = document.getElementById(id.toString());
                        if (element) {
                            element.classList.remove('fliped')
                            element.classList.add('successed')
                        }
                    })
                    setcomparingBlocks([])
                    setcomparingId([])
                } else {
                    setTimeout(() => {
                        comparingId.map((id) => {
                            const element = document.getElementById(id.toString());
                            if (element) {
                                element.classList.remove('fliped')
                            }
                        })
                        setCount((prevCount) => prevCount + 1);
                        setcomparingId([])
                        setcomparingBlocks([])
                    }, 500);
                }
            }

        }
        // * end comparingProcess
        // * start BlocksProduction
        const arr = randomNumbers
        const blocksForPage = arr.map((a) => {
            return <div 
                        onClick={(e) => { 
                            comparingProcess(e, blocks[a].Atr, blocks[a].id)
                        }}
                        id={blocks[a].id.toString()}
                        key={blocks[a].id} compare-atrippute={blocks[a].Atr} 
                        className={`rotate-y-0 hover:shadow-lg hover:shadow-stone-800 preserve-3d  relative cursor-pointer duration-[500ms] md:min-w-[100px] w-[90px] h-[90px]  flex flex-center md:h-[100px] m-[5px] `} 
                        >
                            <div className=" front absolute w-full h-full bg-black/50 text-sky-400/50 border-white/10 border font-black text-[65px] flex items-center justify-center backface-hidden " >
                                ?
                            </div>
                            <div className="back absolute w-full h-full bg-black/50 font-black text-[20px] text-white/50 border border-green-600 flex items-center justify-center rotate-y-180 backface-hidden">
                                {blocks[a].value} 
                            </div>
                    </div>
        })  
        // * end BlocksProduction
    // *##### end Logic
return (
    <div className={` mb-[40px] w-[100%] max-w-[690px] flex flex-center overflow-hidden flex-wrap`}>
        <div className={`  flex-col  md:mt-[20px] md:border md:border-white/5 md:w-[95%] flex justify-center px-6 py-10 bg-white/5 w-[100%] h-[70px] mb-[20px]`}>
            <h1 className={`  flex  justify-between font-black text-sky-500`}>Name : {name} <span className={`text-green-500  duration-[500ms]`}> Score: {score} </span></h1>
            <h1 className={`font-black duration-[500ms] ${count == 0 ? 'text-white' : count < 5 ?  'text-sky-700' : count < 10 ?  'text-orange-700' : 'text-red-700' }`}>Count : {count == 0 ? count : - count }</h1>
        </div>
        <div className=' px-2 md:px-0 flex-center max-w-[680px] flex flex-wrap'>
            {blocksForPage}
        </div>
    </div>
)
}
export default Blocks
