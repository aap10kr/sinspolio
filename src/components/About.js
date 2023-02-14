import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';
import { Link } from 'react-scroll';

import Img1 from '../assets/Work-img1.png';
import Img2 from '../assets/Work-img2.png';
import Img3 from '../assets/Work-img3.png';
import Img4 from '../assets/Work-img4.png';
import Img5 from '../assets/Work-img5.png';
import Img6 from '../assets/Work-img6.png';

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
            className='flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount:0.3}}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>프론트엔드 개발자 오재신 입니다.</h3>
            <p className='mb-8'>
            운동과 개발을 좋아하고 항상 호기심을 가지고 호기심을 해결하기 위해 살아가며 어제보다 하나라도 더 많이 알아가는 오늘이 되기 위해 노력하는 프론트엔드 개발자입니다.
            </p>
            <div className='gap-x-6 lg:gap-x-10 mb-12'>
              <div className='flex mb-7'>
                <div className=''>
                  <div className='flex justify-center text-[35px] font-tertiary text-gradient mb-3'>
                    {inView ? <CountUp start={0} end={90} duration={3}/> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    <img src={Img1} alt='html-img1' className='w-20 opacity-90'/>
                  </div>
                </div>
                <div className='ml-14'>
                  <div className='flex justify-center text-[35px] font-tertiary text-gradient mb-3'>
                    {inView ? <CountUp start={0} end={85} duration={2}/> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    <img src={Img2} alt='html-img1' className='w-20 opacity-90'/>
                  </div>
                </div>
                <div className='ml-14 bg-WorkImg1'>
                  <div className='flex justify-center text-[35px] font-tertiary text-gradient mb-3'>
                    {inView ? <CountUp start={0} end={70} duration={2}/> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    <img src={Img3} alt='html-img1' className='w-20 opacity-90 rounded'/>
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className=''>
                  <div className='flex justify-center text-[35px] font-tertiary text-gradient mb-3'>
                    {inView ? <CountUp start={0} end={85} duration={2}/> : null}
                  </div>
                  <div className=''>
                    <img src={Img4} alt='html-img1' className='w-20 opacity-90'/>
                  </div>
                </div>
                <div className='ml-16'>
                  <div className='flex justify-center text-[35px] font-tertiary text-gradient mb-3'>
                    {inView ? <CountUp start={0} end={65} duration={1.5}/> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    <img src={Img5} alt='html-img1' className='w-16 opacity-90 rounded'/>
                  </div>
                </div>
                <div className='ml-16'>
                  <div className='flex justify-center text-[35px] font-tertiary text-gradient mb-3'>
                    {inView ? <CountUp start={0} end={65} duration={1.5}/> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    <img src={Img6} alt='html-img1' className='w-20 opacity-90'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <Link to='work' smooth={true}>
                <button className='btn btn-sm font-bold'>더 알아보기</button>
              </Link>
              <a href='https://periodic-zebu-130.notion.site/Sineee-815ed5c466d641379e340f208e308014' target="blank" className='btn-link'><span className='text-gradient font-bold'>이력서 보기</span></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
