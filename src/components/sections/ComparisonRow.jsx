import { Check, X } from 'lucide-react'

/**
 * ComparisonRow — ligne "À FAIRE / À ÉVITER" (brand book p. 10).
 * Rendu en grille responsive avec rails colorés et iconographie discrète.
 */

export default function ComparisonRow({ context, reference, good, bad }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#E0E0E0]">
      <div className="bg-white md:col-span-3 p-4 sm:p-5">
        {reference && (
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1.5 tabular-nums">
            {reference}
          </p>
        )}
        <p className="text-[13px] font-semibold text-[#161616] leading-[1.4]">{context}</p>
      </div>

      <div className="bg-[#DEFBE6] md:col-span-4 md:col-start-4 p-4 sm:p-5 border-l-[3px] border-[#24A148]">
        <p className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#0E6027] mb-2">
          <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
          À faire
        </p>
        <p className="text-[13px] leading-[1.6] text-[#262626]">{good}</p>
      </div>

      <div className="bg-[#FFF1F1] md:col-span-5 p-4 sm:p-5 border-l-[3px] border-[#DA1E28]">
        <p className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#DA1E28] mb-2">
          <X className="h-3 w-3" strokeWidth={2.5} aria-hidden />
          À éviter
        </p>
        <p className="text-[13px] leading-[1.6] text-[#525252] line-through decoration-[#DA1E28]/60 decoration-1 underline-offset-2">
          {bad}
        </p>
      </div>
    </div>
  )
}
