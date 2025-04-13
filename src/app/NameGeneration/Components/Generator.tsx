import React, { useState, useEffect } from "react";
import AIModel from "./Tools/AI";
import Dropdown from './Tools/Dropdown'
import Loading from './Tools/Loading'
import names from "../Data/Names";

const Generator = () => {
  // * ###################################################### Start UseStat
  const [isConfigurationOpen, setIsConfigurationOpen] = useState(false);
  const [isOriginOpen, setIsOriginOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false);
  const [name, setName] = useState("");
  const [config, setConfig] = useState({
    origin: "Canada",
    gender: "male",
    twinsMale: false,
    twinsFemale: false,
    twinsFemaleAndMale: false,
    popularName: false,
    unPopularName: false,
  });
  // * ###################################################### End UseStat
  // * ###################################################### Start Logic
  // & Start handleOrigin
  const handleOrigin = (e) => {
    const newOrigin = e.currentTarget.dataset.optionValue;
    setConfig((prev) => ({ ...prev, origin: newOrigin }));
  };
  // & End handleOrigin 
  // & Start handleGender
  const handleGender = (e) => {
    const newGender = e.currentTarget.dataset.optionValue;
    setConfig((prev) => ({ 
      ...prev,
      twinsMale: false,
      twinsFemale: false,
      twinsFemaleAndMale: false,
      popularName: false,
      unPopularName: false, 
      gender: newGender 
    }));
  };
  // & End handleGender
  // & Start handleMoreOptions
  const handleMoreOptions = (e) => {
    const newMoreOption = e.currentTarget.dataset.optionValue;
    setConfig((prev) => ({ 
      ...prev,
      gender: null ,
      twinsMale: false,
      twinsFemale: false,
      twinsFemaleAndMale: false,
      popularName: false,
      unPopularName: false, 
      [newMoreOption]: true,
      }));
  };
  // & End handleMoreOptions
  // & Start Name Generation Algorithem
  const Generate = () => {
    setName('')
    setTimeout(() => {
      if (!names[config.origin]) return;
      let newName = "Set Origin ";
      // ? Gender Controlle  
      if (config.gender){
        switch (config.gender) {
          case 'male':
            newName = names[config.origin]?.male?.[
              Math.floor(Math.random() * names[config.origin].male.length)
            ];
            break;
          case 'female':
            newName = names[config.origin]?.female?.[
              Math.floor(Math.random() * names[config.origin].female.length)
            ];
            break;
          case 'allNames':
            newName = names[config.origin]?.allNames?.[
              Math.floor(Math.random() * names[config.origin].allNames.length)
            ];
            break;
            
            default:
              newName = names[config.origin]?.allNames?.[
                Math.floor(Math.random() * names[config.origin].allNames.length)
              ];
              break;
            }
          }
      // ? twinsMale Controlle  
    if (config.twinsMale) {
      const twinNames = names[config.origin]?.twinsMale;
      if (twinNames?.length) {
        const randomIndex = Math.floor(Math.random() * twinNames.length);
        newName = twinNames[randomIndex].join(" And "); // ✅ Join twin names with " And "
      }
    // ? twinsFemale Controlle  
    } else if (config.twinsFemale) {
      const twinNames = names[config.origin]?.twinsFemale;
      if (twinNames?.length) {
        const randomIndex = Math.floor(Math.random() * twinNames.length);
        newName = twinNames[randomIndex].join(" And "); // ✅ Join twin names with " And "
      }
    // ? twinsFemaleAndMale Controlle  
    } else if (config.twinsFemaleAndMale) {
      const twinNames = names[config.origin]?.twinsFemaleAndMale;
      if (twinNames?.length) {
        const randomIndex = Math.floor(Math.random() * twinNames.length);
        newName = twinNames[randomIndex].join(" And "); // ✅ Join twin names with " And "
      }
      // ? popularName Controlle  
    } else if (config.popularName) {
      newName = names[config.origin]?.popularity?.[
        Math.floor(Math.random() * names[config.origin].popularity.length)
      ];
      // ? unPopularName Controlle  
    } else if (config.unPopularName) {
      newName = names[config.origin]?.uniqueName?.[
        Math.floor(Math.random() * names[config.origin].uniqueName.length)
        ];
      } 
      
      setName(newName || "No Name Found");
      
    }, 1500);
  }
  // & End Name Generation Algorithem
  useEffect(() => {
  console.log(config)
  }, [config])
  
  // * ###################################################### End Logic
  // * ###################################################### Start Elementes
  return (
    <div className="schema flex-wrap gap-10 py-[50px]">
      {/* Start Show Generated Name */}
      <div className="bg-black/70 dark:bg-gray-900/50 rounded-lg px-5 text-center flex flex-center w-[80%] md:w-[50%] lg:w-[40%] m-1 h-[180px]">
        <span className="text-cliping font-Shafarik capitalize ">{name || <Loading/> }</span>
      </div>
      {/* End Show Generated Name */}
      {/* Start configuration Generated Name options */}
      <div className="flex flex-wrap flex-center dark:bg-gray-900/50 bg-black/70 rounded-lg w-[80%] md:w-[50%] lg:w-[40%] min-h-[100px] lg:h-[180px] ">
        <button className={`btn dark:bg-gray-950 `} onClick={Generate}>
          <span className="btn-cliping" >Generate</span>
        </button>
        <button className={`btn dark:bg-gray-950 `} onClick={() => setIsConfigurationOpen(!isConfigurationOpen)}>
          <span  className="btn-cliping">Configuration</span>
        </button>
      </div>
      {/* options config */}
      <div className={` ${isConfigurationOpen? ' relative opacity-1 top-[0px] ' : 'opacity-0 z-[-5] top-[50px] mb-[-200px] ' } relative  duration-[500ms] `}>
        <div className={`flex flex-wrap flex-center dark:bg-gray-900/50 bg-black/70  rounded-lg w-[80%] max-w-[500px] gap-2  mx-auto `}>
            {/* origin  */}
            <Dropdown
              title="Origin"
              config={config}
              isConfigurationOpen={isConfigurationOpen}
              options={Object.keys(names)}
              onSelect={handleOrigin}
              isOpen={isOriginOpen}
              setIsOpen={setIsOriginOpen}
            />
            {/* Gender  */}
            <Dropdown
              title="Gender"
              config={config}
              options={["Male", "Female" , "Any"]}
              onSelect={handleGender}
              isOpen={isGenderOpen}
              setIsOpen={setIsGenderOpen}
            />
            {/* More  */}
            <Dropdown
              title="More"
              options={[
                { label: "Twins Male", key: "twinsMale" },
                { label: "Twins Female", key: "twinsFemale" },
                { label: "Twins Female & Male", key: "twinsFemaleAndMale" },
                { label: "Popular Name", key: "popularName" },
                { label: "Unpopular Name", key: "unPopularName" },
              ]}
              config={config}
              onSelect={handleMoreOptions}
              isOpen={isMoreOptionsOpen}
              setIsOpen={setIsMoreOptionsOpen}
            />

        </div>
      </div>
      {/* End configuration Generated Name options */}
      {/* Start AI model */}
      <div className={`duration-[500ms] z-[5]`}>
          <AIModel/>
      </div>
      {/* End AI model */}
    </div>
  );
  // * ###################################################### End Elementes
};

export default Generator;
