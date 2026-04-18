import FeatureCard from './FeatureCard'
import { cn } from '@/lib/utils'

export default function FeatureGrid({ features, columns = 3, className, withNumbers = false }) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={cn(`grid grid-cols-1 ${gridCols[columns] || gridCols[3]} gap-4 sm:gap-5`, className)}>
      {features.map((feature, i) => (
        <FeatureCard key={i} {...feature} index={i} number={withNumbers ? i + 1 : feature.number} />
      ))}
    </div>
  )
}
