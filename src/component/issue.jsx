import React from 'react'
import right from '../img/vector-to-right.png'
import issue3 from '../img/issue3.png'
import issue4 from '../img/issue4.png'
import issue5 from '../img/issue5.png'
import issueObj1 from '../img/issueObj1.png'
import issueObj2 from '../img/issueObj2.png'
import issueObj3 from '../img/issueObj3.png'
import issueObj4 from '../img/issueObj4.png'
import issueObj5 from '../img/issueObj5.png'


function Issue() {
  return (
    <div  className=' bg-[#fccb05] relative md:pb-[7%]'>
      <img src={issueObj1} alt="" className='hidden lg:block md:w-[8%] bottom-[4%] left-[13%] absolute' />
      <img src={issueObj2} alt="" className='hidden lg:block md:w-[7%] top-[12%] right-[3%] absolute' />
      <img src={issueObj3} alt="" className='hidden lg:block md:w-[5%] top-[3%] right-[3%] absolute' />
      <img src={issueObj4} alt="" className='hidden lg:block md:w-[6%] top-[44%] 2xl:top-[40%] left-[21%] absolute' />
      <img src={issueObj5} alt="" className='hidden lg:block md:w-[6%] bottom-[8%] right-[18.5%] absolute' />
      <div className=' m-auto w-full lg:w-[70%] 2xl:w-[50%] text-center text-[#110e03] md:pt-[7%] py-[7%] md:pb-0 ' >
        <div className='text-3 font-eng  font-bold tracking-[4.5px] ' >
          <span className='text-[50%] md:text-[60%] lg:text-[80%] xl:text-[100%] uppercase'>
            Happened’s issue
          </span>
        </div>
        <div className='text-8910 font-kor font-light w-4/5 mx-auto sm:w-full  ' >
          <span className='text-[50%] md:text-[60%] lg:text-[80%] xl:text-[100%] '>
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서<br/>
          다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </span>
        </div>
      <button className='align-middle justify-center p-[1%] my-[8%] rounded-md border-[3px] border-[#020001] font-extrabold text-[15px] xl:text-[23px] leading-[25px] flex w-2/5 md:w-1/5 mx-[30%] md:mx-[40%]  uppercase ' >See More</button>
      </div>
      <div  className='flex flex-row flex-wrap font-eng md:border-y-[3px] md:border-[#111111] ' >
        <div className='bg-[#ff5500] lg:w-1/5 md:w-1/3 hidden md:block  ' >
            <div className='text-25 font-extrabold w-full text-center mt-[20%] ' >
                <span className=' text-[70%] xl:text-[100%] ' >
                    WHPN<br/>ISSUE
                </span>
            </div>
            <img src={right} alt="" className='mx-[30%] my-[20%] w-[40%] '/>
        </div>
        <div className='bg-[#110e03] lg:w-1/5 md:w-1/3 hidden md:block  ' >
            <div className='text-white text-24 font-extrabold w-full text-center h-[15%] py-[3%]  ' >
                <span className='' >
                    B BRAND
                </span>
            </div>
            <img src={issue4} alt="" className=' w-full h-[85%]  '/>
        </div>
        <div className='bg-[#110e03] lg:w-1/5 md:w-1/3 hidden md:block  ' >
            <div className='text-white text-24 font-extrabold w-full text-center h-[15%] py-[3%]  ' >
                <span className='' >
                    C BRAND
                </span>
            </div>
            <img src={issue3} alt="" className=' w-full h-[85%]  '/>
        </div>
        <div className='bg-[#ff5500] lg:w-1/5 hidden lg:block  ' >
            <div className='text-white text-24 font-extrabold w-full text-center h-[15%] py-[3%]  ' >
                <span className='' >
                    D BRAND
                </span>
            </div>
            <img src={issue4} alt="" className=' w-full h-[85%]  '/>
        </div>
        <div className='bg-[#110e03] lg:w-1/5 hidden lg:block  ' >
            <div className='text-white text-24 font-extrabold w-full text-center h-[15%] py-[3%]  ' >
                <span className='' >
                    E BRAND
                </span>
            </div>
            <img src={issue5} alt="" className=' w-full h-[85%]  '/>
        </div>
      </div>
    </div>
  )
}

export default Issue