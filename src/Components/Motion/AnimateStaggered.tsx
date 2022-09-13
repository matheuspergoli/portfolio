import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  index: number,
  children: ReactNode
}

function AnimateStaggered({ index, children }: Props) {
  return (
    <motion.div
    initial={{ opacity: 0, translateX: -50, translateY: -50 }}
    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}>
      {children}
    </motion.div>
  )
}

export default AnimateStaggered