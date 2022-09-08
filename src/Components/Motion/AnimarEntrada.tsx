import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const animations = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  exit: { scaleY: 0 }
}

function AnimarEntrada({ children }: any) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.3 }}>{children}</motion.div>
    </AnimatePresence>
  )
}

export default AnimarEntrada