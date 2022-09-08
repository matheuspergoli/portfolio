import React from 'react'
import { motion } from 'framer-motion'

const animations = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  exit: { scaleY: 0 }
}

function AnimateDiv({key, children }: any) {
  return (
    <motion.div
    key={key}
    variants={animations}
    initial='initial'
    animate='animate'
    exit='exit'
    transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  )
}

export default AnimateDiv