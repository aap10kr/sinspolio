import React, { useState } from 'react'
import Modal               from 'react-modal';
import Slider              from "react-slick";
import './modal.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from '../../assets/bike1.png'
import Img2 from '../../assets/bike2.png'

import Img4 from '../../assets/Work-img4.png'
import Img6 from '../../assets/Work-img6.png'

Modal.setAppElement('#root')
const Tashu = () => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return(
        <>
            <div>
                <div
                    className="text-sm opacity-30 cursor-pointer hover:opacity-70" 
                    onClick={()=> setModalIsOpen(true)}
                >
                자세히 보기
                </div>
            </div>
            <Modal isOpen={modalIsOpen} className="modal">
                <section className='w-4/6 h-4/5 pt-8 bg-site z-50 bg-no-repeat bg-cover overflow-hidden rounded-xl'>
                    <div className='h-[90%] overflow-y-auto px-10'>
                      <div className='w-full'>
                        <div className='w-4/5 m-auto'>
                          <Slider {...settings}>
                            <div className='flex justify-center'>
                              <img src={Img1} alt='' className='flex'/>
                            </div>
                            <div>
                              <img src={Img2} alt=''/>
                            </div>
                          </Slider>
                        </div>
                        <div className='w-full mt-14'>
                          <div className='mb-8'>
                            <h2 className='lg:h2 text-sm text-accent font-bold mb-6'>대전 자전거 사고 다발지역</h2>
                            <p className='text-sm tracking-wider leading-6'>
                            프론트엔드의 핵심은 백엔드 개발자가 만든 서버를 통해 통신을 하며 DB에 데이터를 받아오고 사용자 요청을 전해주는 일이라고 생각해 만들어져있는
                            공공 데이터 api를 받아와 카카오 지도에 연동해 받아온 사고 지점의 위도와 경도를 이용해 지도에 마커를 표시해 주는 작업을 했고 react-rauter를 
                            이용해 해당 지역구로 이동해 원하는 연도를 선택하면 해당연도의 사고 지점을 지도에 보이게 작업을 하였습니다.
                            </p>
                          </div>
                          <div className=' mb-14'>
                            <button className='btn px-4 py-2 mr-4 mb-3 lg:mb-0'>
                              <a href='https://github.com/aap10kr/Tashu' className='text-xs lg:text-sm'>GITHUB 소스보기</a>
                            </button>
                            <button className='btn px-4 py-2'>
                              <a href='#' target='blank' className='text-xs lg:text-sm' onClick={()=> alert('빠른 시일에 URL을 준비하겠습니다!')}>사이트 바로가기</a>
                            </button>
                          </div>
                          <div className='w-full'>
                            <h2 className='lg:text-3xl flex text-accent font-bold lg:mb-6'>주요 사용 기능</h2>
                            <div className='lg:flex lg:w-1/6'>
                              <img src={Img4} alt="Work-logo" className='w-20 lg:w-1/2 lg:ml-10'/>
                              <img src={Img6} alt="Work-logo" className='w-20 lg:w-1/2 lg:ml-10 rounded-2xl'/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex justify-center items-center h-[10%]'>
                        <button className='btn btn-sm' onClick={()=> setModalIsOpen(false)}>닫기</button>
                    </div>
                </section>
            </Modal>
        </>
    )
}

export default Tashu