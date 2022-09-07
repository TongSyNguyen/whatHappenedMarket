import React from 'react'
import sns from '../img/social1.png'
import fb from '../img/social2.png'
import blog from '../img/social3.png'

function Footer() {
  return (
    <div className='bg-white mx-[5%] w-[90%]  '>
        <div className="footer-1 flex flex-row flex-wrap lg:border-y lg:border-[#f4f4f4] py-[3%] ">
            <div className='footer-1-left pl-3 w-full lg:w-1/3 xl:w-1/2 ' >
                <div className="text-111526 font-bold mb-[2%] font-eng ">what happened</div>
                <div className="text-111526 font-kor font-light">
                        [공지] 개인 정보 처리 방침 변경 사전 안내<br/>
                        [공지] 29CM 강남 스토어 영업 종료<br/>
                        [공지] 개인 정보 처리 방침 변경 사전 안내<br/>
                        [공지] iOS 10 이하 버전 지원 중단 안내<br/>
                        [공지] 개인 정보 처리 방침 변경 사전 안내</div>
            </div>
            <div className='footer-1-right w-full lg:w-2/3 xl:w-1/2 flex flex-row flex-wrap ' >
                <div className=" w-1/2 md:w-1/4 pl-3 lg:pl-[10%] ">
                    <div className="text-111526 font-bold mb-[5%] lg:mb-[12%] font-eng   ">about us</div>
                    <div className="text-[10px] lg:text-[12px] leading-[31px] text-[#333333] font-kor font-light">
                        회사 소개<br/>
                        인재 채용<br/>
                        상시 할인 혜택
                    </div>
                </div>
                <div className=" w-1/2 md:w-1/4 pl-3 lg:pl-[10%] ">
                    <div className="text-111526 font-bold mb-[5%] lg:mb-[12%] font-eng   ">my order</div>
                    <div className="text-[10px] lg:text-[12px] leading-[31px] text-[#333333] font-kor font-light">
                        내 주문<br/>
                        주문 배송<br/>
                        취소 / 교환 / 반품 내역<br/>
                        상품 리뷰 내역<br/>
                        증빙 서류 발급
                    </div>
                </div>
                <div className=" w-1/2 md:w-1/4 pl-3 lg:pl-[10%] ">
                    <div className="text-111526 font-bold mb-[5%] lg:mb-[12%] font-eng   ">my account</div>
                    <div className="text-[10px] lg:text-[12px] leading-[31px] text-[#333333] font-kor font-light">
                        회원 정보 수정<br/>
                        회원 등급<br/>
                        마일리지 현황<br/>
                        쿠폰
                    </div>
                </div>
                <div className=" w-1/2 md:w-1/4 pl-3 lg:pl-[10%] ">
                    <div className="text-111526 font-bold mb-[5%] lg:mb-[12%] font-eng   ">help</div>
                    <div className="text-[10px] lg:text-[12px] leading-[31px] text-[#333333] font-kor font-light">
                        1 : 1 상담 내역<br/>
                        상품 Q & A 내역<br/>
                        공지 사항<br/>
                        자주하는 질문<br/>
                        고객의 소리
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute-footer flex flex-row flex-wrap pb-[5%]">
            <div className="ab-left w-full lg:w-1/2 font-kor text-31 text-[#a9a9a9] font-light text-center lg:text-left ">
                <span class="w-3/5 lg:w-full align-middle px-auto text-[70%] lg:text-[85%] xl:text-[100%] flex mx-auto lg:block ">
                    © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 test0101@what happened.co.kr 
                    서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스 이용약관 l 개인정보처리방침
                </span>
            </div>
            <div className="ab-right w-full lg:w-1/2 flex flex-row flex-wrap items-center  ">
                <div className=' w-full lg:w-4/5 ' ></div>
                <div className='flex flex-row justify-center flex-wrap w-full lg:w-1/5 2xl:pl-2 '>    
                    <img className='h-5 pl-2 2xl:pl-6 ' src={sns} alt="" />
                    <img className='h-5 pl-2 2xl:pl-6 ' src={fb} alt="" />
                    <img className='h-5 pl-2 2xl:pl-6 ' src={blog} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer