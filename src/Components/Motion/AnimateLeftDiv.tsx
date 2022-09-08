import React from 'react'
import { motion } from 'framer-motion'

const animations = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 }
}

function AnimateLeftDiv({ children }: any) {
  return (
    <motion.div
    variants={animations}
    initial='initial'
    animate='animate'
    exit='exit'
    transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  )
}

export default AnimateLeftDiv