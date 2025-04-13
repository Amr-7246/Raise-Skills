import React from 'react'
import { MdArrowDropDownCircle } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Dropdown = ({ title, options, onSelect, isOpen,config,
                    setIsOpen  }) => {
  return (
          <div className={`drop-dev ` }>
            <button className="drop-btn" onClick={() => setIsOpen(!isOpen) }>
              <span className="border-r border-sky-400 w-[60px]  text-left pr-2">{title}</span>
              <span className={` ${isOpen ? "rotate-[180deg]" : "rotate-[0deg]"} duration-[500ms] ml-2`}>
                <MdArrowDropDownCircle />
              </span>
            </button>
            <div className={`${ isOpen ? "h-[200px]" : "h-[0px]"} drop-list`}>
              {options.map((option, index) =>{
                if (title == 'Origin') {
                  return (
                    <div 
                    key={index}
                    className={`More-options ${index === options.length - 1 ? '' : 'border-b border-sky-400'}`}
                    data-option-value={option} 
                    onClick={onSelect}
                    >
                      <span className={`w-[70%]`}>{option}</span>
                      <div className='flex flex-centerprint() ml-2 relative ' >
                        <span className={`${ config.origin === option ? 'opacity-0' : 'opacity-1' } absolute duration-[500ms]`} ><MdCheckBoxOutlineBlank/></span>
                        <span className={`${ config.origin === option ? 'opacity-1' : 'opacity-0' } duration-[500ms]`} ><IoMdCheckboxOutline/></span>
                      </div>
                    </div>
                  )
                }
                if (title == 'Gender') {
                  return (
                    <div 
                    key={index}
                    className={`More-options  ${index === options.length - 1 ? '' : 'border-b border-sky-400'}`}
                    data-option-value={index == 0 ? 'male' : index == 1 ? "female" : 'allNames' } 
                    onClick={onSelect}>
                      <span className={`w-[70%]`}>{option}</span>
                      <div className='flex flex-center ml-2 relative ' >
                          <span className={`${ config.gender === (index == 0 ? 'male' : index == 1 ? "female" : 'allNames') ? 'opacity-0' : 'opacity-1' } absolute duration-[500ms]`} ><MdCheckBoxOutlineBlank /></span>
                          <span className={`${ config.gender === (index == 0 ? 'male' : index == 1 ? "female" : 'allNames') ? 'opacity-1' : 'opacity-0' } duration-[500ms]`} ><IoMdCheckboxOutline /></span>
                      </div>
                    </div>
                  )
                }
                if (title == 'More') {
                  return (
                    <div 
                    key={index}
                    className={`More-options ${index === options.length - 1 ? '' : 'border-b border-sky-400'}`} 
                    data-option-value={option.key} 
                    onClick={onSelect}>
                      <span className={`w-[70%]`}>{option.label}</span>
                      <div className='flex flex-center ml-2 relative ' >
                        <span className={`${config[option.key] ? 'opacity-0' : 'opacity-1' } absolute duration-[500ms]`} ><MdCheckBoxOutlineBlank/></span>
                        <span className={`${config[option.key] ? 'opacity-1' : 'opacity-0' } duration-[500ms]`} ><IoMdCheckboxOutline/></span>
                      </div>
                    </div>
                  )
                }
              }
              )}
            </div>
          </div>
        );
};

export default Dropdown