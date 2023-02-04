import React, { useState } from 'react'
import Modal               from 'react-modal';
import Slider              from "react-slick";
import './modal.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from '../../assets/main.png'
import Img2 from '../../assets/control.png'
import Img3 from '../../assets/notice.png'

import Img4 from '../../assets/Work-img4.png'
import Img5 from '../../assets/Work-img5.png'

Modal.setAppElement('#root')
const ImdbModal = () => {
    
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
                            <div>
                              <img src={Img3} alt=''/>
                            </div>
                          </Slider>
                        </div>
                        <div className='w-full mt-14'>
                          <div className='mb-8'>
                            <h2 className='lg:h2 text-sm text-accent font-bold mb-6'>가유 배달대행 프로그램</h2>
                            <p className='text-sm tracking-wider leading-6'>
                              전체적인 프로그램 구조는 관제 프로그램, 가맹점프로그램, 앱으로 구성되어있으며 기사와 가맹점 가맹점과 지점 지점과 가맹점이 실시간으로 소통하고
                              그 속에 무수한 기능들이 포함되어있으며 모든기능이 정상적으로 작동하여 사용자들을 연결해주는 프로그램입니다. 이 프로젝트에 프론트엔드 개발자로 참여해 백엔드 개발자가 구축한
                              API 서버와 통신해 데이터를 받아와 사용자화면 만든 뒤 사용자 요청을 다시 서버에 보내주는 작업을 도맡아 진행하며 틈틈이 퍼블리싱과 정적인 페이지에
                              동적인 스크립트 기능과 효과들을 만들어 주며 서버 통신 뿐만 아니라 전반적인 UI/UX에도 관여하였습니다.
                            </p>
                          </div>
                          <div className=' mb-14'>
                            <button className='btn px-4 py-2 mr-4 mb-3 lg:mb-0'>
                              <a href='#' className='text-xs lg:text-sm' onClick={()=> alert('사내 보안상의 이유로 보여드릴 수 없습니다 죄송합니다')}>GITHUB 소스보기</a>
                            </button>
                            <button className='btn px-4 py-2'>
                              <a href='https://admin.gayou.kr/' target='blank' className='text-xs lg:text-sm'>사이트 바로가기</a>
                            </button>
                          </div>
                          <div className='w-full'>
                            <h2 className='lg:text-3xl flex text-accent font-bold lg:mb-6'>주요 사용 기능</h2>
                            <div className='lg:flex lg:w-1/6'>
                              <img src={Img4} alt="Work-logo" className='w-20 lg:w-1/2 lg:ml-10'/>
                              <img src={Img5} alt="Work-logo" className='w-20 lg:w-1/2 lg:ml-10 rounded-2xl'/>
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

export default ImdbModal