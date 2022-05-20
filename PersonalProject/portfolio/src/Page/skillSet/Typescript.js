/* eslint-disable */

import React, { useEffect } from 'react';
import SkillList from './Components/SkillList';
import Exit from './Components/Exit';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Typescript = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <motion.div
        className='skill ts'
        animate={{
          scale: [0.8, 1],
          opacity: [0, 1],
        }}>
        <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
          TypeScript
        </h1>
        <hr />
      </motion.div>
      <Exit />
      <SkillList
        ts={window.location.pathname == '/stack/typescript' ? 'true' : 'false'}
      />
    </>
  );
};

export default Typescript;