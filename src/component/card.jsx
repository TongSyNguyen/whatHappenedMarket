import React, { useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'

function Card() {
  var [cards, setCard] = useState([
    {ava: '../../images/img-01.png', id:'1' },
    {ava: '../../images/img-02.png', id:'2' },
    {ava: '../../images/img-03.png', id:'3' },
    {ava: '../../images/img-04.png', id:'4' },
    {ava: '../../images/img-05.png', id:'5' },
    {ava: '../../images/img-06.png', id:'6' },
    {ava: '../../images/img-07.png', id:'7' },
    {ava: '../../images/img-08.png', id:'8' },
    {ava: '../../images/img-09.png', id:'9' },
    {ava: '../../images/img-10.png', id:'10' },
    {ava: '../../images/img-01.png', id:'11' },
    {ava: '../../images/img-02.png', id:'12' },
    {ava: '../../images/img-03.png', id:'13' },
    {ava: '../../images/img-04.png', id:'14' },
    {ava: '../../images/img-05.png', id:'15' },
    {ava: '../../images/img-06.png', id:'16' },
    {ava: '../../images/img-07.png', id:'17' },
    {ava: '../../images/img-08.png', id:'18' },
    {ava: '../../images/img-09.png', id:'19' },
    {ava: '../../images/img-10.png', id:'20' },
 ])
  return (
    <div>
    <div className='showCard font-eng flex flex-row gap-[4%] md:gap-[1%] flex-wrap w-[90%] sm:w-[82%] mx-auto mt-[9%] '>
      {cards.map(card=>(
        <div key={card.id} className=' w-[48%] md:w-[32%] lg:w-[19%]  '  >
          <img src={card.ava} alt="" className='w-full'/>
          <div className='text-14 font-semibold text-[#222222] text-[90%] md:text-[100%]  '>[what happen] How to create </div>
          <div className='flex items-center'>
            <div className='w-2/3 text-[90%] md:text-[100%] '>2,500 won</div>
            <div className='w-1/3 text-right inline-block text-20 text-[#666666]  '>  
            <AiFillHeart className='text-[#fa7b26] inline-block'/>236</div> 
          </div>
        </div>
      ))}
    </div>
    <button className='align-middle justify-center p-[0.6%] my-[5%] rounded-md border-[3px] border-[#020001] font-extrabold text-[15px] xl:text-[23px] leading-[25px] flex w-2/5 sm:w-[10%] mx-auto ' >See More</button>
    </div>
  )
}
  
export default Card