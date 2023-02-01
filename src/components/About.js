import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return( 
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount:0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount:0.3}}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>프론트엔드 개발자 이재신 입니다.</h3>
            <p>
              Loremasdasdasdasasdasdasdasdasdasdasdasdasdasdfdsf
              qfgadfgadfgdfgdafgfdartwerwefwefgregdfdfvxvzdcszdfs
              qefaregfaergaergaergaregafgadfgadfgadfgadfgfdsfsd
              sdfsdfsdfsdfewr.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={1}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  year of<br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={1}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  year of<br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={1}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  year of<br/>
                  Experience
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>contect me</button>
              <a href='#' className='text-gradient btn-link'>My portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
