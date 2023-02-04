import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';
import Modals1 from './WorkModals/gayouModal.js'

import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
import Img4 from '../assets/portfolio-img4.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight font-bold text-accent'>My Project</h2> 
              <p className='max-w-sm mb-16'>취업후 자기발전과 회사 업무처리를 위한 공부 목적으로 제작한 프로젝트들 입니다.</p>
              <button className='btn btn-sm'>
                <a href='https://github.com/aap10kr?tab=overview&from=2023-02-01&to=2023-02-04' target="brank">GitHub 바로가기</a>
              </button>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img 
                src={Img1} 
                alt='project-img' 
                className='group-hover:scale-125 transition-all duration-500'/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient mb-2'>개인 프로젝트</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white font-bold'>IMDB</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-700 z-50'>
                <Modals1 />
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img 
                src={Img4} 
                alt='project-img' 
                className='group-hover:scale-125 transition-all duration-500'/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient mb-2'>개인 프로젝트</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white font-bold'>Daily Dust</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-700 z-50'>
                <Modals1 />
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10 pt-20'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img 
                src={Img2} 
                alt='project-img' 
                className='group-hover:scale-125 transition-all duration-500'/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient mb-2'>개인 프로젝트</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white font-bold'>Tashu</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-700 z-50'>
                <Modals1 />
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img 
                src={Img3} 
                alt='project-img' 
                className='group-hover:scale-125 transition-all duration-500'/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient pb-10'>사내 프로젝트</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white font-bold'>가유 관제/가맹점 프로그램 </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-700 z-50'>
                <Modals1 />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Work;