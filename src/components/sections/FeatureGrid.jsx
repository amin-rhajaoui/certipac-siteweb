import { motion } from 'motion/react'
import { staggerContainer } from '@/lib/animations'
import FeatureCard from './FeatureCard'

export default function FeatureGrid({ features, columns = 3 }) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`grid grid-cols-1 ${gridCols[columns] || gridCols[3]} gap-6`}
    >
      {features.map((feature, i) => (
        <FeatureCard key={i} {...feature} index={i} />
      ))}
    </motion.div>
  )
}
