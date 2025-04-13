import React , {useState , useEffect } from 'react'
import { GiCardExchange } from "react-icons/gi";
import { GiReturnArrow } from "react-icons/gi";
import { HangMan } from '../Data/HangManData'

const Game = () => {
// *########################### Start Hooks
  const CorrectData = HangMan
  const [InputData, setInputData] = useState<{value: string[], index: number}>({value: [] , index : 0})
  const [IsEndGame, setIsEndGame] = useState(false)
  const [Score, setScore] = useState<number[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [WinScore, setWinScore] = useState<number[]>([])
  const [CorrectWord, setCorrectWord] = useState<{name: string[], typ: string | null, hint: string | null}>({name: [] , typ : null , hint : null})
  const [config, setconfig] = useState<string>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [CatigoryData, setCatigoryData] = useState<any>(CorrectData[0])
  const [IsStart, setIsStart] = useState(false)
  const [IsKeyDesabled, setIsKeyDesabled] = useState(true)
  const [showChangeTooltip, setShowChangeTooltip] = useState(false);
  const [showResetTooltip, setShowResetTooltip] = useState(false);
// *########################### End Hooks
// *########################### Start Logic
  // ~ Start CorrectData Selection
    useEffect(() => {
    switch (config) {
      case 'movies':
        setCatigoryData(CorrectData[0])
        break;
      case 'famous':
        setCatigoryData(CorrectData[1])
        break;
      case 'history':
        setCatigoryData(CorrectData[2])
        break;
      case 'science':
        setCatigoryData(CorrectData[3])
        break;
      case 'sports':
        setCatigoryData(CorrectData[4])
        break;
      case 'technology':
        setCatigoryData(CorrectData[5])
        break;
      case 'geography':
        setCatigoryData(CorrectData[6])
        break;
      default:
        setCatigoryData(CorrectData[0])
      break;
      }
    }, [config])

    useEffect(() => {
    if(IsStart) {
    if(CatigoryData) {
      const categories = Object.keys(CatigoryData)
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const words = CatigoryData[randomCategory];
      setCorrectWord(() => ({
        name: words.name,
        typ: words.typ,
        hint: words.hint
      }));
    }
    setIsStart(false)
    }
    }, [IsStart])
  // ~ End CorrectData Selection
  // ~ Start Input Data Selection
    const HandelKey = (e : React.MouseEvent<HTMLButtonElement> , L : string ) => {
    setInputData((prev) => {
      const nextIndex = prev.index + 1 < CorrectWord.name.length ? prev.index + 1 : prev.index;
      return { value: [...(Array.isArray(prev.value) ? prev.value : []), L] , index: nextIndex };
    });
    setTimeout(() => {
      const nextInput = document.getElementById(`input-${InputData.index + 1}`) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }, 200);
    }

    const HandelChange = (e: React.ChangeEvent<HTMLInputElement>, I: number) => {
      const val = e.target.value;
      setInputData((prev) => {
        const newValue = [...prev.value];
        newValue[I] = val[val.length - 1] || "";
        return { ...prev, value: newValue };
      });
    }
  // ~ End Input Data Selection
  // ~ Start Game Logic
    // & Game End
      useEffect(() => {

      if([...CorrectWord.name].length == InputData.value.length && InputData.value.length > 0){
        setIsEndGame(true)
      }
      if(Score.length >= 5 && [...CorrectWord.name].length > 5 ){
        setIsEndGame(true)
      }
      if(Score.length >= 3 && [...CorrectWord.name].length < 5 ){
        setIsEndGame(true)
      }
      console.log(InputData)
      }, [InputData.value.length])
    // & Game End
    // & Game Score
      useEffect(() => {
      if (InputData.value.length > 0) {
        if(!(CorrectWord.name[InputData.index - 1] === InputData.value[InputData.index - 1])) {
              setScore((prev) => {
                const updatedScore = [...prev, 1];
                return updatedScore;
              });}
        if((CorrectWord.name[InputData.index - 1] === InputData.value[InputData.index - 1])) {
          setWinScore((prev) => {
            const updatedScore = [...prev, 1];
            return updatedScore;
          });}
        }
      }, [InputData.value]);
    // & Game Score
  // ~ End Game Logic

  // ~ Start Handel Options
    const  HandelOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setIsKeyDesabled(false)
    const optionValue = e.target.value
    setconfig(optionValue)
    setIsStart(true)
    } 
  // ~ End Handel Options
  // ~ Start Game control
    useEffect(() => {
    if(Score.length > 5){
    setIsKeyDesabled(true)
    }
    }, [Score])
    const Reset = ( ) => {
      setScore([])
      setInputData({
        value : [],
        index : 0
      })
    }
    const ResetEnd = ( ) => {
      setInputData((prev) =>({
        ...prev,
        value: []
      }))
      setIsEndGame(!IsEndGame)
      setIsKeyDesabled(false)
      setIsStart(true)
      setScore([])
      setInputData({
        value : [],
        index : 0
      })
    }
    const ChangeWord = ( ) => {
      setIsKeyDesabled(false)
      setIsStart(true)
      setScore([])
      setInputData({
        value : [],
        index : 0
      })
    }
  // ~ End Game control

  // ~ Start Game Keies
    const keiesL = [...'abcdefghijklmnopqrstuvwxyz']
    const keies = keiesL.map((L , I ) => {
    return <button 
                    onClick={(e) => {HandelKey(e , L )}} 
                    key={I}
                    disabled = {IsKeyDesabled}
                    className=' bg-white/5 lg:text-[17px] m-1 p-2 hover:font-bold hover:text-sky-500 hover:scale-[1.2] w-[30px] duration-[200ms]'>{L}</button>
    })
  // ~ End Game Keies

  // ~ Start Inputs
    const Inputs = [...Array(CorrectWord.name.length)].map(( _ , I ) => {
      return <input 
                  value={ InputData.value[I] || "" } 
                  onChange={(e) => {HandelChange( e , I )}}  
                  type="text" 
                  key={I}
                  id={`input-${I}`}
                  className='focus:outline-none text-center text-black font-black text-[20px] rounded-[5px] border-b-[5px] border-black bg-white/5 m-1 p-2 hover:scale-[1.2] w-[35px] duration-[500ms]'  /> 
    })
  // ~ End Inputs
  // ~ start Select box options
    const options = CorrectData.map((E , I) => {
      return <option className='option' key={I} value={E.theCorrectWord_1.type}>{E.theCorrectWord_1.type}</option>
    })
  // ~ start Select box options
// *########################### End Logic
// *########################### Start Elements
return (
<div className=" p-4 w-[100%] ">

  <div className="grid grid-cols-1 min-h-[500px] md:grid-cols-2 gap-4">
    <div className=" relative max-h-[600px] overflow-hidden md:m-0 bg-sky-800/10 rounded-lg ">
      {/* <div className={` ${Score.length > 5 && CorrectWord.name.length > 5 ? 'opacity-1 z-[10]' : Score.length > 2 && CorrectWord.name.length < 5 ? 'opacity-1 z-[10]' : ' opacity-0 z-[-1] '} duration-[500ms] flex-col  bg-black/90 absolute h-[100%] w-[100%] flex flex-center`}>  */}
    {/* Start The End Game Handel */}
      <div className={` ${IsEndGame ? 'opacity-1 z-[10]' : ' opacity-0 z-[-1] '} duration-[500ms] flex-col  bg-black/90 absolute h-[100%] w-[100%] flex flex-center`}> 
        <button onClick={ResetEnd}  className='btn bg-purple-600 font-bold text-black'>Reset the Game</button>
        <p className='text-red-700 font-bold'>{Score.length > 5 && InputData.value.length > 5 ? 'Losser!' : Score.length >= 3 && InputData.value.length < 5 ? 'Losser' : <span className='text-green-600'>Good!</span> }</p>
        <p className='text-green-700 font-bold mt-5'>It Was : <span className='text-sky-600 ml-3 font-black'>{CorrectWord.name}</span></p>
      </div>
    {/* End The End Game Handel */}
    {/* Start Option Handel */}
      <div className=' flex-row-reverse flex mb-4'>
        <select className=' focus:outline-none  cursor-pointer bg-stone-800 rounded-md py-2 px-5 font-black text-stone-500' onChange={(e) => HandelOptions(e)} name="" id="">
          {options}
        </select>
      </div>
    {/* End Option Handel */}
    {/* Start Hint Handel */}
      <p className=" min-h-[80px] p-5 font-bold text-green-500 text-center border-b border-black pb-3">
        {CorrectWord.hint ? CorrectWord.hint : <span className="inline-block"><button onClick={() => {setIsStart(true) ; setIsKeyDesabled(false)}}  className="btn bg-green-600  text-stone-600  ">Start Game</button></span>}
      </p>
    {/* End Hint Handel */}
    {/* Start Icon Handel */}
      <div className='pl-7 mx-auto justify-around  flex '>
        <div className='relative'>
          <GiCardExchange 
                            onClick={ChangeWord}
                            onMouseEnter={() => setShowChangeTooltip(true)} 
                            onMouseLeave={() => setShowChangeTooltip(false)}
                            className='text-sky-700 hover:skew-x-[10deg] hover:scale-[1.2] cursor-pointer  duration-[500ms] text-[25px] mt-5 mr-5'  />

          { (
            <div className={` ${showChangeTooltip ? 'opacity-1' : 'opacity-0' } hint-icon`}>
                    Change the word
                  </div>
          )}
        </div>
        <div className='relative'>
          <GiReturnArrow  
                          onClick={Reset}  
                          onMouseEnter={() => setShowResetTooltip(true)} 
                          onMouseLeave={() => setShowResetTooltip(false)}
                          className='text-sky-700 hover:skew-x-[-10deg] hover:rotate-[30deg] hover:scale-[1.2] cursor-pointer  duration-[500ms] text-[25px] mt-5 mr-5'  />

          {(
                  <div className={` ${showResetTooltip ? 'opacity-1' : 'opacity-0' } hint-icon`}>
                    Reset the Game
                  </div>
          )}
        </div>
      </div>
      {/* End Icon Handel */}
      {/* Start HangMan Model Handel */}
        <div className={` duration-[500ms] relative lg:w-[380px] lg:h-[350px] w-[280px] mx-auto h-[250px] mt-4`}>
          <span className={`${Score.length > 0 ? 'w-[15%] h-[4%]': 'w-0 h-0'}  hang-man-model rounded-t-[100%] top-[88%] left-[24.5%]`}></span>
          <span className={`${Score.length > 0 ? 'w-[4%] h-[75%]': 'w-0 h-0'}  rounded-t-lg  top-[14%] left-[30%] hang-man-model`}></span>
          <span className={` ${Score.length > 1 && CorrectWord.name.length > 5 ? 'w-[40%] h-[2%]'  : Score.length > 0 && CorrectWord.name.length < 5 ?  'w-[40%] h-[2%]' : 'w-0 h-0' } top-[18%] left-[30%] hang-man-model`}></span>
          <span className={` ${Score.length > 1 && CorrectWord.name.length > 5 ? 'w-[0.5%] h-[18%]'  : Score.length > 0 && CorrectWord.name.length < 5 ?  'w-[0.5%] h-[18%]' : 'w-0 h-0' } ${Score.length > 1 ? 'w-[0.5%] h-[18%]': ''} top-[18%] left-[65%] hang-man-model`}></span>
          <span className={` ${Score.length > 2 && CorrectWord.name.length > 5 ? 'w-[18%] h-[20%] '  : Score.length > 1 && CorrectWord.name.length < 5 ?  'w-[18%] h-[20%] ' : 'w-0 h-0 opacity-0' }  border-dashed border border-red-500 rounded-full absolute top-[36%] left-[56.5%] `}> </span>
          <span className={` ${Score.length > 2 && CorrectWord.name.length > 5 ? 'w-[10%] h-[16%] ' : Score.length > 1 && CorrectWord.name.length < 5 ?  'w-[10%] h-[16%]' : 'w-0 h-0 opacity-0 ' } border border-red-500 rounded-full absolute top-[38%] left-[60.5%] `}> </span>
          <span className={` ${Score.length > 3 && CorrectWord.name.length > 5 ? 'w-[0.2%] h-[25%]'  : Score.length > 2 && CorrectWord.name.length < 5 ?  'w-[0.2%] h-[25%]' : 'w-0 h-0' } top-[54%] left-[65.5%] hang-man-model`}></span>
          <span className={` ${Score.length > 4 && CorrectWord.name.length > 5 ? 'w-[0.2%] h-[10%]'  : Score.length > 2 && CorrectWord.name.length < 5 ?  'w-[0.2%] h-[10%]' : 'w-0 h-0' }  ${Score.length > 4 ? 'w-[0.2%] h-[10%]': 'w-0 h-0'} top-[57%] left-[63.5%] rotate-[30deg] hang-man-model`}></span>
          <span className={` ${Score.length > 4 && CorrectWord.name.length > 5 ? 'w-[0.2%] h-[10%]'  : Score.length > 2 && CorrectWord.name.length < 5 ?  'w-[0.2%] h-[10%]' : 'w-0 h-0' }  top-[57%] left-[67.3%] rotate-[-30deg] hang-man-model`}></span>
          <span className={` ${Score.length > 5 && CorrectWord.name.length > 5 ? 'w-[0.2%] h-[10%]'  : Score.length > 2 && CorrectWord.name.length < 5 ?  'w-[0.2%] h-[10%]' : 'w-0 h-0' }  ${Score.length > 5 ? 'w-[0.2%] h-[10%]': 'w-0 h-0'} top-[78%] left-[67.3%] rotate-[-30deg] hang-man-model`}></span>
          <span className={` ${Score.length > 5 && CorrectWord.name.length > 5 ? 'w-[0.2%] h-[10%]'  : Score.length > 2 && CorrectWord.name.length < 5 ?  'w-[0.2%] h-[10%]' : 'w-0 h-0' }  ${Score.length > 5 ? 'w-[0.2%] h-[10%]': 'w-0 h-0'} top-[78%] left-[63.5%] rotate-[30deg] hang-man-model`}></span>
        </div>
      {/* End HangMan Model Handel */}
  </div>

    {/* Start Keies Handel */}
      <div className =" max-h-[500px] lg:px-10 md:py-[50%] md:bg-transparent bg-green-300/10 p-6 flex-center flex-wrap rounded-lg  min-h-[100px] min-md:h-[400px]">
        {keies}
      </div>
    {/* End Keies Handel */}

    {/* Start Inputs Handel */}
      <div className="md:col-span-2">
        <div className="flex-wrap bg-red-500/10 flex-center p-6 rounded-lg mx-auto min-md:h-[90px] min-h-[80px] md:max-w-[80%]">
          {Inputs}
        </div>
      </div>
    {/* End Inputs Handel */}
  </div>

</div>
)}

export default Game