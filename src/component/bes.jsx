import React from 'react'
import bes from '../img/bes-bg.png'
import best1 from '../img/best1.png'
import best2 from '../img/best2.png'
import best3 from '../img/best3.png'
import pro1 from '../img/pro1.png'
import pro2 from '../img/pro2.png'
import pro3 from '../img/pro3.png'
import go from '../img/go.png'

function Item(){
    return (
        <div className=' item w-[82%] text-center absolute top-[30%] left-[9%] flex  '>
                <img src={pro1} alt="" className='absolute z-[1] w-[8%] '/>
                <img src={best1} alt="" className='relative top-3 md:top-5 lg:top-10 w-[33%] ' />
                <div className='absolute flex items-center invisible sm:visible text-1 font-extrabold w-[28%] bg-white bottom-[-20%] md:bottom-[-23%] left-[02.5%] lg:bottom-[-30%] xl:bottom-[-16%] px-[1%] rounded-sm border-[#020001] border-[2px] lg:rounded-[3px] lg:border-[#020001] lg:border-[3px]  '  >
                    <span className='text-left w-2/3 2xl:w-1/2 text-[55%] lg:text-[75%] xl:text-[85%] 2xl:text-[100%] '>How to create mobile-optimized</span>
                    <div className='w-1/3 lg:w-1/2'>
                        <img src={go} alt="" className='lg:m-[6px] float-right lg:h-[66px] h-8 '/>
                    </div>
                </div>
                <img src={pro2} alt="" className='absolute left-[33%] w-[8%] z-[1]'/>
                <img src={best2} alt="" className='relative top-3 md:top-5 lg:top-10 w-[33%] ' />
                <div className='absolute flex items-center invisible sm:visible text-1 font-extrabold w-[28%] bg-white bottom-[-20%] md:bottom-[-23%] left-[35.5%] lg:bottom-[-30%] xl:bottom-[-16%] px-[1%] rounded-sm border-[#020001] border-[2px] lg:rounded-[3px] lg:border-[#020001] lg:border-[3px]  '  >
                    <span className='text-left w-2/3 2xl:w-1/2 text-[55%] lg:text-[75%] xl:text-[85%] 2xl:text-[100%] '>How to create mobile-optimized</span>
                    <div className='w-1/3 lg:w-1/2'>
                        <img src={go} alt="" className='lg:m-[6px] float-right lg:h-[66px] h-8 '/>
                    </div>
                </div>
                <img src={pro3} alt="" className='absolute left-[66%] w-[8%] z-[1]'/>
                <img src={best3} alt="" className='relative top-3 md:top-5 lg:top-10 w-[33%] ' />
                <div className='absolute flex items-center invisible sm:visible text-1 font-extrabold w-[28%] bg-white bottom-[-20%] md:bottom-[-23%] left-[68.5%] lg:bottom-[-30%] xl:bottom-[-16%] px-[1%] rounded-sm border-[#020001] border-[2px] lg:rounded-[3px] lg:border-[#020001] lg:border-[3px]  '  >
                    <span className='text-left w-2/3 2xl:w-1/2 text-[55%] lg:text-[75%] xl:text-[85%] 2xl:text-[100%]'>How to create mobile-optimized</span>
                    <div className='w-1/3 lg:w-1/2'>
                        <img src={go} alt="" className='lg:m-[6px] float-right lg:h-[66px] h-8 '/>
                    </div>
                </div>
        </div>
    )
}

function Bes() {
  return (
    <div className='relative font-eng '>
        <img src={bes} alt="" className='relative ' />
        <div className=" text-[#f96400] absolute top-0 sm:top-[-3%] md:top-[5%] w-full lg:w-[40%] xl:top-[10%] lg:left-[30%]  ">
            <div className=' text-532 font-bold lg:tracking-[5px] text-center '>
                <span class='  text-[30%] lg:text-[40%] xl:text-[50%] 2xl:text-[100%] leading-none md:leading-[50%]'   >BEST PRODUCT</span>
            </div>
            <div className=' w-full text-16 text-center  leading-none md:leading-4 lg:leading-[32px]'>
                <span className='invisible sm:visible text-[32%] md:text-[50%] lg:text-[55%] xl:text-[70%] 2xl:text-[100%] '>How to create mobile-optimized videos in minutes. Not a designer, <br/>
                every team makes a lot of videos Can be trimmed. Take the first </span>
            </div>
        </div>

        <Item />    

    </div>
  )
}

export default Bes