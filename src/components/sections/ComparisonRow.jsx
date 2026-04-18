/**
 * ComparisonRow — ligne "À FAIRE / À ÉVITER" inspirée du brand book p. 10.
 * Rendu en tableau responsive.
 */

export default function ComparisonRow({ context, reference, good, bad }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#E0E0E0]">
      <div className="bg-white md:col-span-3 p-4">
        {reference && (
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1">
            {reference}
          </p>
        )}
        <p className="text-[13px] font-semibold text-[#161616]">{context}</p>
      </div>

      <div className="bg-[#DEFBE6] md:col-span-4 md:col-start-4 p-4 border-l-[3px] border-[#24A148]">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#0E6027] mb-2">
          À faire
        </p>
        <p className="text-[13px] leading-[1.5] text-[#262626]">{good}</p>
      </div>

      <div className="bg-[#FFF1F1] md:col-span-5 p-4 border-l-[3px] border-[#DA1E28]">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#DA1E28] mb-2">
          À éviter
        </p>
        <p className="text-[13px] leading-[1.5] text-[#525252] line-through decoration-[#DA1E28]/60">
          {bad}
        </p>
      </div>
    </div>
  )
}
