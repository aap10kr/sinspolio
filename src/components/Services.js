import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';

const services = [
  {
    name: '가유커넥트',
    description: '개발팀에서 axios를 이용해 api서버에서 받은 데이터를 이용해 화면에 그려주는 작업을 맡아 했으며 이로인해 store,props등의 데이터 흐름과 상태관리드의 프론트엔드 개발에 필요한 지식을 익히며 라이브러리를 이용하여 사용자 편의성에 대한 고민을 많이 가지게 되었습니다.',
    link:'Lean more'
  },
]

const Services = () => {
  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
             variants={fadeIn('right', 0.3)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.3}} 
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>what i do.</h2>
            <h3 className='h3 max-w-[445px] mb-16'>
              asdasdasdasdasdasda<br/>sdasdsasdasdsddfsdfsdfweqweq
            </h3>
            <button className='btn btn-sm'>see my work</button>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}} 
            className='flex-1'>
            {services.map((service, index) => {
              const { name, description } = service;
              return(
                <div
                 className='flex border-b border-white/20 h-[146px] mb-[38px]'
                 key={index}
                >
                  <div className='max-w-[600px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4'>{name}</h4>
                    <p className='font-secondary text-md leading-tight'>{description}</p>
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
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
