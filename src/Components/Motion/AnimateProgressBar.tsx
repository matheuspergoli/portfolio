import React from 'react'
import styled from 'styled-components';
import { motion, useScroll, useSpring } from 'framer-motion'

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  transform-origin: 0%;
  background-color: #04c2c9;
  z-index: 1000;
`

function AnimateProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <ProgressBar style={{ scaleX }} />
  )
}

export default AnimateProgressBar