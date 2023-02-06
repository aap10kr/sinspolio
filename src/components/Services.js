import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';

import GayouLogo from '../assets/gayou.png'

const Services = () => {
  return (
    <section id='services' className='section pt-20 lg:pt-60'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
             variants={fadeIn('right', 0.3)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.3}} 
            className='ml-4 mb-4 px-6 lg:border-r-[1px] lg:ml-0'>
            <img src={GayouLogo} alt='gayou-logo' className='w-64'/>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}} 
            className='flex-1'>
            <div
             className='flex ml-10 mb-[38px]'
            >
              <div className='max-w-[600px]'>
                <div>
                  <h4 className='text-4xl tracking-wider font-primary font-bold mb-2'>가유 커넥트</h4>
                  <p className='font-secondary text-sm text-gray-4300 font-semibold leading-tight'>2022.03 ~ 현재</p>
                  <span className='font-secondary text-sm text-gray-4300 font-semibold leading-tight'>프론트엔드 개발자</span>
                </div>
                <div className='flex mt-1'>
                  <span className='rounded-xl px-2 py-0.5 bg-gray-400 opacity-40 text-xs mr-2'>HTML</span>
                  <span className='rounded-xl px-2 py-0.5 bg-gray-400 opacity-40 text-xs mr-2'>CSS</span>
                  <span className='rounded-xl px-2 py-0.5 bg-gray-400 opacity-40 text-xs mr-2'>JAVASCRIPT</span>
                  <span className='rounded-xl px-2 py-0.5 bg-gray-400 opacity-40 text-xs mr-2'>SVELTE</span>
                  <span className='rounded-xl px-2 py-0.5 bg-gray-400 opacity-40 text-xs mr-2'>TAILWIND</span>
                </div>
                <div className='flex mt-6'>
                  <div className='w-1 h-1 rounded-full mt-3 bg-purple-400'></div>
                  <p className='ml-1.5 opacity-80'>초기 프로젝트에 참여하여 프론드엔드 파트를 사수와 함께 전담하여 진행<br/>데이터 통신및 스크립트를 이용한 마크업 부분을 혼자 도맡아 진행</p>
                </div>
                <div className='flex mt-4'>
                  <div className='w-1 h-1 rounded-full mt-3 bg-purple-400'></div>
                  <p className='ml-1.5 opacity-80'>초기 Jascript로 제작되어 있는 기능들을 Svelte로 리팩토링</p>
                </div>
                <div className='flex mt-4'>
                  <div className='w-1 h-1 rounded-full mt-3 bg-purple-400'></div>
                  <p className='ml-1.5 opacity-80'>DB에서 가져온 데이터를 가공하고 사용자 반응에 의한 필터링 작업</p>
                </div>
                <div className='flex mt-4'>
                  <div className='w-1 h-1 rounded-full mt-3 bg-purple-400'></div>
                  <p className='ml-1.5 opacity-80'>프로젝트 진행중 들어온 다수의 홈페이지 제작 외주 작업</p>
                </div>
              </div>
              <div className='flex flex-col flex-1 items-end'>
                <a
                  href='https://gayou.kr/' 
                  target='blank' 
                  className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                  <BsArrowUpRight />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
