import React from 'react'
import intro from '../img/introduction-bg.png'

function Introduction() {
  return (
    // <div className=" bg-intro w-full h-[50vh] lg:h-[576px] 2xl:pt-[162px] 2xl:pl-[173px]">
    //     <div>
    //         <span className="text-white font-eng 2xl:font-extrabold 2xl:tracking-[5px] 2xl:text-532 ">WHAT HAPPEND!</span>
    //         <br/>
    //         <br/>
    //         <br/>
    //         <span className="font-eng text-white 2xl:text-6 ">How to create mobile-optimized videos in minutes. Not a designer,<br/> 
    //         every team makes a lot of videos Can be trimmed. Take the first<br/> 
    //         step to your brand's success. How to create <br/>
    //         mobile-optimized videos in minutes.</span>  
    //     </div>        
    // </div>
    <div className='relative font-eng text-white w-full  '>
      <img src={intro} alt="" id='intro' className=' relative'/>
      <div className="text-532 absolute top-[-10%] left-[9%] md:top-[20%] lg:top-[20%] xl:top-[25%] ">
        <span className="text-[20%] md:text-[50%] lg:text-[75%] xl:text-[100%] font-extrabold tracking-[5px]">WHAT HAPPEND!</span>
      </div>
      <div className="text-6 absolute top-[44%] left-[9%] md:top-[44%]  leading-[8px] md:leading-4 lg:leading-[30px] xl:leading-[35px] ">
        <p className="text-[35%] md:text-[60%] lg:text-[75%] xl:text-[100%] w-[35%]">
        How to create mobile-optimized videos in minutes. Not a designer,
        every team makes a lot of videos Can be trimmed. Take the first 
        step to your brand's success. How to create 
        mobile-optimized videos in minutes.</p>
      </div>
    </div>
    
  )
}
export default Introduction