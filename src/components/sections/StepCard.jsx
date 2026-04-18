import { cn } from '@/lib/utils'

/**
 * StepCard — étape institutionnelle numérotée.
 */

export default function StepCard({ number, icon: Icon, title, description, last = false }) {
  return (
    <article className="relative pl-8 sm:pl-0">
      {/* Numéro + filet vertical mobile */}
      <div className="absolute left-0 top-0 sm:static sm:mb-4 flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center bg-[#194296] text-white font-mono text-[12px] font-semibold">
          {String(number).padStart(2, '0')}
        </span>
        {Icon && (
          <Icon className="hidden sm:block h-5 w-5 text-[#525252]" strokeWidth={1.75} />
        )}
      </div>

      <h3 className="text-[16px] font-semibold text-[#161616] mb-2 leading-[1.3]">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.6] text-[#525252] max-w-md">
        {description}
      </p>
    </article>
  )
}
