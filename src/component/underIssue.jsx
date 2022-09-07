import React from 'react'
import under1 from '../img/under1.png'
import under2 from '../img/under2.png'
import under3 from '../img/under3.png'
import under4 from '../img/under4.png'
import under5 from '../img/under5.png'
import under6 from '../img/under6.png'
import under7 from '../img/under7.png'
import under8 from '../img/under8.png'
import under9 from '../img/under9.png'
import under10 from '../img/under10.png'

function Under() {
  return (
    <div className='relative ' >
        <img src={under2} alt="" className='hidden lg:block lg:w-[6%] top-0 left-[14%] absolute' />
        <img src={under3} alt="" className='hidden lg:block lg:h-1/3 top-[20%] left-[-20%]  absolute' />
        <img src={under5} alt="" className='hidden lg:block lg:w-[6%] top-[11%] right-[10%] absolute' />
        <img src={under4} alt="" className='hidden lg:block lg:w-[5.8%] top-[17%] right-[13%] absolute' />
        <img src={under6} alt="" className='hidden lg:block lg:w-[20%] top-[43%] xl:top-[38%] 2xl:top-[35%] right-[-10%] absolute' />
        <img src={under7} alt="" className='hidden lg:block lg:h-1/3 bottom-[8%] xl:bottom-[10%] 2xl:bottom-[11%] right-[-11%] absolute' />
        <img src={under8} alt="" className='hidden lg:block lg:w-[5%] bottom-[11%] xl:bottom-[13%] 2xl:bottom-[14%] right-[33%] absolute' />
        <img src={under9} alt="" className='hidden lg:block lg:w-[6%] bottom-[16%] xl:bottom-[16.5%] 2xl:bottom-[18%] left-[12%] absolute' />
        <img src={under10} alt="" className='hidden lg:block lg:w-1/5 bottom-[7%] 2xl:bottom-[8%] left-[17%] absolute' />


        <div className=' m-auto w-full lg:w-[70%] 2xl:w-[50%] text-center text-[#111111] md:pt-[7%] pt-[7%]  ' >
            <div className='text-3 font-eng  font-extrabold tracking-[4.5px] ' >
                <span className='text-[50%] md:text-[60%] lg:text-[80%] xl:text-[100%] uppercase '>
                    what happened
                </span>
            </div>  
            <div className='text-16 font-eng font-light ' >
                <span className='text-[50%] md:text-[60%] lg:text-[80%] xl:text-[100%] '>
                    How to create mobile-optimized videos in minutes. Not a designer, <br/>
                    every team makes a lot of videos Can be trimmed. Take the first 
                </span>
            </div>
            <button className='align-middle justify-center p-[1%] my-[5%] rounded-md border-[3px] border-[#020001] font-extrabold text-[15px] xl:text-[23px] leading-[25px] flex w-2/5 md:w-1/5 mx-[30%] md:mx-[40%] uppercase ' >See More</button>
        </div>
        <img src={under1} alt="" className='  m-auto w-4/5 lg:w-[66%] lg:pb-[18%]  relative z-[3] ' />
    </div>
  )
}

export default Under