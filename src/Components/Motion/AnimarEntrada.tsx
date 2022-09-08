import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const animations = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 }
}

function AnimarEntrada({ children }: any) {
  const id = React.useId()

  return (
    <AnimatePresence>
      <motion.div
      key={id}
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default AnimarEntrada