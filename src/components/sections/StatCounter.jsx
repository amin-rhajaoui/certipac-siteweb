import useCountUp from '@/hooks/useCountUp'

export default function StatCounter({ value, suffix = '', label }) {
  const { ref, count } = useCountUp(value)

  return (
    <div ref={ref} className="text-center p-6 rounded-xl bg-surface-100/60">
      <div className="text-4xl font-extrabold text-[#194296] lg:text-5xl tabular-nums">
        {count}
        <span className="text-[#43AA43]">{suffix}</span>
      </div>
      <p className="mt-2 text-surface-500 text-sm font-medium">{label}</p>
    </div>
  )
}
