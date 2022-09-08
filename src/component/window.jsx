import React from 'react'
import win from '../img/window.png'
import obj1 from '../img/object-01.png'
import obj2 from '../img/object-02.png'
import obj3 from '../img/object-03.png'
import obj4 from '../img/object-04.png'
import obj5 from '../img/object-05.png'
import obj6 from '../img/object-06.png'
import obj7 from '../img/object-07.png'

function Window() {
  return (
    <div  className=' bg-[#0565bb] relative w-full '>
      <div className=' m-auto w-full lg:w-[70%] 2xl:w-[50%] text-center text-[#fcd32a] md:pt-[7%] py-[7%] md:pb-0 ' >
        <div className='text-3 font-eng  font-bold tracking-[4.5px] ' >
          <span className='text-[50%] md:text-[60%] lg:text-[80%] xl:text-[100%] '>
            BRAND STORY
          </span>
        </div>
        <div className='text-8910 font-kor font-light w-4/5 mx-auto sm:w-full  ' >
          <span className='text-[50%] md:text-[60%] lg:text-[80%] xl:text-[100%] '>
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서<br/>
          다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </span>
        </div>
      </div>
      <img src={win} alt="" className=' md:block hidden m-auto w-full lg:w-[70%]  pb-[9%] pt-[4%] relative z-[3] ' />
      <div className='absolute z-[4] md:top-[40%] lg:top-[42%] left-1/2 md:w-1/2 lg:w-1/3 md:block hidden' >
        <div className='text-22 font-bold font-eng ' >
          <span className='uppercase text-[50%] lg:text-[70%] xl:text-[80%] 2xl:text-[90%] ' >What Happened’s Brand story</span>
        </div>
        <div className='text-8910 font-light font-kor '>
          <span className='text-[50%] xl:text-[70%]  2xl:text-[85%]  ' >
            청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 <br/>
            봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는<br/>
            긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고<br/>
            인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을<br/>
            아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. 
          </span>
        </div>
        <button className=' invisible xl:visible  align-middle justify-center rounded-md xl:border-[3px] border-[#020001] font-extrabold text-[10px] md:text-[15px] xl:text-[20px] 2xl:text-[23px] leading-[25px] flex w-[38%] my-[8%]' >SEE MORE</button>
      </div>
      <img src={obj1} alt="" className='absolute left-[7%] lg:top-[27%] 2xl:top-[18%]  w-[9%] z-[1] lg:block hidden ' />
      <img src={obj2} alt="" className='absolute right-[12%] top-[7%]  w-[7%] z-[1] lg:block hidden ' />
      <img src={obj3} alt="" className='absolute right-[8%] top-[10%]  w-[7%] z-[1] lg:block hidden ' />
      <img src={obj4} alt="" className='absolute right-[-6%] top-[20%]  h-[50%] z-[1] lg:block hidden ' />
      <img src={obj5} alt="" className='absolute right-[-2%] bottom-[20%]  w-[18%] z-[2] lg:block hidden ' />
      <img src={obj6} alt="" className='absolute left-0 bottom-[20%] w-[9%] z-[1] lg:block hidden ' />
      <img src={obj7} alt="" className='absolute left-[9%] bottom-[20%] w-[8%] z-[2] lg:block hidden ' />
    </div>
  )
}

export default Window