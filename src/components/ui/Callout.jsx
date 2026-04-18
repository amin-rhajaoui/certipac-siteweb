import { cn } from '@/lib/utils'

/**
 * Callout — bandeau d'information institutionnel (Article 1 du brand book).
 * Filet vertical bleu, fond légèrement teinté, texte dense.
 */

const tones = {
  info: 'bg-[#EDF5FF] border-[#194296]',
  success: 'bg-[#DEFBE6] border-[#24A148]',
  warning: 'bg-[#FCF4D6] border-[#F1C21B]',
  error: 'bg-[#FFF1F1] border-[#DA1E28]',
  neutral: 'bg-[#F4F4F4] border-[#161616]',
}

export default function Callout({ children, title, tone = 'info', reference, className }) {
  return (
    <aside
      className={cn(
        'border-l-[3px] px-5 py-4 text-[14px] leading-[1.6]',
        tones[tone] || tones.info,
        className,
      )}
    >
      {(title || reference) && (
        <div className="flex items-baseline justify-between gap-4 mb-1">
          {title && <span className="font-semibold text-[#161616]">{title}</span>}
          {reference && (
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#6F6F6F]">
              {reference}
            </span>
          )}
        </div>
      )}
      <div className="text-[#393939]">{children}</div>
    </aside>
  )
}
