import React, { useState } from 'react'
import Modal               from 'react-modal';
import Slider              from "react-slick";
import './modal.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from '../../assets/dust1.png';
import Img2 from '../../assets/dust2.png';

import Img4 from '../../assets/Work-img4.png';
import Img6 from '../../assets/Work-img6.png';

Modal.setAppElement('#root')
const Dusts = () => {
    
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
                            <h2 className='lg:h2 text-sm text-accent font-bold mb-6'>실시간 대기질 검색기</h2>
                            <p className='text-sm tracking-wider leading-6'>
                            평소 운동을 할 때 대기질이 좋을 때도 있고 나쁠 때도 있어현재 대기 상태에 정확한 정보를 알고싶다는 호기심에 제작을 하게 된 프로젝트입니다
                            공공데이터를 받아와 사용자가 검색한 input 값을 받아와 해당 시/도를 검색하면 해당 지역 대기 정보를 받아와 리스트로 화면에 뿌려주고 해당 지역 데이터 Row가 많아지면
                            편리하게 정보를 넘겨볼 수 있도록 react-paging을 이용해 해당 정보를 나누어 주었습니다. 또 react-modal을 이용해 정확한 정보를 확인할 수 있도록 조치를 해두었습니다.
                            </p>
                          </div>
                          <div className=' mb-14'>
                            <button className='btn px-4 py-2 mr-4 mb-3 lg:mb-0'>
                              <a href='https://github.com/aap10kr/react-dust' className='text-xs lg:text-sm'>GITHUB 소스보기</a>
                            </button>
                            <button className='btn px-4 py-2'>
                              <a href='https://admin.gayou.kr/' target='blank' className='text-xs lg:text-sm' onClick={()=> alert('빠른 시일에 URL을 준비하겠습니다!')}>사이트 바로가기</a>
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

export default Dusts