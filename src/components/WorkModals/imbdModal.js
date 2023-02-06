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
import Img5 from '../../assets/Work-img6.png'

Modal.setAppElement('#root')
const Imdb = () => {
    
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
                            <h2 className='lg:h2 text-sm text-accent font-bold mb-6'>IMDB</h2>
                            <p className='text-sm tracking-wider leading-6'>
                            컴포넌트 재활용에 대한 고민을 하게 되어 제작하게 된 프로젝트입니다 평소 Netflix, youtube 등을 즐겨 보는 중 고민하게 되었습니다.
                            같은 디자인에 컴포넌트 안에 같은 정보를 담고 있는 여러 데이터를 받아오면 하나의 컴포넌트를 이용해 각각의 유니크한 id 값이 부여되어있는
                            정보를 받아오면 된다고 생각해 react-router, useParams등을 이용해 제작했습니다.
                            </p>
                          </div>
                          <div className=' mb-14'>
                            <button className='btn px-4 py-2 mr-4 mb-3 lg:mb-0'>
                              <a href='https://github.com/aap10kr/imdb' target='blank' className='text-xs lg:text-sm'>GITHUB 소스보기</a>
                            </button>
                            <button className='btn px-4 py-2'>
                              <a href='https://imdb-clone-indol.vercel.app/' target='blank' className='text-xs lg:text-sm'>사이트 바로가기</a>
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

export default Imdb