import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants.js';

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uqhm8yq', 'template_umir856', form.current, 'p-xJ4WZkD6MKkXBMN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'  className='py-16 lg:section'>
      <div className='container mx-auto mb-20 lg:mb-20'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work<br/>togeher!
              </h2>
            </div>
          </motion.div>
          <motion.form 
            ref={form} 
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='name'
              name="user_name"
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="eamil"
              placeholder='email'
              name="user_email"
            />
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              type="text"
              placeholder='message'
              name="message"
            ></textarea>
            <input type="submit" value="Send" className='btn btn-lg' />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
