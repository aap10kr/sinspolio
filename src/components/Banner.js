import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
              >
              LEE <span>JAESIN</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.4)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>i can a</span>
              <TypeAnimation
                sequence={[
                  'Html',
                  2000,
                  'Css',
                  2000,
                  'Javascript',
                  2000,
                  'React',
                  2000,
                  'Svelte',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.5)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
                신입 프론트엔드 개발자 이재신입니다.
            </motion.p>
            <motion.div 
                variants={fadeIn('up', 0.6)} 
                initial="hidden" 
                whileInView={'show'} 
                viewport={{once: false, amount: 0.7}} 
                className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              
              <Link to='about' smooth={true}>
                <button className='btn btn-lg'>Contact me</button>
              </Link>
              <a href='#' className='text-gradient btn-link'>my Portfolio</a>
            </motion.div>
            <motion.div 
              variants={fadeIn('up', 0.7)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.facebook.com/profile.php?id=100004372328818'>
                <FaFacebook />
              </a>
              <a href='https://github.com/aap10kr?tab=overview&from=2023-02-01&to=2023-02-01'>
                <FaGithub />
              </a>
              <a href='https://www.instagram.com/sin_eeeeeeeee/'>
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt=''/>          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
